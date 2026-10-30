import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { apiErrorMessage } from '../model/api-error';

/** Short confirmations and errors in a snackbar (announced by screen readers). */
@Injectable({ providedIn: 'root' })
export class FeedbackService {
  private readonly snackBar = inject(MatSnackBar);
  private readonly translate = inject(TranslateService);

  success(key: string, params?: Record<string, unknown>): void {
    this.show(this.translate.instant(key, params));
  }

  /** Shows the backend's translated message, or a generic one when the server is unreachable. */
  error(error: HttpErrorResponse): void {
    this.show(apiErrorMessage(error) ?? this.translate.instant('errors.network'), 6000, 'error');
  }

  private show(message: string, duration = 4000, type: 'success' | 'error' = 'success'): void {
    this.snackBar.open(message, this.translate.instant('common.close'), {
      duration,
      panelClass: ['fisiovital-snackbar', `fisiovital-snackbar--${type}`],
    });
  }
}
