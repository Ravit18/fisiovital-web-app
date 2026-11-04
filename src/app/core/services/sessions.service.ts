import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Session } from '../models/treatment-plan.model';

@Injectable({ providedIn: 'root' })
export class SessionsService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/sessions`;

  /** US11 */
  reschedule(sessionId: number, newSlotId: number): Observable<Session> {
    return this.http.patch<Session>(`${this.baseUrl}/${sessionId}/reschedule`, { newSlotId });
  }

  /** US12: less than 24 hours before, the session ends as LATE_CANCELLED. */
  cancel(sessionId: number): Observable<Session> {
    return this.http.patch<Session>(`${this.baseUrl}/${sessionId}/cancel`, {});
  }
}
