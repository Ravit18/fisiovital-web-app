import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  AssistantReply,
  AssistantTranscriptionResponse,
  ConversationMessage,
  ConversationSummary,
} from '../models/assistant-message.model';

@Injectable({ providedIn: 'root' })
export class AssistantService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/assistant/messages`;
  private readonly transcriptionUrl = `${environment.apiBaseUrl}/assistant/transcriptions`;
  private readonly conversationsUrl = `${environment.apiBaseUrl}/assistant/conversations`;
  private readonly speechUrl = `${environment.apiBaseUrl}/assistant/speech`;

  /** US17-US20. Without conversationId a new chat starts; with it, that chat of the history continues. */
  send(
    message: string,
    conversationId: number | null,
    extras?: { screen?: string; voice?: boolean },
  ): Observable<AssistantReply> {
    // screen + voice: the floating voice assistant sends the open route and asks for a short, spoken answer.
    return this.http.post<AssistantReply>(this.baseUrl, { conversationId, message, ...extras });
  }

  transcribe(audio: Blob, fileName: string): Observable<AssistantTranscriptionResponse> {
    const form = new FormData();
    form.append('audio', audio, fileName);
    return this.http.post<AssistantTranscriptionResponse>(this.transcriptionUrl, form);
  }

  /** The user's chats, newest first. */
  conversations(): Observable<ConversationSummary[]> {
    return this.http.get<ConversationSummary[]>(this.conversationsUrl);
  }

  messages(conversationId: number): Observable<ConversationMessage[]> {
    return this.http.get<ConversationMessage[]>(`${this.conversationsUrl}/${conversationId}/messages`);
  }

  deleteConversation(conversationId: number): Observable<void> {
    return this.http.delete<void>(`${this.conversationsUrl}/${conversationId}`);
  }

  /** Gemini TTS: the reply read aloud as a WAV file (503 when the free quota is used up). */
  speech(text: string): Observable<Blob> {
    return this.http.post(this.speechUrl, { text }, { responseType: 'blob' });
  }
}
