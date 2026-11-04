import { SessionStatus, Specialty } from './session-status.model';

/** One session of a treatment plan (AppointmentResponseDTO in the backend). */
export interface Appointment {
  sessionId: number;
  sessionNumber: number;
  totalSessions: number;
  status: SessionStatus;
  startTime: string;
  endTime: string;
  patientId: number;
  patientName: string;
  physiotherapistId: number;
  physiotherapistName: string;
  specialty: Specialty;
  diagnosis: string;
}

/** AppointmentHistoryResponseDTO in the backend (US14-US16). */
export interface AppointmentHistory {
  appointments: Appointment[];
  message: string | null;
  page: number | null;
  size: number | null;
  totalElements: number | null;
  totalPages: number | null;
}
