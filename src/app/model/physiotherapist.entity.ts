import { Specialty } from './session-status';

/** PhysiotherapistResponseDTO in the backend (US04/US05). */
export interface Physiotherapist {
  id: number;
  fullName: string;
  specialty: Specialty;
  yearsOfExperience: number;
  licenseNumber: string;
  description: string | null;
  hasAvailability: boolean;
  /** Translated "no availability for now" text when hasAvailability is false. */
  availabilityMessage: string | null;
}

/** PhysiotherapistSearchResponseDTO in the backend (US04). */
export interface PhysiotherapistSearch {
  items: Physiotherapist[];
  message: string | null;
}
