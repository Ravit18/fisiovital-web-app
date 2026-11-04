import { SignUpPatientRequest } from './sign-up-patient-request.model';

export type PhysiotherapistSpecialty =
  | 'DEPORTIVA'
  | 'COLUMNA_POSTURA'
  | 'GERIATRICA'
  | 'PEDIATRICA'
  | 'POSTQUIRURGICA'
  | 'NEUROLOGICA';

/** SignUpPhysiotherapistRequestDTO in the backend (US02). */
export interface SignUpPhysiotherapistRequest extends SignUpPatientRequest {
  licenseNumber: string;
  specialty: PhysiotherapistSpecialty;
  yearsOfExperience: number;
  description?: string;
}
