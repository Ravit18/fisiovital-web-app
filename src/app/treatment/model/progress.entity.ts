import { TreatmentSession } from './session.entity';

export interface TreatmentProgress {
  planId: number;
  status: string;
  totalSessions: number;
  completedSessions: number;
  progressPercent: number;
  upcomingSessions: TreatmentSession[];
  lastObservation: string | null;
}
