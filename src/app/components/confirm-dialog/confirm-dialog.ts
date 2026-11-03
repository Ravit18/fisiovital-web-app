import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';

export interface ConfirmDialogData {
  /** Translation keys. */
  title: string;
  message: string;
  confirm: string;
  /** Optional extra warning shown in the error color. */
  warning?: string;
}

/** Yes/no dialog; closes with true when confirmed. */
@Component({
  selector: 'app-confirm-dialog',
  imports: [MatButtonModule, MatDialogModule, TranslatePipe],
  template: `
    <h2 mat-dialog-title>{{ data.title | translate }}</h2>
    <mat-dialog-content>
      <p>{{ data.message | translate }}</p>
      @if (data.warning) {
        <p class="warning" role="alert">{{ data.warning | translate }}</p>
      }
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button class="confirm-dialog__cancel" mat-button type="button" [mat-dialog-close]="false">
        {{ 'common.back' | translate }}
      </button>
      <button class="confirm-dialog__confirm" mat-flat-button type="button" [mat-dialog-close]="true" cdkFocusInitial>
        {{ data.confirm | translate }}
      </button>
    </mat-dialog-actions>
  `,
  styles: `
    .confirm-dialog__cancel {
      color: var(--fv-color-primary) !important;
    }
    .confirm-dialog__confirm {
      background: var(--fv-color-accent) !important;
      color: var(--fv-color-forest) !important;
    }
    .warning {
      color: var(--mat-sys-error);
    }
  `,
})
export class ConfirmDialog {
  protected readonly data = inject<ConfirmDialogData>(MAT_DIALOG_DATA);
}
