import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';
import { Appointment } from '../../../../core/models/appointment.model';
import { SlotPicker } from '../../physiotherapist-profile/slot-picker/slot-picker';
import { Slot } from '../../../../core/models/slot.model';
import { apiErrorMessage } from '../../../../core/models/api-error.model';
import { LanguageService } from '../../../../core/services/language.service';
import { isWithin24Hours } from '../../../../core/dates';
import { Session } from '../../../../core/models/treatment-plan.model';
import { SessionsService } from '../../../../core/services/sessions.service';

/** US11: pick another free slot of the same physiotherapist; closes with the updated session. */
@Component({
  selector: 'app-reschedule-dialog',
  imports: [DatePipe, MatButtonModule, MatDialogModule, TranslatePipe, SlotPicker],
  template: `
    <h2 mat-dialog-title>{{ 'treatment.reschedule.title' | translate }}</h2>
    <mat-dialog-content>
      <p>
        {{ 'treatment.reschedule.current' | translate }}
        <strong>
          {{ appointment.startTime | date: 'fullDate' : undefined : language.current() }} ·
          {{ appointment.startTime | date: 'shortTime' : undefined : language.current() }}
        </strong>
        ({{ appointment.physiotherapistName }})
      </p>
      @if (late) {
        <p class="warning" role="alert">{{ 'treatment.reschedule.lateWarning' | translate }}</p>
      }
      @if (errorMessage()) {
        <p class="warning" role="alert">{{ errorMessage() }}</p>
      }
      <app-slot-picker [physiotherapistId]="appointment.physiotherapistId" [busy]="saving()" (picked)="choose($event)" />
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button class="reschedule-dialog__back" mat-button type="button" mat-dialog-close>
        {{ 'common.back' | translate }}
      </button>
    </mat-dialog-actions>
  `,
  styles: `
    .reschedule-dialog__back {
      color: var(--fv-color-primary) !important;
    }
    .warning {
      color: var(--mat-sys-error);
    }
  `,
})
export class RescheduleDialog {
  private readonly api = inject(SessionsService);
  private readonly dialogRef = inject<MatDialogRef<RescheduleDialog, Session>>(MatDialogRef);
  private readonly slotPicker = viewChild(SlotPicker);
  protected readonly language = inject(LanguageService);
  protected readonly appointment = inject<Appointment>(MAT_DIALOG_DATA);
  protected readonly late = isWithin24Hours(this.appointment.startTime);

  protected readonly saving = signal(false);
  protected readonly errorMessage = signal<string | null>(null);

  protected choose(slot: Slot): void {
    this.saving.set(true);
    this.errorMessage.set(null);
    this.api.reschedule(this.appointment.sessionId, slot.id).subscribe({
      next: (session) => this.dialogRef.close(session),
      error: (error: HttpErrorResponse) => {
        this.saving.set(false);
        this.errorMessage.set(apiErrorMessage(error));
        this.slotPicker()?.reload();
      },
    });
  }
}
