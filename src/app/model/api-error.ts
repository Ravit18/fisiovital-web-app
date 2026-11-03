import { HttpErrorResponse } from '@angular/common/http';

/** Error body returned by the backend's GlobalExceptionHandler, already translated by Accept-Language. ErrorResponseDTO in the backend. */
export interface ApiError {
  status: number;
  error: string;
  message: string;
  details: string[];
  timestamp: string;
}

/** Returns the backend's translated message, or null when the server could not be reached. */
export function apiErrorMessage(response: HttpErrorResponse): string | null {
  const body = response.error as Partial<ApiError> | null;
  return response.status !== 0 && body?.message ? body.message : null;
}
