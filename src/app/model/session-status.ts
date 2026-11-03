/** Session states shared by appointments (US14) and the physiotherapist agenda (US08). */
export type SessionStatus = 'RESERVED' | 'COMPLETED' | 'CANCELLED' | 'LATE_CANCELLED';

export const SPECIALTIES = [
  'DEPORTIVA',
  'COLUMNA_POSTURA',
  'GERIATRICA',
  'PEDIATRICA',
  'POSTQUIRURGICA',
  'NEUROLOGICA',
] as const;

export type Specialty =
  | 'DEPORTIVA'
  | 'COLUMNA_POSTURA'
  | 'GERIATRICA'
  | 'PEDIATRICA'
  | 'POSTQUIRURGICA'
  | 'NEUROLOGICA';
