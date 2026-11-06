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
import { EMPTY, concatMap, expand, filter, from, map, of, reduce, switchMap, tap, toArray } from 'rxjs';
import { startOfToday, weekWindowIndex } from '../../../core/dates';
import { AuthService } from '../../../core/services/auth.service';
import { AppointmentsService } from '../../../core/services/appointments.service';
import { NotificationsStore } from '../../../core/services/notifications.store';
import { SlotPicker } from './slot-picker/slot-picker';
import { Slot } from '../../../core/models/slot.model';
import { apiErrorMessage } from '../../../core/models/api-error.model';
import { FeedbackService } from '../../../core/services/feedback.service';
import { LanguageService } from '../../../core/services/language.service';
import { TreatmentPlan } from '../../../core/models/treatment-plan.model';
import { TreatmentPlansService } from '../../../core/services/treatment-plans.service';
import { Physiotherapist } from '../../../core/models/physiotherapist.model';
import { PhysiotherapistsService } from '../../../core/services/physiotherapists.service';
import { EditPlanDialog } from '../treatment-plans/edit-plan-dialog/edit-plan-dialog';
import { BookingConfirmDialog, BookingConfirmDialogData } from './booking-confirm-dialog';

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
  private readonly appointmentsApi = inject(AppointmentsService);
  private readonly dialog = inject(MatDialog);
  private readonly feedback = inject(FeedbackService);
  private readonly translate = inject(TranslateService);
  private readonly router = inject(Router);
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
  protected readonly weeklyBookingsError = signal(false);
  protected readonly saving = signal(false);
  protected readonly planReady = signal(false);
  protected readonly selectedSlots = signal<Slot[]>([]);
  protected readonly bookedSessionStartTimes = signal<string[]>([]);
  protected readonly bookingOutcome = signal<{ booked: number; total: number; error: string } | null>(null);
  protected readonly profileMenuOpen = signal(false);
  protected readonly physioId = computed(() => Number(this.id()));
  private readonly planFormRevision = signal(0);
  /** Sessions still available in the active plan. */
  protected readonly remaining = computed(() => {
    const plan = this.plan();
    return plan ? plan.totalSessions - plan.bookedSessions : 0;
  });
  protected readonly selectionLimit = computed(() => {
    this.planFormRevision();
    return this.plan() ? this.remaining() : Number(this.planForm.controls.totalSessions.value);
  });
  protected readonly weeklyLimit = computed(() => {
    this.planFormRevision();
    const plan = this.plan();
    return plan ? plan.frequencyPerWeek : Number(this.planForm.controls.frequencyPerWeek.value);
  });
  protected readonly weeklyLimitReached = computed(() => {
    const counts = new Map<string, number>();
    const anchor = startOfToday();
    for (const startTime of this.bookedSessionStartTimes()) {
      const week = weekWindowIndex(startTime, anchor);
      if (week >= 0) counts.set(String(week), (counts.get(String(week)) ?? 0) + 1);
    }
    for (const slot of this.selectedSlots()) {
      const week = String(weekWindowIndex(slot.startTime, anchor));
      counts.set(week, (counts.get(week) ?? 0) + 1);
    }
    return [...counts.values()].some((count) => count >= this.weeklyLimit());
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

  protected continueToSlots(): void {
    if (this.planForm.invalid) {
      this.planForm.markAllAsTouched();
      return;
    }
    this.planFormRevision.update((revision) => revision + 1);
    this.selectedSlots.set([]);
    this.bookingOutcome.set(null);
    this.planReady.set(true);
  }

  protected editPlanDetails(): void {
    this.selectedSlots.set([]);
    this.bookingOutcome.set(null);
    this.planReady.set(false);
  }

  protected editSavedPlan(plan: TreatmentPlan): void {
    this.dialog
      .open<EditPlanDialog, TreatmentPlan, TreatmentPlan>(EditPlanDialog, { data: plan })
      .afterClosed()
      .pipe(filter(Boolean))
      .subscribe((updatedPlan) => {
        this.plan.set(updatedPlan);
        this.selectedSlots.set([]);
        this.feedback.success('treatment.plan.updated');
      });
  }

  protected toggleSlot(slot: Slot): void {
    if (this.weeklyBookingsError()) return;
    const selected = this.selectedSlots();
    const alreadySelected = selected.some((item) => item.id === slot.id);
    if (alreadySelected) {
      this.selectedSlots.set(selected.filter((item) => item.id !== slot.id));
    } else if (
      selected.length < this.selectionLimit() &&
      this.bookedSessionStartTimes().filter(
        (startTime) =>
          weekWindowIndex(startTime, startOfToday()) === weekWindowIndex(slot.startTime, startOfToday()),
      ).length +
        selected.filter(
          (item) => weekWindowIndex(item.startTime, startOfToday()) === weekWindowIndex(slot.startTime, startOfToday()),
        ).length <
        this.weeklyLimit()
    ) {
      this.selectedSlots.set([...selected, slot]);
    }
    this.bookingOutcome.set(null);
  }

  protected reserveSelectedSlots(): void {
    if (this.weeklyBookingsError()) return;
    if (!this.plan() && this.planForm.invalid) {
      this.planForm.markAllAsTouched();
      this.planReady.set(false);
      return;
    }
    const slots = this.selectedSlots();
    if (slots.length === 0 || slots.length > this.selectionLimit()) return;

    const creatingPlan = !this.plan();
    let bookedCount = 0;
    let bookingStarted = false;
    this.dialog
      .open<BookingConfirmDialog, BookingConfirmDialogData, boolean>(BookingConfirmDialog, {
        data: {
          physiotherapistName: this.physio()?.fullName ?? '',
          slots,
          creatingPlan,
          ...(creatingPlan ? this.planForm.getRawValue() : {}),
        },
      })
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap(() => {
          this.saving.set(true);
          const existingPlan = this.plan();
          const plan$ = existingPlan
            ? of(existingPlan)
            : this.plansApi.create({ physiotherapistId: this.physioId(), ...this.planForm.getRawValue() });
          return plan$.pipe(
            tap((plan) => {
              this.plan.set(plan);
              this.planReady.set(false);
            }),
            switchMap((plan) =>
              from(slots).pipe(
                concatMap((slot) => {
                  bookingStarted = true;
                  return this.plansApi.bookSession(plan.id, slot.id).pipe(tap(() => (bookedCount += 1)));
                }),
                reduce((count) => count + 1, 0),
              ),
            ),
          );
        }),
      )
      .subscribe({
        next: () => {
          this.saving.set(false);
          this.selectedSlots.set([]);
          this.bookingOutcome.set(null);
          this.feedback.success('treatment.book.multipleDone', { count: bookedCount });
          this.loadPlan();
          this.slotPicker()?.reload();
        },
        error: (error: HttpErrorResponse) => {
          this.saving.set(false);
          if (bookingStarted) {
            this.selectedSlots.set([]);
            this.bookingOutcome.set({
              booked: bookedCount,
              total: slots.length,
              error: apiErrorMessage(error) ?? this.translate.instant('errors.network'),
            });
          }
          this.feedback.error(error);
          this.loadPlan();
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
    this.weeklyBookingsError.set(false);
    this.bookedSessionStartTimes.set([]);
    this.plansApi
      .getMine()
      .pipe(
        switchMap((plans) => {
          const activePlan =
            plans.find((p) => p.physiotherapistId === this.physioId() && p.status === 'ACTIVE') ?? null;
          this.plan.set(activePlan);
          if (!activePlan) return of([]);
          return this.loadBookedSessions(activePlan).pipe(
            tap((startTimes) => this.bookedSessionStartTimes.set(startTimes)),
            tap(() => this.planReady.set(false)),
          );
        }),
      )
      .subscribe({
        next: () => this.planLoading.set(false),
        error: (error: HttpErrorResponse) => {
          this.weeklyBookingsError.set(true);
          this.planLoading.set(false);
          this.feedback.error(error);
        },
      });
  }

  private loadBookedSessions(plan: TreatmentPlan) {
    return this.appointmentsApi.getMine(0, 100).pipe(
      expand((history, index) => {
        const page = history.page ?? index;
        const totalPages =
          history.totalPages ??
          (history.totalElements !== null && history.size ? Math.ceil(history.totalElements / history.size) : page + 1);
        return page + 1 < totalPages ? this.appointmentsApi.getMine(page + 1, 100) : EMPTY;
      }),
      toArray(),
      map((histories) =>
        histories
          .flatMap((history) => history.appointments)
          // Appointment history has no plan ID; only one active plan per physiotherapist is allowed.
          .filter(
            (appointment) =>
              appointment.physiotherapistId === plan.physiotherapistId &&
              (appointment.status === 'RESERVED' || appointment.status === 'COMPLETED'),
          )
          .map((appointment) => appointment.startTime),
      ),
    );
  }
}
