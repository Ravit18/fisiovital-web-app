import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { VoiceAssistant, routeFor } from './voice-assistant';

const messagesUrl = `${environment.apiBaseUrl}/assistant/messages`;

class FakeRecognition {
  static last?: FakeRecognition;
  lang = '';
  interimResults = false;
  continuous = false;
  onresult: ((event: unknown) => void) | null = null;
  onerror: ((event: unknown) => void) | null = null;
  onend: (() => void) | null = null;
  constructor() {
    FakeRecognition.last = this;
  }
  start(): void {}
  stop(): void {
    this.onend?.();
  }
  abort(): void {}
  say(text: string): void {
    const result = Object.assign([{ transcript: text }], { isFinal: true });
    this.onresult?.({ resultIndex: 0, results: [result] });
    this.onend?.();
  }
}

describe('VoiceAssistant', () => {
  let http: HttpTestingController;

  beforeEach(() => {
    sessionStorage.clear();
    localStorage.setItem(
      'fisiovital.session',
      JSON.stringify({ token: 't', userId: 1, fullName: 'Carlos Demo', email: 'c@correo.com', role: 'PATIENT' }),
    );
    TestBed.configureTestingModule({
      imports: [VoiceAssistant],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideTranslateService(), provideRouter([])],
    });
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('maps the agent actions to routes of each group', () => {
    expect(routeFor({ page: 'PHYSIOTHERAPISTS' }, '/patient')).toBe('/patient/physiotherapists');
    expect(routeFor({ page: 'PHYSIOTHERAPISTS', specialty: 'DEPORTIVA' }, '/patient')).toBe(
      '/patient/physiotherapists?specialty=DEPORTIVA',
    );
    expect(routeFor({ page: 'PHYSIOTHERAPIST_PROFILE', physiotherapistId: 7, date: '2026-12-03' }, '/patient')).toBe(
      '/patient/physiotherapists/7?date=2026-12-03',
    );
    expect(routeFor({ page: 'APPOINTMENT_HISTORY' }, '/patient')).toBe('/patient/appointments?view=history');
    expect(routeFor({ page: 'AGENDA' }, '/physiotherapist')).toBe('/physiotherapist/agenda');
    expect(routeFor({ page: 'AGENDA' }, '/patient')).toBeNull();
    expect(routeFor({ page: 'PHYSIOTHERAPIST_PROFILE' }, '/patient')).toBeNull();
    expect(routeFor(null, '/patient')).toBeNull();
  });

  it('listens, sends what you said with the open screen and opens the page the agent asks for', async () => {
    const stopTrack = vi.fn();
    const originalMedia = Object.getOwnPropertyDescriptor(navigator, 'mediaDevices');
    Object.defineProperty(navigator, 'mediaDevices', {
      configurable: true,
      value: { getUserMedia: vi.fn().mockResolvedValue({ getTracks: () => [{ stop: stopTrack }] }) },
    });
    Object.defineProperty(window, 'webkitSpeechRecognition', { configurable: true, value: FakeRecognition });
    Object.defineProperty(globalThis, 'speechSynthesis', {
      configurable: true,
      value: { speak: vi.fn(), cancel: vi.fn(), getVoices: () => [] },
    });
    Object.defineProperty(globalThis, 'SpeechSynthesisUtterance', {
      configurable: true,
      value: class {
        constructor(public text: string) {}
      },
    });

    try {
      const fixture = TestBed.createComponent(VoiceAssistant);
      fixture.detectChanges();
      const router = TestBed.inject(Router);
      const navigate = vi.spyOn(router, 'navigateByUrl').mockResolvedValue(true);
      const root = fixture.nativeElement as HTMLElement;

      root.querySelector<HTMLButtonElement>('.voice-fab')!.click();
      await fixture.whenStable();
      fixture.detectChanges();
      expect(root.querySelector('.voice-panel--listening')).not.toBeNull();

      FakeRecognition.last!.say('quiero ver los cupos de Jorge el jueves');
      const request = http.expectOne(messagesUrl);
      expect(request.request.body).toEqual({
        conversationId: null,
        message: 'quiero ver los cupos de Jorge el jueves',
        screen: '/',
        voice: true,
      });
      request.flush({
        conversationId: 9,
        reply: 'Te dejé en pantalla los horarios del jueves de Jorge.',
        source: 'AI',
        choices: [],
        action: { page: 'PHYSIOTHERAPIST_PROFILE', physiotherapistId: 7, date: '2026-12-03' },
      });
      fixture.detectChanges();

      expect(navigate).toHaveBeenCalledWith('/patient/physiotherapists/7?date=2026-12-03');
      expect(root.querySelector('.voice-panel__reply')?.textContent).toContain('horarios del jueves');
      expect(sessionStorage.getItem('fisiovital.voice.conversationId')).toBe('9');
      expect(stopTrack).toHaveBeenCalled();
    } finally {
      if (originalMedia) Object.defineProperty(navigator, 'mediaDevices', originalMedia);
      Reflect.deleteProperty(window, 'webkitSpeechRecognition');
    }
  });
});
