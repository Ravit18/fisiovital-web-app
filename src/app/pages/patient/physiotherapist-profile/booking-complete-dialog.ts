import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';

export interface BookingCompleteDialogData {
  booked: number;
  remaining: number;
}

export type BookingCompleteAction = 'more' | 'appointments';

@Component({
  selector: 'app-booking-complete-dialog',
  imports: [MatButtonModule, MatDialogModule, TranslatePipe],
  template: `
    <h2 mat-dialog-title>{{ 'treatment.book.completeTitle' | translate }}</h2>
    <mat-dialog-content>
      <p>{{ 'treatment.book.completeMessage' | translate: { count: data.booked } }}</p>
      @if (data.remaining > 0) {
        <p>{{ 'treatment.book.moreAvailable' | translate: { count: data.remaining } }}</p>
      } @else {
        <p>{{ 'treatment.book.planComplete' | translate }}</p>
      }
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      @if (data.remaining > 0) {
        <button class="booking-complete__appointments" mat-button type="button" [mat-dialog-close]="'appointments'">
          {{ 'treatment.book.viewAppointments' | translate }}
        </button>
        <button class="booking-complete__more" mat-flat-button type="button" [mat-dialog-close]="'more'" cdkFocusInitial>
          {{ 'treatment.book.bookMore' | translate }}
        </button>
      } @else {
        <button
          class="booking-complete__appointments"
          mat-flat-button
          type="button"
          [mat-dialog-close]="'appointments'"
          cdkFocusInitial
        >
          {{ 'treatment.book.viewAppointments' | translate }}
        </button>
      }
    </mat-dialog-actions>
  `,
  styles: `
    .booking-complete__appointments {
      color: var(--fv-color-primary) !important;
    }

    .booking-complete__more {
      background: var(--fv-color-accent) !important;
      color: var(--fv-color-forest) !important;
    }
  `,
})
export class BookingCompleteDialog {
  protected readonly data = inject<BookingCompleteDialogData>(MAT_DIALOG_DATA);
}
