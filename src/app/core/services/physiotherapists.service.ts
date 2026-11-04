import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Specialty } from '../models/session-status.model';
import { Physiotherapist, PhysiotherapistSearch } from '../models/physiotherapist.model';

@Injectable({ providedIn: 'root' })
export class PhysiotherapistsService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/physiotherapists`;

  /** US04: all physiotherapists, or only one specialty. */
  search(specialty?: Specialty | null): Observable<PhysiotherapistSearch> {
    const params = specialty ? new HttpParams().set('specialty', specialty) : undefined;
    return this.http.get<PhysiotherapistSearch>(this.baseUrl, { params });
  }

  /** US05 */
  getById(id: number): Observable<Physiotherapist> {
    return this.http.get<Physiotherapist>(`${this.baseUrl}/${id}`);
  }
}
