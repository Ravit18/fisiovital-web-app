import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Availability, PublishSlotsRequest, Slot } from '../models/slot.model';

@Injectable({ providedIn: 'root' })
export class SlotsService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/physiotherapists`;

  /** US06: free slots between two dates (yyyy-MM-dd); without dates, the next 7 days. */
  getFree(physiotherapistId: number, from?: string, to?: string): Observable<Availability> {
    let params = new HttpParams();
    if (from) params = params.set('from', from);
    if (to) params = params.set('to', to);
    return this.http.get<Availability>(`${this.baseUrl}/${physiotherapistId}/slots`, { params });
  }

  /** US07: the signed-in physiotherapist publishes a block of slots. */
  publish(request: PublishSlotsRequest): Observable<Slot[]> {
    return this.http.post<Slot[]>(`${this.baseUrl}/me/slots`, request);
  }
}
