import { Specialty } from '../../shared/model/session-status';

export interface SignUpPatientRequest {
  fullName: string;
  email: string;
  password: string;
  phone: string;
}

export interface SignUpPhysiotherapistRequest extends SignUpPatientRequest {
  licenseNumber: string;
  specialty: Specialty;
  yearsOfExperience: number;
  description: string;
}
