import { SessionStatus } from './session-status.model';

export type SlotStatus = 'FREE' | 'BOOKED' | 'FREE_CANCELLED';

/** One published slot of the day; booked slots carry the session (AgendaItemResponseDTO in the backend). */
export interface AgendaItem {
  slotId: number;
  startTime: string;
  endTime: string;
  status: SlotStatus;
  sessionId: number | null;
  patientName: string | null;
  sessionNumber: number | null;
  totalSessions: number | null;
  sessionStatus: SessionStatus | null;
}

/** AgendaResponseDTO in the backend (US08). */
export interface Agenda {
  date: string;
  items: AgendaItem[];
  message: string | null;
}
