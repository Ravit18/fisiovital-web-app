import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { AssistantService } from './assistant.service';

describe('AssistantService', () => {
  let service: AssistantService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssistantService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(AssistantService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('uploads recorded audio for transcription without sending it as a chat message', () => {
    const audio = new Blob(['recording'], { type: 'audio/webm' });
    let transcript = '';

    service.transcribe(audio, 'voice.webm').subscribe((response) => (transcript = response.transcript));

    const request = http.expectOne(`${environment.apiBaseUrl}/assistant/transcriptions`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toBeInstanceOf(FormData);
    expect((request.request.body as FormData).get('audio')).toBeInstanceOf(File);
    request.flush({ transcript: 'Quiero reservar una sesión' });

    expect(transcript).toBe('Quiero reservar una sesión');
  });
});
