export interface TreatmentSession {
  id: number;
  planId: number;
  sessionNumber: number;
  totalSessions: number;
  status: string;
  slotId: number;
  startTime: string;
  endTime: string;
  patientName: string;
  physiotherapistName: string;
  lateChange: boolean;
}
