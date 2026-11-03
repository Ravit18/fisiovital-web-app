/** SignUpPatientRequestDTO in the backend (US01). */
export interface SignUpPatientRequest {
  fullName: string;
  email: string;
  password: string;
  phone?: string;
}
