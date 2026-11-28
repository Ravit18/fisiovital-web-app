import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  Injector,
  afterNextRender,
  ElementRef,
  OnDestroy,
  computed,
  effect,
  inject,
  input,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ConfirmDialog, ConfirmDialogData } from '../../../core/components/confirm-dialog/confirm-dialog';
import { apiErrorMessage } from '../../../core/models/api-error.model';
import { ChatLine, ConversationSummary } from '../../../core/models/assistant-message.model';
import { AssistantService } from '../../../core/services/assistant.service';
import { AuthService } from '../../../core/services/auth.service';
import { FeedbackService } from '../../../core/services/feedback.service';
import { NotificationsStore } from '../../../core/services/notifications.store';

type HistoryGroup = 'today' | 'yesterday' | 'week' | 'older';

interface ChoiceSlot {
  value: string;
  day: string;
  time: string;
}

const TITLE_LENGTH = 60;
const AUTO_VOICE_KEY = 'fisiovital.assistant.autoVoice';
/** 50 ms of silence (8 kHz, 8-bit mono WAV) used to unlock audio playback during a click. */
const SILENT_WAV = silentWav();
const DAY = 24 * 60 * 60 * 1000;

/**
 * AI assistant page (US17 questions, US18 specialist, US19 booking, US20 rescheduling): chat history on the left,
 * the open chat on the right. /assistant starts a new chat; /assistant/:id continues one from the history.
 */
@Component({
  selector: 'app-assistant',
  imports: [FormsModule, MatIconModule, MatTooltipModule, RouterLink, TranslatePipe],
  templateUrl: './assistant.html',
  styleUrl: './assistant.scss',
  host: { '(document:keydown.escape)': 'historyOpen.set(false)' },
})
export class Assistant implements OnDestroy {
  /** Route parameter (withComponentInputBinding): the chat to open. */
  readonly id = input<string>();

  protected readonly auth = inject(AuthService);
  protected readonly notifications = inject(NotificationsStore);
  private readonly api = inject(AssistantService);
  private readonly translate = inject(TranslateService);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);
  private readonly feedback = inject(FeedbackService);
  private readonly injector = inject(Injector);
  private readonly log = viewChild<ElementRef<HTMLElement>>('log');
  private readonly input = viewChild<ElementRef<HTMLTextAreaElement>>('input');

  protected readonly isPatient = computed(() => this.auth.currentUser()?.role === 'PATIENT');
  protected readonly firstName = computed(() => this.auth.currentUser()?.fullName.trim().split(/\s+/)[0] ?? '');
  protected readonly profileMenuOpen = signal(false);
  /** Small screens: the history slides over the chat. */
  protected readonly historyOpen = signal(false);

  protected readonly conversations = signal<ConversationSummary[]>([]);
  protected readonly historyLoading = signal(true);
  protected readonly historyError = signal(false);
  protected readonly query = signal('');
  protected readonly activeId = signal<number | null>(null);

  protected draft = '';
  protected readonly lines = signal<ChatLine[]>([]);
  protected readonly threadLoading = signal(false);
  protected readonly threadError = signal<string | null>(null);
  protected readonly sending = signal(false);
  protected readonly requestingMicrophone = signal(false);
  protected readonly recording = signal(false);
  protected readonly transcribing = signal(false);
  protected readonly voiceError = signal('');
  protected readonly busy = computed(
    () => this.sending() || this.requestingMicrophone() || this.recording() || this.transcribing(),
  );

  private recorder?: MediaRecorder;
  private recordingStream?: MediaStream;
  private audioChunks: Blob[] = [];
  private discardRecordingOnStop = false;
  private destroyed = false;

  protected readonly suggestions = computed(() =>
    this.isPatient()
      ? ['assistant.suggestions.policy', 'assistant.suggestions.specialist', 'assistant.suggestions.book', 'assistant.suggestions.reschedule']
      : ['assistant.suggestions.policy', 'assistant.suggestions.physioReschedule', 'assistant.suggestions.physioReferral'],
  );
  protected readonly subtitle = computed(() => (this.isPatient() ? 'assistant.subtitle' : 'assistant.subtitlePhysio'));

  protected readonly activeTitle = computed(
    () => this.conversations().find((c) => c.id === this.activeId())?.title ?? '',
  );

  /** History filtered by the search box and grouped like ChatGPT/Claude: today, yesterday, 7 days, older. */
  protected readonly groups = computed(() => {
    const term = this.query().trim().toLocaleLowerCase();
    const visible = term
      ? this.conversations().filter((c) => c.title.toLocaleLowerCase().includes(term))
      : this.conversations();
    const order: HistoryGroup[] = ['today', 'yesterday', 'week', 'older'];
    return order
      .map((group) => ({ group, items: visible.filter((c) => groupOf(c.lastActivityAt) === group) }))
      .filter((entry) => entry.items.length > 0);
  });

  constructor() {
    this.loadHistory();
    effect(() => {
      const raw = this.id();
      untracked(() => this.openRoute(raw));
    });
  }

  ngOnDestroy(): void {
    this.stopSpeaking();
    this.audioUrls.forEach((url) => URL.revokeObjectURL(url));
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

  // ---------- History ----------

  protected loadHistory(): void {
    this.historyLoading.set(true);
    this.historyError.set(false);
    this.api.conversations().subscribe({
      next: (conversations) => {
        this.conversations.set(conversations);
        this.historyLoading.set(false);
      },
      error: () => {
        this.historyLoading.set(false);
        this.historyError.set(true);
      },
    });
  }

  protected chatLink(id: number): string {
    return `${this.auth.basePath()}/assistant/${id}`;
  }

  protected newChat(): void {
    this.historyOpen.set(false);
    if (this.activeId() === null) {
      this.resetThread();
      queueMicrotask(() => this.input()?.nativeElement.focus());
      return;
    }
    this.router.navigate([this.auth.basePath(), 'assistant']);
  }

  protected deleteChat(conversation: ConversationSummary, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.dialog
      .open<ConfirmDialog, ConfirmDialogData, boolean>(ConfirmDialog, {
        data: {
          title: 'assistant.deleteTitle',
          message: 'assistant.deleteMessage',
          confirm: 'assistant.deleteConfirm',
        },
        autoFocus: 'dialog',
      })
      .afterClosed()
      .subscribe((confirmed) => {
        if (!confirmed) return;
        this.api.deleteConversation(conversation.id).subscribe({
          next: () => {
            this.conversations.update((list) => list.filter((c) => c.id !== conversation.id));
            this.feedback.success('assistant.deleted');
            if (this.activeId() === conversation.id) {
              this.router.navigate([this.auth.basePath(), 'assistant']);
            }
          },
          error: (error: HttpErrorResponse) => this.feedback.error(error),
        });
      });
  }

  /** Opens the chat named by the URL; a chat that was just created here is already on screen. */
  private openRoute(raw: string | undefined): void {
    this.historyOpen.set(false);
    const id = raw ? Number(raw) : null;
    if (id !== null && (!Number.isInteger(id) || id <= 0)) {
      this.router.navigate([this.auth.basePath(), 'assistant'], { replaceUrl: true });
      return;
    }
    if (id === this.activeId() && (id === null || this.lines().length > 0)) return;
    this.stopRecording(true);
    this.stopSpeaking();
    this.resetThread();
    this.activeId.set(id);
    if (id !== null) this.loadThread(id);
  }

  protected loadThread(id: number): void {
    this.threadLoading.set(true);
    this.threadError.set(null);
    this.api.messages(id).subscribe({
      next: (messages) => {
        if (this.activeId() !== id) return;
        this.lines.set(
          messages.map(
            (m) =>
              ({
                author: m.sender === 'USER' ? 'user' : 'assistant',
                text: m.content,
                choices: m.choices ?? [],
              }) as ChatLine,
          ),
        );
        this.threadLoading.set(false);
        this.scrollToEnd();
      },
      error: (error: HttpErrorResponse) => {
        if (this.activeId() !== id) return;
        this.threadLoading.set(false);
        this.threadError.set(
          error.status === 404
            ? this.translate.instant('assistant.notFound')
            : (apiErrorMessage(error) ?? this.translate.instant('errors.network')),
        );
      },
    });
  }

  private resetThread(): void {
    this.lines.set([]);
    this.draft = '';
    this.voiceError.set('');
    this.threadError.set(null);
    this.threadLoading.set(false);
    this.sending.set(false);
  }

  // ---------- Sending ----------

  protected useSuggestion(key: string): void {
    this.draft = this.translate.instant(key);
    this.send();
  }

  /** Quick replies of the last assistant message; older messages keep theirs only as context. */
  protected readonly activeChoices = computed(() => {
    const lines = this.lines();
    const last = lines[lines.length - 1];
    return !this.sending() && last?.author === 'assistant' ? (last.choices ?? []) : [];
  });

  /** Time slots ("jue 27/11 · 10:00") are drawn like the booking picker; the rest as chips. */
  protected readonly choiceView = computed(() => {
    const choices = this.activeChoices();
    const slots = choices.map(slotOf);
    if (choices.length > 0 && slots.every((slot) => slot !== null)) {
      return { kind: 'slots' as const, slots: slots as ChoiceSlot[], other: [] as string[] };
    }
    return { kind: 'chips' as const, slots: [] as ChoiceSlot[], other: choices };
  });

  protected choose(choice: string): void {
    if (this.busy() || this.threadLoading()) return;
    this.draft = choice;
    this.send();
  }

  protected isAffirmative(choice: string): boolean {
    // No \b: "í" is not a word character for JS regexes, so "Sí," would not match.
    return /^(s[ií](?![a-z])|yes(?![a-z])|confirm)/i.test(choice.trim());
  }

  protected onEnter(event: Event): void {
    const keyboard = event as KeyboardEvent;
    if (keyboard.shiftKey || keyboard.isComposing) return;
    keyboard.preventDefault();
    this.send();
  }

  protected send(): void {
    const message = this.draft.trim();
    if (!message || this.busy() || this.threadLoading()) return;
    this.draft = '';
    this.voiceError.set('');
    this.stopSpeaking();
    this.lines.update((lines) => [...lines, { author: 'user', text: message }]);
    this.sending.set(true);
    this.scrollToEnd();

    const startedIn = this.activeId();
    this.api.send(message, startedIn).subscribe({
      next: (reply) => {
        if (this.activeId() !== startedIn) {
          // The user moved to another chat while waiting: the reply is saved there, just refresh the list.
          this.touchHistory(reply.conversationId, message);
          return;
        }
        this.lines.update((lines) => [
          ...lines,
          { author: 'assistant', text: reply.reply, source: reply.source, choices: reply.choices ?? [] },
        ]);
        this.sending.set(false);
        // Automatic voice uses the browser's voice: free and unlimited. Gemini (10 audios a day on the free
        // tier) is kept for the "Escuchar" button.
        if (this.autoVoice()) this.speakWithBrowser(this.lines().length - 1, reply.reply);
        this.touchHistory(reply.conversationId, message);
        if (startedIn === null) {
          this.activeId.set(reply.conversationId);
          this.router.navigate([this.auth.basePath(), 'assistant', reply.conversationId], { replaceUrl: true });
        }
        this.scrollToEnd();
      },
      error: (error: HttpErrorResponse) => {
        if (this.activeId() !== startedIn) return;
        // US17: when the AI is down the backend answers 503 with a translated message.
        const text = apiErrorMessage(error) ?? this.translate.instant('errors.network');
        this.lines.update((lines) => [...lines, { author: 'error', text }]);
        this.sending.set(false);
        this.scrollToEnd();
      },
    });
  }

  /** Moves the chat to the top of the history (or adds it, titled with its first message). */
  private touchHistory(id: number, firstMessage: string): void {
    const now = new Date().toISOString();
    this.conversations.update((list) => {
      const existing = list.find((c) => c.id === id);
      const updated: ConversationSummary = existing
        ? { ...existing, lastActivityAt: now }
        : { id, title: titleOf(firstMessage), startedAt: now, lastActivityAt: now };
      return [updated, ...list.filter((c) => c.id !== id)];
    });
  }

  // ---------- Voice replies: "Escuchar" = Gemini TTS (browser voice if it fails); automatic = browser voice ----------

  protected readonly autoVoice = signal(readAutoVoice());
  /** Index of the line being read aloud, and of the one whose audio is loading. */
  protected readonly speakingIndex = signal<number | null>(null);
  protected readonly loadingSpeechIndex = signal<number | null>(null);
  /** The browser blocked Gemini's audio (autoplay policy): the bar asks to tap "Escuchar" again. */
  protected readonly autoplayBlocked = signal(false);
  /**
   * One reusable player. Browsers only let audio start from a click, and Gemini's audio arrives seconds after
   * the click on "Escuchar"; a player that already played (silently) during that click may play later.
   */
  private player?: HTMLAudioElement;
  private readonly audioUrls = new Map<string, string>();

  protected toggleAutoVoice(): void {
    const next = !this.autoVoice();
    this.autoVoice.set(next);
    this.autoplayBlocked.set(false);
    try {
      localStorage.setItem(AUTO_VOICE_KEY, String(next));
    } catch {
      // Without storage the choice lasts until the page is reloaded.
    }
    if (!next) this.stopSpeaking();
  }

  /** Called inside a click/Enter: plays a few ms of silence so the same player can speak the reply later. */
  private unlockAudio(): void {
    if (typeof Audio === 'undefined') return;
    this.player ??= new Audio();
    this.player.src = SILENT_WAV;
    this.player.play()?.catch(() => undefined);
  }

  protected toggleSpeech(index: number): void {
    if (this.speakingIndex() === index || this.loadingSpeechIndex() === index) {
      this.stopSpeaking();
      return;
    }
    const line = this.lines()[index];
    if (line?.author !== 'assistant') return;
    this.unlockAudio();
    this.speak(index, line.text);
  }

  private speak(index: number, text: string): void {
    this.stopSpeaking();
    const cached = this.audioUrls.get(text);
    if (cached) {
      this.play(index, cached);
      return;
    }
    this.loadingSpeechIndex.set(index);
    this.api.speech(text).subscribe({
      next: (blob) => {
        if (this.loadingSpeechIndex() !== index) return;
        this.loadingSpeechIndex.set(null);
        const url = URL.createObjectURL(blob);
        this.audioUrls.set(text, url);
        this.play(index, url);
      },
      error: () => {
        if (this.loadingSpeechIndex() !== index) return;
        this.loadingSpeechIndex.set(null);
        this.speakWithBrowser(index, text);
      },
    });
  }

  private play(index: number, url: string): void {
    if (typeof Audio === 'undefined') return;
    this.player ??= new Audio();
    const player = this.player;
    player.src = url;
    this.speakingIndex.set(index);
    this.autoplayBlocked.set(false);
    player.onended = () => this.speakingIndex.set(null);
    player.onerror = () => this.speakingIndex.set(null);
    player.play()?.catch((error: unknown) => {
      this.speakingIndex.set(null);
      if (error instanceof DOMException && error.name === 'NotAllowedError') this.autoplayBlocked.set(true);
    });
  }

  /** Fallback when Gemini has no quota: the browser's own Spanish voice. */
  private speakWithBrowser(index: number, text: string): void {
    if (typeof speechSynthesis === 'undefined') return;
    const utterance = new SpeechSynthesisUtterance(text);
    const lang = this.translate.currentLang()?.startsWith('en') ? 'en-US' : 'es-419';
    utterance.lang = lang;
    utterance.voice =
      speechSynthesis.getVoices().find((v) => v.lang === lang) ??
      speechSynthesis.getVoices().find((v) => v.lang.startsWith(lang.slice(0, 2))) ??
      null;
    utterance.onend = () => this.speakingIndex.set(null);
    utterance.onerror = () => this.speakingIndex.set(null);
    this.speakingIndex.set(index);
    speechSynthesis.speak(utterance);
  }

  private stopSpeaking(): void {
    this.loadingSpeechIndex.set(null);
    this.speakingIndex.set(null);
    if (this.player) {
      this.player.onended = null;
      this.player.pause();
    }
    if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
  }

  // ---------- Voice (the transcript fills the box; the user decides when to send) ----------

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
      if (this.destroyed) {
        stream.getTracks().forEach((track) => track.stop());
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
      recorder.onerror = () => this.voiceError.set(this.translate.instant('assistant.voiceError'));
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
    this.api.transcribe(audio, audioFileName(audio)).subscribe({
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
        this.voiceError.set(combined.length > 1000 ? this.translate.instant('assistant.voiceLimit') : '');
        queueMicrotask(() => this.input()?.nativeElement.focus());
      },
      error: (error: HttpErrorResponse) => {
        this.transcribing.set(false);
        this.voiceError.set(apiErrorMessage(error) ?? this.translate.instant('errors.network'));
      },
    });
  }

  // ---------- Header ----------

  protected initials(fullName: string): string {
    return fullName
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? '')
      .join('');
  }

  protected signOut(): void {
    this.auth.signOut();
    this.notifications.clear();
    this.router.navigate(['/sign-in']);
  }

  /** After the next render, so the new message and its option buttons are already in the DOM. */
  private scrollToEnd(): void {
    afterNextRender(
      () => {
        const log = this.log()?.nativeElement;
        if (log) log.scrollTop = log.scrollHeight;
      },
      { injector: this.injector },
    );
  }
}

/** Same rule as the backend (Conversation.titleOf): one line, cut at the last whole word before 60 characters. */
export function titleOf(message: string): string {
  const line = message.trim().replace(/\s+/g, ' ');
  if (line.length <= TITLE_LENGTH) return line;
  const cut = line.lastIndexOf(' ', TITLE_LENGTH);
  return `${line.slice(0, cut > TITLE_LENGTH / 2 ? cut : TITLE_LENGTH).trimEnd()}…`;
}

/** The backend sends LocalDateTime without zone; it is read as local time. */
function groupOf(value: string, now = new Date()): HistoryGroup {
  const date = new Date(value);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const day = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  if (day >= today) return 'today';
  if (day >= today - DAY) return 'yesterday';
  if (day >= today - 7 * DAY) return 'week';
  return 'older';
}

/** "jue 27/11 · 10:00" -> day + time; null when the choice is not a time slot. */
export function slotOf(choice: string): ChoiceSlot | null {
  const match = /^(.+?)\s*[·–-]\s*(\d{1,2}:\d{2})(\s*[ap]\.?\s?m\.?)?$/i.exec(choice.trim());
  return match ? { value: choice, day: match[1].trim(), time: match[2] + (match[3] ?? '') } : null;
}

function silentWav(): string {
  const samples = 400;
  const bytes = new Uint8Array(44 + samples);
  const view = new DataView(bytes.buffer);
  const text = (offset: number, value: string) =>
    [...value].forEach((char, i) => view.setUint8(offset + i, char.charCodeAt(0)));
  text(0, 'RIFF');
  view.setUint32(4, 36 + samples, true);
  text(8, 'WAVEfmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, 8000, true);
  view.setUint32(28, 8000, true);
  view.setUint16(32, 1, true);
  view.setUint16(34, 8, true);
  text(36, 'data');
  view.setUint32(40, samples, true);
  bytes.fill(128, 44);
  let binary = '';
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return `data:audio/wav;base64,${btoa(binary)}`;
}

function readAutoVoice(): boolean {
  try {
    return localStorage.getItem(AUTO_VOICE_KEY) === 'true';
  } catch {
    return false;
  }
}

function audioFileName(audio: Blob): string {
  if (audio.type.includes('mp4')) return 'voice.mp4';
  if (audio.type.includes('ogg')) return 'voice.ogg';
  if (audio.type.includes('wav')) return 'voice.wav';
  return 'voice.webm';
}
