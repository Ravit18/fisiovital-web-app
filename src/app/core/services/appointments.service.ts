import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AppointmentHistory } from '../models/appointment.model';

@Injectable({ providedIn: 'root' })
export class AppointmentsService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/appointments`;

  /** US14: the signed-in patient's appointments, newest first. */
  getMine(page = 0, size = 100): Observable<AppointmentHistory> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<AppointmentHistory>(`${this.baseUrl}/me`, { params });
  }

  /** US15: all the physiotherapist's appointments; US16: only one patient's, by full name. */
  getForPhysiotherapist(patientName?: string): Observable<AppointmentHistory> {
    const params = patientName ? new HttpParams().set('patientName', patientName) : undefined;
    return this.http.get<AppointmentHistory>(`${this.baseUrl}/physiotherapist/me`, { params });
  }
}
