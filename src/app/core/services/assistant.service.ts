import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AssistantReply, AssistantTranscriptionResponse } from '../models/assistant-message.model';

@Injectable({ providedIn: 'root' })
export class AssistantService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/assistant/messages`;
  private readonly transcriptionUrl = `${environment.apiBaseUrl}/assistant/transcriptions`;

  /** US17-US20. Send the conversationId of the previous reply so the assistant keeps the context (30 min). */
  send(message: string, conversationId: number | null): Observable<AssistantReply> {
    return this.http.post<AssistantReply>(this.baseUrl, { conversationId, message });
  }

  transcribe(audio: Blob, fileName: string): Observable<AssistantTranscriptionResponse> {
    const form = new FormData();
    form.append('audio', audio, fileName);
    return this.http.post<AssistantTranscriptionResponse>(this.transcriptionUrl, form);
  }
}
