import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { AssistantChat } from './assistant-chat';

const assistantUrl = `${environment.apiBaseUrl}/assistant/messages`;

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

  function send(fixture: { componentInstance: unknown }, text: string): void {
    const chat = fixture.componentInstance as { draft: string; send: () => void };
    chat.draft = text;
    chat.send();
  }

  it('keeps the conversation id so the assistant remembers the context', async () => {
    const fixture = TestBed.createComponent(AssistantChat);
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
    send(fixture, '¿Cuál es la política de cancelación?');
    http
      .expectOne(assistantUrl)
      .flush({ message: 'El asistente no está disponible' }, { status: 503, statusText: 'Unavailable' });
    await fixture.whenStable();

    const error = (fixture.nativeElement as HTMLElement).querySelector('.bubble--error');
    expect(error?.textContent).toContain('El asistente no está disponible');
  });
});
