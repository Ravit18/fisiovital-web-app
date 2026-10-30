import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslatePipe } from '@ngx-translate/core';
import { apiErrorMessage } from '../../../shared/model/api-error';
import { TreatmentPlan } from '../../model/treatment-plan.entity';
import { TreatmentPlansApi } from '../../services/treatment-plans.api';

/** Custom validator: the total cannot drop below the sessions already booked (same rule as the backend). */
export const notBelow =
  (minimum: number): ValidatorFn =>
  (control: AbstractControl) =>
    Number(control.value) < minimum ? { notBelow: { minimum } } : null;

/** Edits an active plan; closes with the updated plan. */
@Component({
  selector: 'app-edit-plan-dialog',
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    TranslatePipe,
  ],
  template: `
    <h2 mat-dialog-title>{{ 'treatment.plan.editTitle' | translate }}</h2>
    <form [formGroup]="form" (ngSubmit)="save()" novalidate>
      <mat-dialog-content>
        @if (errorMessage()) {
          <p class="warning" role="alert">{{ errorMessage() }}</p>
        }
        <mat-form-field appearance="outline">
          <mat-label>{{ 'treatment.plan.diagnosis' | translate }}</mat-label>
          <textarea matInput formControlName="diagnosis" rows="2" maxlength="255"></textarea>
          @if (form.controls.diagnosis.hasError('required')) {
            <mat-error>{{ 'validation.required' | translate }}</mat-error>
          } @else if (form.controls.diagnosis.hasError('minlength')) {
            <mat-error>{{ 'validation.diagnosisLength' | translate }}</mat-error>
          }
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>{{ 'treatment.plan.totalSessions' | translate }}</mat-label>
          <input matInput type="number" formControlName="totalSessions" min="1" max="30" />
          @if (form.controls.totalSessions.hasError('notBelow')) {
            <mat-error>{{
              'validation.notBelowBooked' | translate: { count: plan.bookedSessions }
            }}</mat-error>
          } @else if (form.controls.totalSessions.invalid) {
            <mat-error>{{ 'validation.sessions' | translate }}</mat-error>
          }
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>{{ 'treatment.plan.frequencyPerWeek' | translate }}</mat-label>
          <input matInput type="number" formControlName="frequencyPerWeek" min="1" max="7" />
          @if (form.controls.frequencyPerWeek.invalid) {
            <mat-error>{{ 'validation.frequency' | translate }}</mat-error>
          }
        </mat-form-field>
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button class="edit-plan-dialog__back" mat-button type="button" mat-dialog-close>
          {{ 'common.back' | translate }}
        </button>
        <button mat-flat-button type="submit" [disabled]="saving()">
          {{ 'treatment.plan.save' | translate }}
        </button>
      </mat-dialog-actions>
    </form>
  `,
  styles: `
    mat-form-field {
      display: block;
    }
    .edit-plan-dialog__back {
      color: #4d7d3b !important;
    }
    .warning {
      color: var(--mat-sys-error);
    }
  `,
})
export class EditPlanDialog {
  private readonly api = inject(TreatmentPlansApi);
  private readonly dialogRef = inject<MatDialogRef<EditPlanDialog, TreatmentPlan>>(MatDialogRef);
  protected readonly plan = inject<TreatmentPlan>(MAT_DIALOG_DATA);

  protected readonly saving = signal(false);
  protected readonly errorMessage = signal<string | null>(null);

  protected readonly form = inject(NonNullableFormBuilder).group({
    diagnosis: [
      this.plan.diagnosis,
      [Validators.required, Validators.minLength(3), Validators.maxLength(255)],
    ],
    totalSessions: [
      this.plan.totalSessions,
      [
        Validators.required,
        Validators.min(1),
        Validators.max(30),
        notBelow(this.plan.bookedSessions),
      ],
    ],
    frequencyPerWeek: [
      this.plan.frequencyPerWeek,
      [Validators.required, Validators.min(1), Validators.max(7)],
    ],
  });

  protected save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    this.errorMessage.set(null);
    this.api.update(this.plan.id, this.form.getRawValue()).subscribe({
      next: (plan) => this.dialogRef.close(plan),
      error: (error: HttpErrorResponse) => {
        this.saving.set(false);
        this.errorMessage.set(apiErrorMessage(error));
      },
    });
  }
}
