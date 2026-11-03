import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { NotificationsStore } from '../../../services/notifications.store';
import { AgendaItem } from '../../../model/agenda.entity';
import { AgendaApi } from '../../../services/agenda.api';
import { apiErrorMessage } from '../../../model/api-error';
import { AuthService } from '../../../services/auth.service';
import { FeedbackService } from '../../../services/feedback.service';
import { LanguageService } from '../../../services/language.service';
import { addDays, fromIsoDate, startOfToday, toIsoDate } from '../../../utils/dates';
import { Slot } from '../../../model/slot.entity';
import { SlotsApi } from '../../../services/slots.api';

/** US07: the physiotherapist publishes a block of time split into equal slots. */
@Component({
  selector: 'app-publish-slots',
  imports: [
    DatePipe,
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    TranslatePipe,
  ],
  template: `
    @if (auth.currentUser(); as user) {
      <section class="availability-page" aria-labelledby="publish-title">
        <header class="dashboard-header">
          <a class="dashboard-brand" routerLink="/home" [attr.aria-label]="'layout.goHome' | translate">
            <img src="/images/fisiovital-logo.png" alt="" />
            <span>FisioVital</span>
          </a>
          <nav class="dashboard-nav" [attr.aria-label]="'home.navigation' | translate">
            <a class="dashboard-nav__link" routerLink="/home">{{ 'home.physio.panelNav' | translate }}</a>
            <a class="dashboard-nav__link" routerLink="/agenda">{{ 'home.physio.agendaNav' | translate }}</a>
            <a
              class="dashboard-nav__link dashboard-nav__link--active"
              routerLink="/availability"
              aria-current="page"
            >
              {{ 'home.physio.availabilityNav' | translate }}
            </a>
            <a class="dashboard-nav__link" routerLink="/patients">{{ 'home.physio.historyNav' | translate }}</a>
          </nav>
          <div class="dashboard-actions">
            <a
              class="notification-indicator"
              routerLink="/notifications"
              [attr.aria-label]="'home.notificationsCount' | translate: { count: notifications.unreadCount() }"
            >
              <mat-icon aria-hidden="true">notifications</mat-icon>
              @if (notifications.unreadCount() > 0) {
                <span class="notification-indicator__count" aria-hidden="true">{{ notifications.unreadCount() }}</span>
              }
            </a>
            <div class="profile">
              <button
                class="profile__avatar"
                type="button"
                (click)="profileMenuOpen.update((open) => !open)"
                [attr.aria-label]="'home.profileMenu' | translate: { name: user.fullName }"
                [attr.aria-expanded]="profileMenuOpen()"
              >
                {{ initials(user.fullName) }}
              </button>
              @if (profileMenuOpen()) {
                <button class="profile__sign-out" type="button" (click)="signOut()">
                  {{ 'layout.signOut' | translate }}
                </button>
              }
            </div>
          </div>
        </header>

        <div class="availability-content">
          <header class="availability-heading">
            <p class="availability-eyebrow physio-eyebrow">
              <span aria-hidden="true"></span>{{ 'scheduling.publish.pageEyebrow' | translate }}
            </p>
            <h1 id="publish-title">{{ 'scheduling.publish.pageTitle' | translate }}</h1>
            <p>{{ 'scheduling.publish.subtitle' | translate }}</p>
          </header>
          <section class="publish-card" aria-labelledby="publish-card-title">
            <h2 id="publish-card-title">{{ 'scheduling.publish.title' | translate }}</h2>
            <form [formGroup]="form" (ngSubmit)="publish()" novalidate>
              <mat-form-field appearance="outline">
                <mat-label>{{ 'scheduling.publish.date' | translate }}</mat-label>
                <input matInput type="date" formControlName="date" [min]="today" required />
                @if (form.controls.date.invalid && form.controls.date.touched) {
                  <mat-error>{{ 'validation.required' | translate }}</mat-error>
                }
              </mat-form-field>

              <div class="time-fields">
                <mat-form-field appearance="outline">
                  <mat-label>{{ 'scheduling.publish.startTime' | translate }}</mat-label>
                  <input matInput type="time" formControlName="startTime" required />
                </mat-form-field>
                <mat-form-field appearance="outline">
                  <mat-label>{{ 'scheduling.publish.endTime' | translate }}</mat-label>
                  <input matInput type="time" formControlName="endTime" required />
                </mat-form-field>
              </div>

              <mat-form-field appearance="outline">
                <mat-label>{{ 'scheduling.publish.duration' | translate }}</mat-label>
                <mat-select formControlName="durationMinutes">
                  @for (minutes of durations; track minutes) {
                    <mat-option [value]="minutes">
                      {{ 'scheduling.publish.minutes' | translate: { count: minutes } }}
                    </mat-option>
                  }
                </mat-select>
              </mat-form-field>

              @if (previewSlots().length > 0) {
                <div class="preview-summary" aria-live="polite">
                  <strong>
                    {{ 'scheduling.publish.previewCount' | translate: { count: previewSlots().length } }}
                  </strong>
                  <div class="preview-summary__times">
                    @for (slot of previewSlots(); track slot.time) {
                      <span [class.preview-summary__time--overlap]="slot.overlaps">{{ slot.time }}</span>
                    }
                  </div>
                </div>
              }

              @if (formErrorKey()) {
                <p class="form-message form-message--error" role="alert">
                  {{ formErrorKey() | translate }}
                </p>
              }
              @if (overlappingPreview().length > 0 && !formErrorKey()) {
                <p class="form-message form-message--warning" role="status">
                  {{ 'scheduling.publish.overlap' | translate: { range: overlapRange() } }}
                </p>
              }
              @if (errorMessage()) {
                <p class="form-message form-message--error" role="alert">{{ errorMessage() }}</p>
              }

              <button class="publish-button" mat-flat-button type="submit" [disabled]="!canPublish()">
                {{ 'scheduling.publish.submit' | translate }}
              </button>
            </form>

            @if (published().length > 0) {
              <div class="publish-success" role="status">
                <strong>
                  {{ 'scheduling.publish.created' | translate: { count: published().length } }}
                </strong>
                <a routerLink="/agenda">{{ 'scheduling.publish.goAgenda' | translate }}</a>
              </div>
            }
          </section>

          <section class="week-card" aria-labelledby="week-title">
            <div class="week-card__header">
              <h2 id="week-title">
                {{ 'scheduling.publish.weekTitle' | translate }}
                <span>{{ week()[0] | date: 'd' : undefined : language.current() }}–{{ week()[6] | date: 'd MMM' : undefined : language.current() }}</span>
              </h2>
              <div class="week-card__controls">
                <button
                  mat-icon-button
                  type="button"
                  (click)="moveWeek(-1)"
                  [attr.aria-label]="'agenda.previousWeek' | translate"
                >
                  <mat-icon aria-hidden="true">chevron_left</mat-icon>
                </button>
                <button
                  mat-icon-button
                  type="button"
                  (click)="moveWeek(1)"
                  [attr.aria-label]="'agenda.nextWeek' | translate"
                >
                  <mat-icon aria-hidden="true">chevron_right</mat-icon>
                </button>
              </div>
            </div>

            @if (weekLoading()) {
              <mat-progress-bar mode="indeterminate" [attr.aria-label]="'common.loading' | translate" />
            } @else if (weekError()) {
              <div class="week-state" role="alert">
                <p>{{ weekError() }}</p>
                <button mat-stroked-button type="button" (click)="loadWeek()">{{ 'common.retry' | translate }}</button>
              </div>
            } @else {
              <div class="week-grid">
                @for (day of week(); track isoDate(day)) {
                  <section class="week-day" [attr.aria-label]="day | date: 'fullDate' : undefined : language.current()">
                    <h3>{{ day | date: 'EEE d' : undefined : language.current() }}</h3>
                    @if (dayItems(day).length === 0) {
                      <p class="week-day__empty">{{ 'scheduling.publish.noSlots' | translate }}</p>
                    } @else {
                      <ul>
                        @for (item of dayItems(day); track item.slotId) {
                          <li
                            class="week-slot"
                            [class.week-slot--booked]="item.status === 'BOOKED'"
                            [class.week-slot--cancelled]="item.status === 'FREE_CANCELLED'"
                          >
                            <span>{{ item.startTime | date: 'HH:mm' }}</span>
                            <span>
                              {{
                                (item.status === 'BOOKED'
                                  ? 'scheduling.publish.reserved'
                                  : item.status === 'FREE_CANCELLED'
                                    ? 'agenda.freeCancelled'
                                    : 'scheduling.publish.free') | translate
                              }}
                            </span>
                          </li>
                        }
                      </ul>
                    }
                  </section>
                }
              </div>
            }
          </section>
        </div>
      </section>
    }
  `,
  styleUrl: './publish-slots.scss',
})
export class PublishSlots {
  private readonly api = inject(SlotsApi);
  private readonly agendaApi = inject(AgendaApi);
  private readonly feedback = inject(FeedbackService);
  private readonly translate = inject(TranslateService);
  private readonly router = inject(Router);
  protected readonly auth = inject(AuthService);
  protected readonly notifications = inject(NotificationsStore);
  protected readonly language = inject(LanguageService);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly today = toIsoDate(startOfToday());
  protected readonly durations = [30, 45, 60, 90];
  protected readonly saving = signal(false);
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly published = signal<Slot[]>([]);
  protected readonly profileMenuOpen = signal(false);
  protected readonly selectedDate = signal(toIsoDate(addDays(startOfToday(), 1)));
  protected readonly weekLoading = signal(true);
  protected readonly weekError = signal<string | null>(null);
  protected readonly weekItems = signal<Record<string, AgendaItem[]>>({});
  private readonly formRevision = signal(0);

  protected readonly form = inject(NonNullableFormBuilder).group({
    date: [this.selectedDate(), Validators.required],
    startTime: ['08:00', Validators.required],
    endTime: ['12:00', Validators.required],
    durationMinutes: [60, Validators.required],
  });

  protected readonly week = computed(() => {
    const date = fromIsoDate(this.selectedDate());
    const monday = addDays(date, -((date.getDay() + 6) % 7));
    return Array.from({ length: 7 }, (_, index) => addDays(monday, index));
  });

  protected readonly previewSlots = computed(() => {
    this.formRevision();
    const { date, startTime, endTime, durationMinutes } = this.form.getRawValue();
    const duration = Number(durationMinutes);
    const start = this.toMinutes(startTime);
    const end = this.toMinutes(endTime);
    if (!date || !startTime || !endTime || !duration || end <= start) return [];

    return Array.from({ length: Math.floor((end - start) / duration) }, (_, index) => {
      const slotStart = start + index * duration;
      const slotEnd = slotStart + duration;
      const overlaps = (this.weekItems()[date] ?? []).some((item) => {
        const existingStart = this.toMinutes(item.startTime.slice(11, 16));
        const existingEnd = this.toMinutes(item.endTime.slice(11, 16));
        return slotStart < existingEnd && slotEnd > existingStart;
      });
      return { time: this.formatTime(slotStart), overlaps };
    });
  });

  protected readonly overlappingPreview = computed(() => this.previewSlots().filter((slot) => slot.overlaps));
  protected readonly overlapRange = computed(() => {
    const overlaps = this.overlappingPreview();
    if (overlaps.length === 0) return '';
    const duration = Number(this.form.controls.durationMinutes.value);
    const first = this.toMinutes(overlaps[0].time);
    return `${overlaps[0].time}–${this.formatTime(first + duration)}`;
  });
  protected readonly formErrorKey = computed(() => {
    this.formRevision();
    if (this.form.controls.date.invalid || !this.form.controls.date.value) return 'scheduling.publish.invalidDate';
    if (this.form.controls.date.value < this.today) return 'scheduling.publish.pastDate';
    const { startTime, endTime } = this.form.getRawValue();
    if (!startTime || !endTime || this.toMinutes(endTime) <= this.toMinutes(startTime)) {
      return 'scheduling.publish.invalidRange';
    }
    if (this.previewSlots().length === 0) return 'scheduling.publish.noCompleteSlots';
    return null;
  });
  protected readonly canPublish = computed(
    () => !this.saving() && !this.formErrorKey() && this.overlappingPreview().length === 0,
  );

  constructor() {
    this.form.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      this.formRevision.update((revision) => revision + 1);
      this.errorMessage.set(null);
      this.published.set([]);
      if (value.date && value.date !== this.selectedDate()) {
        this.selectedDate.set(value.date);
        this.loadWeek(value.date);
      }
    });
    this.loadWeek(this.selectedDate());
  }

  protected initials(fullName: string): string {
    return fullName
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toLocaleUpperCase() ?? '')
      .join('');
  }

  protected isoDate(date: Date): string {
    return toIsoDate(date);
  }

  protected dayItems(date: Date): AgendaItem[] {
    return this.weekItems()[toIsoDate(date)] ?? [];
  }

  protected moveWeek(direction: 1 | -1): void {
    const selected = fromIsoDate(this.selectedDate());
    const next = toIsoDate(addDays(selected, direction * 7));
    this.selectedDate.set(next);
    this.form.controls.date.setValue(next);
    this.loadWeek(next);
  }

  protected loadWeek(anchor = this.selectedDate()): void {
    const date = fromIsoDate(anchor);
    const monday = addDays(date, -((date.getDay() + 6) % 7));
    const dates = Array.from({ length: 7 }, (_, index) => toIsoDate(addDays(monday, index)));
    this.weekLoading.set(true);
    this.weekError.set(null);
    forkJoin(dates.map((day) => this.agendaApi.getForDate(day))).subscribe({
      next: (agendas) => {
        this.weekItems.set(Object.fromEntries(agendas.map((agenda) => [agenda.date, agenda.items])));
        this.weekLoading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.weekError.set(apiErrorMessage(error) ?? this.translate.instant('errors.load'));
        this.weekLoading.set(false);
      },
    });
  }

  protected publish(): void {
    if (!this.canPublish()) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    this.errorMessage.set(null);
    this.api.publish(this.form.getRawValue()).subscribe({
      next: (slots) => {
        this.saving.set(false);
        this.published.set(slots);
        this.feedback.success('scheduling.publish.created', { count: slots.length });
        this.loadWeek(this.selectedDate());
      },
      error: (error: HttpErrorResponse) => {
        this.saving.set(false);
        this.errorMessage.set(apiErrorMessage(error) ?? this.translate.instant('errors.load'));
      },
    });
  }

  protected signOut(): void {
    this.auth.signOut();
    this.notifications.clear();
    this.router.navigate(['/sign-in']);
  }

  private toMinutes(value: string): number {
    const [hours, minutes] = value.split(':').map(Number);
    return hours * 60 + minutes;
  }

  private formatTime(totalMinutes: number): string {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  }
}
