import { SignUpPatientRequest } from './sign-up-patient.request';

export type PhysiotherapistSpecialty =
  | 'DEPORTIVA'
  | 'COLUMNA_POSTURA'
  | 'GERIATRICA'
  | 'PEDIATRICA'
  | 'POSTQUIRURGICA'
  | 'NEUROLOGICA';

export interface SignUpPhysiotherapistRequest extends SignUpPatientRequest {
  licenseNumber: string;
  specialty: PhysiotherapistSpecialty;
  yearsOfExperience: number;
  description?: string;
}
