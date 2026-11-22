import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, computed, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { apiErrorMessage } from '../../models/api-error.model';
import { ChatLine } from '../../models/assistant-message.model';
import { AssistantService } from '../../services/assistant.service';
import { AuthService } from '../../services/auth.service';

/**
 * Floating AI assistant (US17 questions, US18 specialist, US19 booking, US20 rescheduling). Each layout mounts it
 * once, so the conversation survives page changes; closing the panel keeps it until "New conversation".
 */
@Component({
  selector: 'app-assistant-chat',
  imports: [FormsModule, MatButtonModule, MatIconModule, MatProgressBarModule, MatTooltipModule, TranslatePipe],
  templateUrl: './assistant-chat.html',
  styleUrl: './assistant-chat.scss',
  host: { '(document:keydown.escape)': 'close()' },
})
export class AssistantChat implements OnDestroy {
  private readonly api = inject(AssistantService);
  private readonly translate = inject(TranslateService);
  private readonly auth = inject(AuthService);
  private readonly log = viewChild<ElementRef<HTMLElement>>('log');
  private readonly input = viewChild<ElementRef<HTMLTextAreaElement>>('input');
  protected readonly isPatient = computed(() => this.auth.currentUser()?.role === 'PATIENT');

  protected readonly open = signal(false);
  /** A reply arrived while the panel was closed: the launcher shows a dot. */
  protected readonly unread = signal(false);
  protected draft = '';
  protected readonly lines = signal<ChatLine[]>([]);
  protected readonly sending = signal(false);
  protected readonly requestingMicrophone = signal(false);
  protected readonly recording = signal(false);
  protected readonly transcribing = signal(false);
  protected readonly voiceError = signal('');
  private conversationId: number | null = null;
  private recorder?: MediaRecorder;
  private recordingStream?: MediaStream;
  private audioChunks: Blob[] = [];
  private discardRecordingOnStop = false;
  private destroyed = false;

  /** Example prompts that cover each user story. */
  protected readonly suggestions = computed(() =>
    this.isPatient()
      ? ['assistant.suggestions.policy', 'assistant.suggestions.specialist', 'assistant.suggestions.book', 'assistant.suggestions.reschedule']
      : ['assistant.suggestions.policy', 'assistant.suggestions.physioReschedule', 'assistant.suggestions.physioReferral'],
  );
  protected readonly subtitle = computed(() => (this.isPatient() ? 'assistant.subtitle' : 'assistant.subtitlePhysio'));

  protected toggle(): void {
    if (this.open()) {
      this.close();
      return;
    }
    this.open.set(true);
    this.unread.set(false);
    this.scrollToEnd();
    queueMicrotask(() => this.input()?.nativeElement.focus());
  }

  protected close(): void {
    this.stopRecording(true);
    this.open.set(false);
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    this.discardRecordingOnStop = true;
    if (this.recorder && this.recorder.state !== 'inactive') {
      this.recorder.ondataavailable = null;
      this.recorder.onstop = null;
      this.recorder.onerror = null;
      this.recorder.stop();
    }
    this.releaseRecordingStream();
  }

  protected async toggleRecording(): Promise<void> {
    if (this.recording()) {
      this.stopRecording();
      return;
    }
    if (this.sending() || this.transcribing() || this.requestingMicrophone()) return;

    this.voiceError.set('');
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
      this.voiceError.set(this.translate.instant('assistant.voiceUnavailable'));
      return;
    }

    this.requestingMicrophone.set(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (this.destroyed || !this.open()) {
        stream.getTracks().forEach((track) => track.stop());
        if (!this.destroyed) this.requestingMicrophone.set(false);
        return;
      }

      this.requestingMicrophone.set(false);
      this.recordingStream = stream;
      this.audioChunks = [];
      this.discardRecordingOnStop = false;
      const recorder = new MediaRecorder(stream);
      this.recorder = recorder;
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) this.audioChunks.push(event.data);
      };
      recorder.onerror = () => {
        this.voiceError.set(this.translate.instant('assistant.voiceError'));
      };
      recorder.onstop = () => {
        this.releaseRecordingStream();
        this.recorder = undefined;
        this.recording.set(false);
        const discard = this.discardRecordingOnStop;
        this.discardRecordingOnStop = false;
        const audio = new Blob(this.audioChunks, { type: recorder.mimeType || 'audio/webm' });
        this.audioChunks = [];
        if (discard) return;
        if (!audio.size) {
          this.voiceError.set(this.translate.instant('assistant.voiceNoAudio'));
          return;
        }
        this.transcribeAudio(audio);
      };
      recorder.start();
      this.recording.set(true);
    } catch (error) {
      if (this.destroyed) return;
      this.requestingMicrophone.set(false);
      this.releaseRecordingStream();
      this.recorder = undefined;
      this.recording.set(false);
      this.voiceError.set(this.recordingError(error));
    }
  }

  private stopRecording(discard = false): void {
    if (this.recorder && this.recorder.state !== 'inactive') {
      this.discardRecordingOnStop = discard;
      this.recorder.stop();
    }
  }

  private releaseRecordingStream(): void {
    this.recordingStream?.getTracks().forEach((track) => track.stop());
    this.recordingStream = undefined;
  }

  private recordingError(error: unknown): string {
    if (error instanceof DOMException && ['NotAllowedError', 'SecurityError'].includes(error.name)) {
      return this.translate.instant('assistant.voicePermissionDenied');
    }
    if (error instanceof DOMException && error.name === 'NotFoundError') {
      return this.translate.instant('assistant.voiceNoMicrophone');
    }
    return this.translate.instant('assistant.voiceError');
  }

  private transcribeAudio(audio: Blob): void {
    if (audio.size > 1_048_576) {
      this.voiceError.set(this.translate.instant('assistant.voiceTooLarge'));
      return;
    }
    this.transcribing.set(true);
    this.api.transcribe(audio, this.audioFileName(audio)).subscribe({
      next: ({ transcript }) => {
        this.transcribing.set(false);
        const text = transcript.trim();
        if (!text) {
          this.voiceError.set(this.translate.instant('assistant.voiceNoAudio'));
          return;
        }
        const current = this.draft.trim();
        const combined = current ? `${current} ${text}` : text;
        this.draft = combined.slice(0, 1000).trimEnd();
        this.voiceError.set(
          combined.length > 1000 ? this.translate.instant('assistant.voiceLimit') : '',
        );
        queueMicrotask(() => this.input()?.nativeElement.focus());
      },
      error: (error: HttpErrorResponse) => {
        this.transcribing.set(false);
        this.voiceError.set(apiErrorMessage(error) ?? this.translate.instant('errors.network'));
      },
    });
  }

  private audioFileName(audio: Blob): string {
    if (audio.type.includes('mp4')) return 'voice.mp4';
    if (audio.type.includes('ogg')) return 'voice.ogg';
    if (audio.type.includes('wav')) return 'voice.wav';
    return 'voice.webm';
  }

  protected useSuggestion(key: string): void {
    this.draft = this.translate.instant(key);
    this.send();
  }

  protected send(): void {
    const message = this.draft.trim();
    if (!message || this.sending() || this.recording() || this.transcribing()) return;
    this.draft = '';
    this.voiceError.set('');
    this.lines.update((lines) => [...lines, { author: 'user', text: message }]);
    this.sending.set(true);
    this.scrollToEnd();

    this.api.send(message, this.conversationId).subscribe({
      next: (reply) => {
        this.conversationId = reply.conversationId;
        this.addReply({ author: 'assistant', text: reply.reply, source: reply.source });
      },
      error: (error: HttpErrorResponse) => {
        // US17: when the AI is down the backend answers 503 with a translated message.
        const text = apiErrorMessage(error) ?? this.translate.instant('errors.network');
        this.addReply({ author: 'error', text });
      },
    });
  }

  protected newConversation(): void {
    if (this.requestingMicrophone() || this.recording() || this.transcribing() || this.sending()) return;
    this.conversationId = null;
    this.lines.set([]);
    this.draft = '';
    this.voiceError.set('');
  }

  private addReply(line: ChatLine): void {
    this.lines.update((lines) => [...lines, line]);
    this.sending.set(false);
    if (!this.open()) this.unread.set(true);
    this.scrollToEnd();
  }

  private scrollToEnd(): void {
    queueMicrotask(() => {
      const log = this.log()?.nativeElement;
      if (log) log.scrollTop = log.scrollHeight;
    });
  }
}
