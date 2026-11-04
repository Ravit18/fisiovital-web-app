import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, computed, inject, input, signal, viewChild } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { filter, switchMap } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { NotificationsStore } from '../../../core/services/notifications.store';
import { SlotPicker } from './slot-picker/slot-picker';
import { Slot } from '../../../core/models/slot.model';
import { ConfirmDialog, ConfirmDialogData } from '../../../core/components/confirm-dialog/confirm-dialog';
import { apiErrorMessage } from '../../../core/models/api-error.model';
import { FeedbackService } from '../../../core/services/feedback.service';
import { LanguageService } from '../../../core/services/language.service';
import { TreatmentPlan } from '../../../core/models/treatment-plan.model';
import { TreatmentPlansService } from '../../../core/services/treatment-plans.service';
import { Physiotherapist } from '../../../core/models/physiotherapist.model';
import { PhysiotherapistsService } from '../../../core/services/physiotherapists.service';

/**
 * US05 profile + US06 free slots. A patient books here: first a treatment plan with this
 * physiotherapist (US09), then one session per picked slot (US10).
 */
@Component({
  selector: 'app-physiotherapist-profile',
  imports: [
    DatePipe,
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    TranslatePipe,
    SlotPicker,
  ],
  templateUrl: './physiotherapist-profile.html',
  styleUrl: './physiotherapist-profile.scss',
})
export class PhysiotherapistProfile implements OnInit {
  private readonly physiotherapistsApi = inject(PhysiotherapistsService);
  private readonly plansApi = inject(TreatmentPlansService);
  private readonly dialog = inject(MatDialog);
  private readonly feedback = inject(FeedbackService);
  private readonly translate = inject(TranslateService);
  private readonly router = inject(Router);
  private readonly datePipe = new DatePipe('en-US');
  protected readonly auth = inject(AuthService);
  protected readonly notifications = inject(NotificationsStore);
  protected readonly language = inject(LanguageService);

  /** Route parameter :id (withComponentInputBinding). */
  readonly id = input.required<string>();
  private readonly slotPicker = viewChild(SlotPicker);

  protected readonly physio = signal<Physiotherapist | null>(null);
  protected readonly loadError = signal<string | null>(null);
  protected readonly plan = signal<TreatmentPlan | null>(null);
  protected readonly planLoading = signal(true);
  protected readonly saving = signal(false);
  protected readonly selectedSlot = signal<Slot | null>(null);
  protected readonly profileMenuOpen = signal(false);
  protected readonly physioId = computed(() => Number(this.id()));
  /** Sessions still available in the active plan. */
  protected readonly remaining = computed(() => {
    const plan = this.plan();
    return plan ? plan.totalSessions - plan.bookedSessions : 0;
  });

  protected readonly planForm = inject(NonNullableFormBuilder).group({
    diagnosis: ['', [Validators.required, Validators.maxLength(255)]],
    totalSessions: [8, [Validators.required, Validators.min(1), Validators.max(30)]],
    frequencyPerWeek: [2, [Validators.required, Validators.min(1), Validators.max(7)]],
  });

  ngOnInit(): void {
    this.physiotherapistsApi.getById(this.physioId()).subscribe({
      next: (physio) => this.physio.set(physio),
      error: (error: HttpErrorResponse) =>
        this.loadError.set(apiErrorMessage(error) ?? this.translate.instant('errors.load')),
    });
    this.loadPlan();
  }

  protected createPlan(): void {
    if (this.planForm.invalid) {
      this.planForm.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    this.plansApi.create({ physiotherapistId: this.physioId(), ...this.planForm.getRawValue() }).subscribe({
      next: (plan) => {
        this.plan.set(plan);
        this.saving.set(false);
        this.feedback.success('treatment.plan.created');
      },
      error: (error: HttpErrorResponse) => {
        this.saving.set(false);
        this.feedback.error(error);
        // 409: there is already an active plan with this physiotherapist; show it.
        if (error.status === 409) this.loadPlan();
      },
    });
  }

  protected book(slot: Slot): void {
    const plan = this.plan();
    if (!plan) return;
    const when = `${this.datePipe.transform(slot.startTime, 'fullDate', undefined, this.language.current())} · ${this.datePipe.transform(slot.startTime, 'shortTime', undefined, this.language.current())}`;
    this.dialog
      .open<ConfirmDialog, ConfirmDialogData, boolean>(ConfirmDialog, {
        data: {
          title: 'treatment.book.title',
          message: this.translate.instant('treatment.book.message', { when, name: this.physio()?.fullName }),
          confirm: 'treatment.book.confirm',
        },
      })
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap(() => {
          this.saving.set(true);
          return this.plansApi.bookSession(plan.id, slot.id);
        }),
      )
      .subscribe({
        next: (session) => {
          this.saving.set(false);
          this.selectedSlot.set(null);
          this.feedback.success('treatment.book.done', { number: session.sessionNumber, total: session.totalSessions });
          this.loadPlan();
          this.slotPicker()?.reload();
        },
        error: (error: HttpErrorResponse) => {
          // US10: 409 when another patient took the slot first; the list is refreshed.
          this.saving.set(false);
          this.selectedSlot.set(null);
          this.feedback.error(error);
          this.slotPicker()?.reload();
        },
      });
  }

  protected signOut(): void {
    this.auth.signOut();
    this.notifications.clear();
    this.router.navigate(['/sign-in']);
  }

  protected initials(fullName: string): string {
    return fullName
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toLocaleUpperCase() ?? '')
      .join('');
  }

  private loadPlan(): void {
    this.planLoading.set(true);
    this.plansApi.getMine().subscribe({
      next: (plans) => {
        this.plan.set(plans.find((p) => p.physiotherapistId === this.physioId() && p.status === 'ACTIVE') ?? null);
        this.planLoading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.planLoading.set(false);
        this.feedback.error(error);
      },
    });
  }
}
