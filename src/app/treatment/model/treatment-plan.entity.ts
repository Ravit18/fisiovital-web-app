import { SessionStatus } from '../../shared/model/session-status';

export type PlanStatus = 'ACTIVE' | 'FINISHED';

/** TreatmentPlanResource in the backend (US09). */
export interface TreatmentPlan {
  id: number;
  patientId: number;
  patientName: string;
  physiotherapistId: number;
  physiotherapistName: string;
  diagnosis: string;
  totalSessions: number;
  frequencyPerWeek: number;
  status: PlanStatus;
  createdAt: string;
  bookedSessions: number;
  completedSessions: number;
}

export interface CreateTreatmentPlanRequest {
  physiotherapistId: number;
  diagnosis: string;
  totalSessions: number;
  frequencyPerWeek: number;
}

/** PUT /treatment-plans/{id}: the patient and physiotherapist cannot change. */
export type UpdateTreatmentPlanRequest = Omit<CreateTreatmentPlanRequest, 'physiotherapistId'>;

/** SessionResource in the backend (US10-US12). */
export interface Session {
  id: number;
  planId: number;
  sessionNumber: number;
  totalSessions: number;
  status: SessionStatus;
  slotId: number;
  startTime: string;
  endTime: string;
  patientName: string;
  physiotherapistName: string;
  /** True when the change was made less than 24 hours before the session. */
  lateChange: boolean;
}
