import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TreatmentProgress } from '../model/progress.entity';
import { TreatmentPlan } from '../model/treatment-plan.entity';

@Injectable({ providedIn: 'root' })
export class TreatmentPlanService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/treatment-plans`;

  findMine(): Observable<TreatmentPlan[]> {
    return this.http.get<TreatmentPlan[]>(`${this.baseUrl}/me`);
  }

  progress(planId: number): Observable<TreatmentProgress> {
    return this.http.get<TreatmentProgress>(`${this.baseUrl}/${planId}/progress`);
  }
}
