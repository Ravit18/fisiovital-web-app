import { Specialty } from '../../shared/model/session-status';

/** PhysiotherapistResource in the backend (US04/US05). */
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

export interface PhysiotherapistSearch {
  items: Physiotherapist[];
  message: string | null;
}
