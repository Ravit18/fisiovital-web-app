export type Role = 'PATIENT' | 'PHYSIOTHERAPIST';

/** Session returned by POST /auth/sign-in (AuthenticatedUserResponseDTO in the backend). */
export interface AuthenticatedUser {
  userId: number;
  profileId: number;
  email: string;
  role: Role;
  fullName: string;
  token: string;
}
