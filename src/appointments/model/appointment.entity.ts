import { SessionStatus, Specialty } from '../../shared/model/session-status';

/** One session of a treatment plan (AppointmentResource in the backend). */
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

export interface AppointmentHistory {
  appointments: Appointment[];
  message: string | null;
  page: number | null;
  size: number | null;
  totalElements: number | null;
  totalPages: number | null;
}
