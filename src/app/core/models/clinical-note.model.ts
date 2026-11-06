/** A note of the patient's clinical history (ClinicalNoteResponseDTO in the backend). */
export interface ClinicalNote {
  id: number;
  patientId: number;
  physiotherapistId: number;
  physiotherapistName: string;
  /** Session whose progress the note records; null for a general note. */
  sessionId: number | null;
  sessionNumber: number | null;
  sessionStartTime: string | null;
  text: string;
  createdAt: string;
}

/** CreateClinicalNoteRequestDTO in the backend. */
export interface CreateClinicalNoteRequest {
  sessionId: number | null;
  text: string;
}
