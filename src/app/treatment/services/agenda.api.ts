import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Agenda } from '../model/agenda.entity';

@Injectable({ providedIn: 'root' })
export class AgendaApi {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/physiotherapists/me/agenda`;

  /** US08: the signed-in physiotherapist's slots for one day (yyyy-MM-dd). */
  getForDate(date: string): Observable<Agenda> {
    return this.http.get<Agenda>(this.baseUrl, { params: new HttpParams().set('date', date) });
  }
}
