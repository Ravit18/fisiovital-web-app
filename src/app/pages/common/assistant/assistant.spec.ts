import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { Assistant, slotOf, titleOf } from './assistant';

const api = environment.apiBaseUrl;
const messagesUrl = `${api}/assistant/messages`;
const conversationsUrl = `${api}/assistant/conversations`;
const transcriptionUrl = `${api}/assistant/transcriptions`;
const speechUrl = `${api}/assistant/speech`;

class FakeMediaRecorder {
  readonly mimeType = 'audio/webm';
  state: RecordingState = 'inactive';
  ondataavailable: ((event: BlobEvent) => void) | null = null;
  onstop: ((event: Event) => void) | null = null;
  onerror: ((event: Event) => void) | null = null;

  constructor(_stream: MediaStream) {}

  start(): void {
    this.state = 'recording';
  }

  stop(): void {
    this.state = 'inactive';
    this.ondataavailable?.({ data: new Blob(['mock audio'], { type: this.mimeType }) } as BlobEvent);
    this.onstop?.(new Event('stop'));
  }
}

describe('Assistant page (US17-US20)', () => {
  let http: HttpTestingController;

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem(
      'fisiovital.session',
      JSON.stringify({ token: 't', userId: 1, fullName: 'Carlos Rojas', email: 'carlos@correo.com', role: 'PATIENT' }),
    );
    TestBed.configureTestingModule({
      imports: [Assistant],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideTranslateService(),
        provideRouter([{ path: '**', children: [] }]),
      ],
    });
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  async function render(id?: string) {
    const fixture = TestBed.createComponent(Assistant);
    if (id) fixture.componentRef.setInput('id', id);
    fixture.detectChanges();
    return fixture;
  }

  function send(fixture: { componentInstance: unknown }, text: string): void {
    const page = fixture.componentInstance as { draft: string; send: () => void };
    page.draft = text;
    page.send();
  }

  it('lists the chat history grouped by date', async () => {
    const fixture = await render();
    const now = new Date();
    const old = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    http.expectOne(conversationsUrl).flush([
      { id: 2, title: 'Dolor de espalda', startedAt: now.toISOString(), lastActivityAt: now.toISOString() },
      { id: 1, title: 'Política de cancelación', startedAt: old.toISOString(), lastActivityAt: old.toISOString() },
    ]);
    await fixture.whenStable();
    fixture.detectChanges();

    const root = fixture.nativeElement as HTMLElement;
    const items = [...root.querySelectorAll('.chat-item__link')].map((a) => a.textContent?.trim());
    expect(items).toEqual(['Dolor de espalda', 'Política de cancelación']);
    expect(root.querySelectorAll('.history__group').length).toBe(2);
  });

  it('starts a new chat, adds it to the history and keeps its id for the next message', async () => {
    const fixture = await render();
    http.expectOne(conversationsUrl).flush([]);
    const navigate = vi.spyOn(TestBed.inject(Router), 'navigate').mockResolvedValue(true);

    send(fixture, 'Quiero reservar una sesión');
    const first = http.expectOne(messagesUrl);
    expect(first.request.body).toEqual({ conversationId: null, message: 'Quiero reservar una sesión' });
    first.flush({ conversationId: 42, reply: 'Tengo el martes 10:00 o el miércoles 9:00', source: 'AI' });
    expect(navigate).toHaveBeenCalledWith(['/patient', 'assistant', 42], { replaceUrl: true });

    send(fixture, 'el segundo');
    const second = http.expectOne(messagesUrl);
    expect(second.request.body.conversationId).toBe(42);
    second.flush({ conversationId: 42, reply: 'Listo, reservé el miércoles 9:00', source: 'AI' });
    await fixture.whenStable();
    fixture.detectChanges();

    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelectorAll('.message').length).toBe(4);
    expect(root.querySelector('.chat-item__link')?.textContent?.trim()).toBe('Quiero reservar una sesión');
  });

  it('opens a saved chat from the URL with all its messages', async () => {
    const fixture = await render('7');
    http.expectOne(conversationsUrl).flush([]);
    http.expectOne(`${conversationsUrl}/7/messages`).flush([
      { id: 1, sender: 'USER', content: '¿Cuál es la política?', createdAt: '2026-11-26T10:00:00' },
      { id: 2, sender: 'ASSISTANT', content: 'Hasta 24 horas antes.', createdAt: '2026-11-26T10:00:02' },
    ]);
    await fixture.whenStable();
    fixture.detectChanges();

    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelector('.message--user')?.textContent).toContain('¿Cuál es la política?');
    expect(root.querySelector('.message--assistant')?.textContent).toContain('Hasta 24 horas antes.');

    send(fixture, 'Gracias');
    expect(http.expectOne(messagesUrl).request.body.conversationId).toBe(7);
  });

  it('shows the backend message when the AI is unavailable', async () => {
    const fixture = await render();
    http.expectOne(conversationsUrl).flush([]);
    send(fixture, '¿Cuál es la política de cancelación?');
    http.expectOne(messagesUrl).flush({ message: 'El asistente no está disponible' }, { status: 503, statusText: 'Unavailable' });
    await fixture.whenStable();
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).querySelector('.message--error')?.textContent).toContain(
      'El asistente no está disponible',
    );
  });

  it('puts the server transcription in the draft without sending it automatically', async () => {
    const originalRecorder = Object.getOwnPropertyDescriptor(globalThis, 'MediaRecorder');
    const originalMediaDevices = Object.getOwnPropertyDescriptor(navigator, 'mediaDevices');
    const stopTrack = vi.fn();
    const stream = { getTracks: () => [{ stop: stopTrack }] };
    Object.defineProperty(globalThis, 'MediaRecorder', { configurable: true, value: FakeMediaRecorder });
    Object.defineProperty(navigator, 'mediaDevices', {
      configurable: true,
      value: { getUserMedia: vi.fn().mockResolvedValue(stream) },
    });

    try {
      const fixture = await render();
      http.expectOne(conversationsUrl).flush([]);
      const root = fixture.nativeElement as HTMLElement;
      const microphone = root.querySelector<HTMLButtonElement>('.voice-button')!;

      microphone.click();
      await fixture.whenStable();
      microphone.click();
      fixture.detectChanges();

      http.expectOne(transcriptionUrl).flush({ transcript: 'Quiero reservar una sesión' });
      await fixture.whenStable();
      fixture.detectChanges();

      expect(root.querySelector<HTMLTextAreaElement>('textarea')?.value).toBe('Quiero reservar una sesión');
      expect(root.querySelector('.message--user')).toBeNull();
      http.expectNone(messagesUrl);
      expect(stopTrack).toHaveBeenCalledOnce();
    } finally {
      if (originalRecorder) Object.defineProperty(globalThis, 'MediaRecorder', originalRecorder);
      else Reflect.deleteProperty(globalThis, 'MediaRecorder');
      if (originalMediaDevices) Object.defineProperty(navigator, 'mediaDevices', originalMediaDevices);
      else Reflect.deleteProperty(navigator, 'mediaDevices');
    }
  });

  it('shows time slots as cards and sends the one the user taps', async () => {
    const fixture = await render();
    http.expectOne(conversationsUrl).flush([]);
    vi.spyOn(TestBed.inject(Router), 'navigate').mockResolvedValue(true);
    send(fixture, 'Quiero una sesión el jueves');
    http.expectOne(messagesUrl).flush({
      conversationId: 5,
      reply: 'Estos son los horarios libres del jueves.',
      source: 'AI',
      choices: ['jue 27/11 · 10:00', 'jue 27/11 · 11:00'],
    });
    await fixture.whenStable();
    fixture.detectChanges();

    const root = fixture.nativeElement as HTMLElement;
    const cards = root.querySelectorAll<HTMLButtonElement>('.slot-choice');
    expect(cards.length).toBe(2);
    expect(cards[1].textContent).toContain('11:00');

    cards[1].click();
    const pick = http.expectOne(messagesUrl);
    expect(pick.request.body).toEqual({ conversationId: 5, message: 'jue 27/11 · 11:00' });
    fixture.detectChanges();
    expect(root.querySelector('.slot-choice')).toBeNull();
    pick.flush({ conversationId: 5, reply: '¿Confirmo el jueves 27/11 a las 11:00?', source: 'AI', choices: ['Sí, confirmar', 'Elegir otra opción'] });
    await fixture.whenStable();
    fixture.detectChanges();
    expect(root.querySelector('.chip-choice--primary')?.textContent).toContain('Sí, confirmar');
  });

  it('reads an answer aloud with Gemini and falls back to the browser voice', async () => {
    const play = vi.fn().mockResolvedValue(undefined);
    const OriginalAudio = globalThis.Audio;
    const speak = vi.fn();
    const originalSynth = Object.getOwnPropertyDescriptor(globalThis, 'speechSynthesis');
    globalThis.Audio = class {
      onended: (() => void) | null = null;
      onerror: (() => void) | null = null;
      constructor(public src: string) {}
      play = play;
      pause = vi.fn();
    } as unknown as typeof Audio;
    Object.defineProperty(globalThis, 'speechSynthesis', {
      configurable: true,
      value: { speak, cancel: vi.fn(), getVoices: () => [] },
    });
    Object.defineProperty(globalThis, 'SpeechSynthesisUtterance', {
      configurable: true,
      value: class {
        lang = '';
        voice = null;
        onend = null;
        onerror = null;
        constructor(public text: string) {}
      },
    });
    URL.createObjectURL = vi.fn(() => 'blob:voice');
    URL.revokeObjectURL = vi.fn();

    try {
      const fixture = await render();
      http.expectOne(conversationsUrl).flush([]);
      vi.spyOn(TestBed.inject(Router), 'navigate').mockResolvedValue(true);
      send(fixture, 'Hola');
      http.expectOne(messagesUrl).flush({ conversationId: 3, reply: 'Hola, Carlos.', source: 'AI', choices: [] });
      await fixture.whenStable();
      fixture.detectChanges();
      const root = fixture.nativeElement as HTMLElement;

      root.querySelector<HTMLButtonElement>('.listen-button')!.click();
      const tts = http.expectOne(speechUrl);
      expect(tts.request.body).toEqual({ text: 'Hola, Carlos.' });
      tts.flush(new Blob(['RIFF'], { type: 'audio/wav' }));
      // Silent unlock inside the click on "Escuchar", then Gemini's audio.
      expect(play).toHaveBeenCalledTimes(2);

      // Voice switch on: the next answer is read by the browser voice, without spending Gemini quota.
      root.querySelector<HTMLButtonElement>('.voice-toggle')!.click();
      send(fixture, '¿Y para reprogramar?');
      http.expectOne(messagesUrl).flush({ conversationId: 3, reply: 'Hasta 24 horas antes.', source: 'AI', choices: [] });
      http.expectNone(speechUrl);
      expect(speak).toHaveBeenCalledOnce();
      speak.mockClear();
      root.querySelector<HTMLButtonElement>('.voice-toggle')!.click();

      // Next answer: Gemini out of quota -> the browser speaks it.
      send(fixture, 'Gracias');
      http.expectOne(messagesUrl).flush({ conversationId: 3, reply: 'De nada.', source: 'AI', choices: [] });
      await fixture.whenStable();
      fixture.detectChanges();
      const buttons = root.querySelectorAll<HTMLButtonElement>('.listen-button');
      buttons[buttons.length - 1].click();
      http.expectOne(speechUrl).flush(new Blob(['{}']), { status: 503, statusText: 'Unavailable' });
      expect(speak).toHaveBeenCalledOnce();
    } finally {
      globalThis.Audio = OriginalAudio;
      if (originalSynth) Object.defineProperty(globalThis, 'speechSynthesis', originalSynth);
      else Reflect.deleteProperty(globalThis, 'speechSynthesis');
    }
  });

  it('recognises slot choices', () => {
    expect(slotOf('jue 27/11 · 10:00')).toEqual({ value: 'jue 27/11 · 10:00', day: 'jue 27/11', time: '10:00' });
    expect(slotOf('Sí, confirmar')).toBeNull();
  });

  it('titles a chat like the backend: one line, cut at a whole word', () => {
    expect(titleOf('  Hola\n  ¿qué tal?  ')).toBe('Hola ¿qué tal?');
    const long = titleOf('Quiero saber si puedo reprogramar mi sesión del jueves porque tengo un examen en la universidad');
    expect(long.endsWith('…')).toBe(true);
    expect(long.length).toBeLessThanOrEqual(61);
  });
});
