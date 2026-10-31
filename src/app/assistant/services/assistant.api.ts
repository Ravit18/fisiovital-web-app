import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AssistantReply } from '../model/assistant-message.entity';

@Injectable({ providedIn: 'root' })
export class AssistantApi {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/assistant/messages`;

  /** US17-US20. Send the conversationId of the previous reply so the assistant keeps the context (30 min). */
  send(message: string, conversationId: number | null): Observable<AssistantReply> {
    return this.http.post<AssistantReply>(this.baseUrl, { conversationId, message });
  }
}
