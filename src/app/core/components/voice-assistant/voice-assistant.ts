import { HttpErrorResponse } from '@angular/common/http';
import { Component, DestroyRef, OnDestroy, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavigationEnd, Router } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { apiErrorMessage } from '../../models/api-error.model';
import { AgentAction } from '../../models/assistant-message.model';
import { AssistantService } from '../../services/assistant.service';
import { AuthService } from '../../services/auth.service';
import { LanguageService } from '../../services/language.service';

type VoiceState = 'idle' | 'listening' | 'thinking' | 'speaking' | 'done';

/** Minimal typing of the Web Speech API (Chrome/Edge expose it as webkitSpeechRecognition). */
interface Recognition {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  onresult: ((event: { resultIndex: number; results: ArrayLike<ArrayLike<{ transcript: string }> & { isFinal: boolean }> }) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
  abort(): void;
}

const CONVERSATION_KEY = 'fisiovital.voice.conversationId';
const BAR_WEIGHTS = [0.55, 0.85, 1, 0.8, 0.5];

/**
 * Floating voice assistant (US17-US20 by voice). Listens, shows what you say as you speak, sends it to the agent
 * with the open screen, opens the screen the agent asks for (physiotherapists, a profile on a given day…) and reads
 * the answer aloud with the browser's voice, which is free and unlimited.
 */
@Component({
  selector: 'app-voice-assistant',
  imports: [MatIconModule, MatTooltipModule, TranslatePipe],
  templateUrl: './voice-assistant.html',
  styleUrl: './voice-assistant.scss',
  host: { '(document:keydown.escape)': 'close()' },
})
export class VoiceAssistant implements OnDestroy {
  private readonly api = inject(AssistantService);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly translate = inject(TranslateService);
  private readonly language = inject(LanguageService);

  protected readonly state = signal<VoiceState>('idle');
  protected readonly open = computed(() => this.state() !== 'idle');
  protected readonly transcript = signal('');
  protected readonly reply = signal('');
  protected readonly choices = signal<string[]>([]);
  protected readonly error = signal('');
  /** Microphone level 0..1, smoothed: drives the orb and the bars. */
  protected readonly level = signal(0);
  protected readonly bars = computed(() => BAR_WEIGHTS.map((weight) => 0.18 + Math.min(1, this.level() * 1.8) * weight));
  /** The full chat page has its own microphone: the floating button stays out of its way. */
  protected readonly hidden = signal(false);

  private recognition?: Recognition;
  private recorder?: MediaRecorder;
  private chunks: Blob[] = [];
  private stream?: MediaStream;
  private audioContext?: AudioContext;
  private frame = 0;
  private heardSpeech = false;
  private silenceSince = 0;
  private sendOnEnd = true;

  constructor() {
    const update = () => this.hidden.set(/\/assistant(\/|$)/.test(this.router.url.split(/[?#]/)[0]));
    update();
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(inject(DestroyRef)),
      )
      .subscribe(update);
  }

  ngOnDestroy(): void {
    this.stopListening(false);
    this.cancelSpeech();
  }

  // ---------- Main button ----------

  protected toggle(): void {
    switch (this.state()) {
      case 'listening':
        this.stopListening(true);
        break;
      case 'speaking':
        this.cancelSpeech();
        this.state.set('done');
        break;
      case 'thinking':
        break;
      default:
        this.listen();
    }
  }

  protected close(): void {
    if (this.state() === 'idle') return;
    this.stopListening(false);
    this.cancelSpeech();
    this.state.set('idle');
  }

  protected choose(choice: string): void {
    this.cancelSpeech();
    this.transcript.set(choice);
    this.ask(choice);
  }

  // ---------- Listening ----------

  private async listen(): Promise<void> {
    this.cancelSpeech();
    this.error.set('');
    this.transcript.set('');
    this.reply.set('');
    this.choices.set([]);
    this.heardSpeech = false;
    this.sendOnEnd = true;
    this.state.set('listening');

    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      this.fail(this.translate.instant('assistant.voicePermissionDenied'));
      return;
    }
    if (this.state() !== 'listening') {
      this.releaseMicrophone();
      return;
    }
    this.startMeter(this.stream);

    const Ctor = (window as unknown as { SpeechRecognition?: new () => Recognition; webkitSpeechRecognition?: new () => Recognition })
      .SpeechRecognition ?? (window as unknown as { webkitSpeechRecognition?: new () => Recognition }).webkitSpeechRecognition;
    if (Ctor) {
      this.listenWithBrowser(new Ctor());
    } else {
      this.listenWithRecorder(this.stream);
    }
  }

  /** Chrome/Edge: live transcript while you speak; it stops by itself after a pause. */
  private listenWithBrowser(recognition: Recognition): void {
    this.recognition = recognition;
    recognition.lang = this.language.current();
    recognition.interimResults = true;
    recognition.continuous = false;
    let finalText = '';
    recognition.onresult = (event) => {
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) finalText += result[0].transcript;
        else interim += result[0].transcript;
      }
      this.heardSpeech = true;
      this.transcript.set((finalText + interim).trim());
    };
    recognition.onerror = (event) => {
      if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
        this.sendOnEnd = false;
        this.fail(this.translate.instant('assistant.voicePermissionDenied'));
      }
    };
    recognition.onend = () => {
      this.recognition = undefined;
      this.releaseMicrophone();
      if (this.state() !== 'listening') return;
      const text = this.transcript().trim();
      if (this.sendOnEnd && text) this.ask(text);
      else if (this.sendOnEnd) this.fail(this.translate.instant('assistant.voiceNotHeard'));
      else this.state.set('idle');
    };
    recognition.start();
  }

  /** Other browsers: record, stop after a pause, and transcribe with the backend (Gemini). */
  private listenWithRecorder(stream: MediaStream): void {
    if (typeof MediaRecorder === 'undefined') {
      this.fail(this.translate.instant('assistant.voiceUnavailable'));
      return;
    }
    this.chunks = [];
    const recorder = new MediaRecorder(stream);
    this.recorder = recorder;
    recorder.ondataavailable = (event) => event.data.size > 0 && this.chunks.push(event.data);
    recorder.onstop = () => {
      this.recorder = undefined;
      this.releaseMicrophone();
      if (!this.sendOnEnd || this.state() !== 'listening') return;
      const audio = new Blob(this.chunks, { type: recorder.mimeType || 'audio/webm' });
      this.state.set('thinking');
      this.api.transcribe(audio, audio.type.includes('mp4') ? 'voice.mp4' : 'voice.webm').subscribe({
        next: ({ transcript }) => {
          const text = transcript.trim();
          this.transcript.set(text);
          if (text) this.ask(text);
          else this.fail(this.translate.instant('assistant.voiceNotHeard'));
        },
        error: (error: HttpErrorResponse) => this.fail(apiErrorMessage(error) ?? this.translate.instant('errors.network')),
      });
    };
    recorder.start();
  }

  private stopListening(send: boolean): void {
    this.sendOnEnd = send;
    if (this.recognition) this.recognition.stop();
    else if (this.recorder && this.recorder.state !== 'inactive') this.recorder.stop();
    else this.releaseMicrophone();
  }

  /** Mic level for the animation; with the recorder fallback it also ends the turn after 1.4 s of silence. */
  private startMeter(stream: MediaStream): void {
    const Context = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Context) return;
    this.audioContext = new Context();
    const analyser = this.audioContext.createAnalyser();
    analyser.fftSize = 512;
    this.audioContext.createMediaStreamSource(stream).connect(analyser);
    const data = new Uint8Array(analyser.fftSize);
    const tick = () => {
      analyser.getByteTimeDomainData(data);
      let sum = 0;
      for (const value of data) sum += ((value - 128) / 128) ** 2;
      const rms = Math.sqrt(sum / data.length);
      this.level.update((previous) => previous * 0.7 + Math.min(1, rms * 4) * 0.3);
      if (this.recorder) this.detectSilence(rms);
      this.frame = requestAnimationFrame(tick);
    };
    tick();
  }

  private detectSilence(rms: number): void {
    const now = performance.now();
    if (rms > 0.04) {
      this.heardSpeech = true;
      this.silenceSince = 0;
    } else if (this.heardSpeech) {
      this.silenceSince ||= now;
      if (now - this.silenceSince > 1400) this.stopListening(true);
    }
  }

  private releaseMicrophone(): void {
    cancelAnimationFrame(this.frame);
    this.audioContext?.close().catch(() => undefined);
    this.audioContext = undefined;
    this.stream?.getTracks().forEach((track) => track.stop());
    this.stream = undefined;
    this.level.set(0);
  }

  // ---------- Agent ----------

  private ask(text: string): void {
    this.state.set('thinking');
    this.choices.set([]);
    const conversationId = Number(sessionStorage.getItem(CONVERSATION_KEY)) || null;
    this.api.send(text, conversationId, { screen: this.router.url.slice(0, 200), voice: true }).subscribe({
      next: (answer) => {
        sessionStorage.setItem(CONVERSATION_KEY, String(answer.conversationId));
        this.reply.set(answer.reply);
        this.choices.set(answer.choices ?? []);
        this.navigate(answer.action ?? null, answer.conversationId);
        this.speak(answer.reply);
      },
      error: (error: HttpErrorResponse) => this.fail(apiErrorMessage(error) ?? this.translate.instant('errors.network')),
    });
  }

  /** Turns the agent's action into a route of the signed-in user's group. */
  private navigate(action: AgentAction | null, conversationId: number): void {
    const url = routeFor(action, this.auth.basePath(), conversationId);
    if (url) this.router.navigateByUrl(url);
  }

  private speak(text: string): void {
    if (typeof speechSynthesis === 'undefined' || !text) {
      this.state.set('done');
      return;
    }
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const lang = this.language.current();
    utterance.lang = lang;
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices.find((v) => v.lang === lang) ?? voices.find((v) => v.lang.startsWith(lang.slice(0, 2))) ?? null;
    utterance.onend = () => this.state() === 'speaking' && this.state.set('done');
    utterance.onerror = () => this.state() === 'speaking' && this.state.set('done');
    this.state.set('speaking');
    speechSynthesis.speak(utterance);
  }

  private cancelSpeech(): void {
    if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
  }

  private fail(message: string): void {
    this.releaseMicrophone();
    this.error.set(message);
    this.state.set('done');
  }
}

/** Route of a page for the user's group (/patient or /physiotherapist); null for pages that group doesn't have. */
export function routeFor(action: AgentAction | null, base: string, conversationId?: number): string | null {
  if (!action?.page) return null;
  const patient = base === '/patient';
  switch (action.page) {
    case 'HOME':
      return `${base}/home`;
    case 'NOTIFICATIONS':
      return `${base}/notifications`;
    case 'ASSISTANT':
      return conversationId ? `${base}/assistant/${conversationId}` : `${base}/assistant`;
    case 'PHYSIOTHERAPISTS':
      return patient ? `${base}/physiotherapists${action.specialty ? `?specialty=${encodeURIComponent(action.specialty)}` : ''}` : null;
    case 'PHYSIOTHERAPIST_PROFILE':
      return patient && action.physiotherapistId
        ? `${base}/physiotherapists/${action.physiotherapistId}${action.date ? `?date=${encodeURIComponent(action.date)}` : ''}`
        : null;
    case 'APPOINTMENTS':
      return patient ? `${base}/appointments` : null;
    case 'APPOINTMENT_HISTORY':
      return patient ? `${base}/appointments?view=history` : null;
    case 'TREATMENT_PLANS':
      return patient ? `${base}/treatment-plans` : null;
    case 'AGENDA':
      return patient ? null : `${base}/agenda`;
    case 'AVAILABILITY':
      return patient ? null : `${base}/availability`;
    case 'PATIENTS':
      return patient ? null : `${base}/patients`;
    default:
      return null;
  }
}
