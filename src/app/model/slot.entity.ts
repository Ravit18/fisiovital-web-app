export type SlotStatus = 'FREE' | 'BOOKED';

/** SlotResponseDTO in the backend. */
export interface Slot {
  id: number;
  startTime: string;
  endTime: string;
  status: SlotStatus;
}

/** US06: free slots of one week; when that week is empty the backend jumps to the next week with slots. AvailabilityResponseDTO in the backend. */
export interface Availability {
  physiotherapistId: number;
  from: string;
  to: string;
  slots: Slot[];
  /** Set when the backend moved to a later week; message then explains it. */
  nextAvailableWeek: string | null;
  message: string | null;
}

/** US07: one block of time split into slots of durationMinutes. PublishSlotsRequestDTO in the backend. */
export interface PublishSlotsRequest {
  date: string;
  startTime: string;
  endTime: string;
  durationMinutes: number;
}
