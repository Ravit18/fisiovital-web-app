import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  CreateTreatmentPlanRequest,
  Session,
  TreatmentPlan,
  UpdateTreatmentPlanRequest,
} from '../models/treatment-plan.model';

/** CRUD of the patient's treatment plans (US09) plus booking (US10). */
@Injectable({ providedIn: 'root' })
export class TreatmentPlansService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/treatment-plans`;

  /** Create (US09): 409 when there is already an active plan with that physiotherapist. */
  create(request: CreateTreatmentPlanRequest): Observable<TreatmentPlan> {
    return this.http.post<TreatmentPlan>(this.baseUrl, request);
  }

  /** Read: all of the signed-in patient's plans. */
  getMine(): Observable<TreatmentPlan[]> {
    return this.http.get<TreatmentPlan[]>(`${this.baseUrl}/me`);
  }

  /** Read one: 404 if it does not exist, 403 if it belongs to another patient. */
  getById(planId: number): Observable<TreatmentPlan> {
    return this.http.get<TreatmentPlan>(`${this.baseUrl}/${planId}`);
  }

  /** Update: 422 if the plan finished or the total drops below the booked sessions. */
  update(planId: number, request: UpdateTreatmentPlanRequest): Observable<TreatmentPlan> {
    return this.http.put<TreatmentPlan>(`${this.baseUrl}/${planId}`, request);
  }

  /** Delete: 409 if the plan already has sessions. */
  delete(planId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${planId}`);
  }

  /** US10: 409 when someone else booked the slot first. */
  bookSession(planId: number, slotId: number): Observable<Session> {
    return this.http.post<Session>(`${this.baseUrl}/${planId}/sessions`, { slotId });
  }
}
