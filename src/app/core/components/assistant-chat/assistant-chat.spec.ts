import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { AssistantChat } from './assistant-chat';

const assistantUrl = `${environment.apiBaseUrl}/assistant/messages`;
const transcriptionUrl = `${environment.apiBaseUrl}/assistant/transcriptions`;

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

describe('AssistantChat (US17-US20)', () => {
  let http: HttpTestingController;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      imports: [AssistantChat],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideTranslateService()],
    });
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  function openPanel(fixture: { nativeElement: HTMLElement; detectChanges: () => void }): void {
    fixture.detectChanges();
    fixture.nativeElement.querySelector<HTMLButtonElement>('.launcher')!.click();
    fixture.detectChanges();
  }

  it('opens and minimizes the floating panel from the launcher', () => {
    const fixture = TestBed.createComponent(AssistantChat);
    const root = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(root.querySelector('.panel')).toBeNull();

    openPanel(fixture);
    expect(root.querySelector('.panel')).not.toBeNull();
    expect(root.querySelector('.launcher')?.getAttribute('aria-expanded')).toBe('true');

    root.querySelector<HTMLButtonElement>('.launcher')!.click();
    fixture.detectChanges();
    expect(root.querySelector('.panel')).toBeNull();
  });

  function send(fixture: { componentInstance: unknown }, text: string): void {
    const chat = fixture.componentInstance as { draft: string; send: () => void };
    chat.draft = text;
    chat.send();
  }

  it('keeps the conversation id so the assistant remembers the context', async () => {
    const fixture = TestBed.createComponent(AssistantChat);
    openPanel(fixture);
    send(fixture, 'Quiero reservar una sesión');
    const first = http.expectOne(assistantUrl);
    expect(first.request.body).toEqual({ conversationId: null, message: 'Quiero reservar una sesión' });
    first.flush({ conversationId: 42, reply: 'Tengo el martes 10:00 o el miércoles 9:00', source: 'AI' });

    send(fixture, 'el segundo');
    const second = http.expectOne(assistantUrl);
    expect(second.request.body.conversationId).toBe(42);
    second.flush({ conversationId: 42, reply: 'Listo, reservé el miércoles 9:00', source: 'AI' });
    await fixture.whenStable();

    expect((fixture.nativeElement as HTMLElement).querySelectorAll('.bubble').length).toBe(4);
  });

  it('shows the backend message when the AI is unavailable', async () => {
    const fixture = TestBed.createComponent(AssistantChat);
    openPanel(fixture);
    send(fixture, '¿Cuál es la política de cancelación?');
    http
      .expectOne(assistantUrl)
      .flush({ message: 'El asistente no está disponible' }, { status: 503, statusText: 'Unavailable' });
    await fixture.whenStable();

    const error = (fixture.nativeElement as HTMLElement).querySelector('.bubble--error');
    expect(error?.textContent).toContain('El asistente no está disponible');
  });

  it('puts the server transcription in the draft without sending it automatically', async () => {
    const originalRecorder = Object.getOwnPropertyDescriptor(globalThis, 'MediaRecorder');
    const originalMediaDevices = Object.getOwnPropertyDescriptor(navigator, 'mediaDevices');
    const stopTrack = vi.fn();
    const stream = { getTracks: () => [{ stop: stopTrack }] };
    Object.defineProperty(globalThis, 'MediaRecorder', {
      configurable: true,
      value: FakeMediaRecorder,
    });
    Object.defineProperty(navigator, 'mediaDevices', {
      configurable: true,
      value: { getUserMedia: vi.fn().mockResolvedValue(stream) },
    });

    try {
      const fixture = TestBed.createComponent(AssistantChat);
      openPanel(fixture);
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
      expect(root.querySelector('.bubble--user')).toBeNull();
      http.expectNone(assistantUrl);
      expect(stopTrack).toHaveBeenCalledOnce();
    } finally {
      if (originalRecorder) Object.defineProperty(globalThis, 'MediaRecorder', originalRecorder);
      else Reflect.deleteProperty(globalThis, 'MediaRecorder');
      if (originalMediaDevices) Object.defineProperty(navigator, 'mediaDevices', originalMediaDevices);
      else Reflect.deleteProperty(navigator, 'mediaDevices');
    }
  });
});
