import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ClinicalNote, CreateClinicalNoteRequest } from '../models/clinical-note.model';

/** Clinical history of a patient: notes written by the physiotherapists who treat them (ClinicalNoteController). */
@Injectable({ providedIn: 'root' })
export class ClinicalNotesService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/patients`;

  getForPatient(patientId: number): Observable<ClinicalNote[]> {
    return this.http.get<ClinicalNote[]>(`${this.baseUrl}/${patientId}/clinical-notes`);
  }

  create(patientId: number, request: CreateClinicalNoteRequest): Observable<ClinicalNote> {
    return this.http.post<ClinicalNote>(`${this.baseUrl}/${patientId}/clinical-notes`, request);
  }
}
