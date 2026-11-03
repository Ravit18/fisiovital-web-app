import { DatePipe, NgTemplateOutlet } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { filter, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthService } from '../../services/auth.service';
import { NotificationsStore } from '../../services/notifications.store';
import { ConfirmDialog, ConfirmDialogData } from '../confirm-dialog/confirm-dialog';
import { SessionStatusChip } from '../session-status-chip/session-status-chip';
import { apiErrorMessage } from '../../model/api-error';
import { FeedbackService } from '../../services/feedback.service';
import { LanguageService } from '../../services/language.service';
import { isWithin24Hours } from '../../utils/dates';
import { RescheduleDialog } from '../reschedule-dialog/reschedule-dialog';
import { Session } from '../../model/treatment-plan.entity';
import { SessionsApi } from '../../services/sessions.api';
import { Appointment } from '../../model/appointment.entity';
import { AppointmentsApi } from '../../services/appointments.api';

const startOf = (appointment: Appointment) => new Date(appointment.startTime).getTime();

/** US14: the patient's upcoming sessions and their history. */
@Component({
  selector: 'app-my-appointments',
  imports: [
    DatePipe,
    NgTemplateOutlet,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatTabsModule,
    RouterLink,
    TranslatePipe,
    SessionStatusChip,
  ],
  templateUrl: './my-appointments.html',
  styleUrl: './my-appointments.scss',
})
export class MyAppointments {
  private readonly api = inject(AppointmentsApi);
  private readonly sessionsApi = inject(SessionsApi);
  private readonly dialog = inject(MatDialog);
  private readonly feedback = inject(FeedbackService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  protected readonly auth = inject(AuthService);
  protected readonly notifications = inject(NotificationsStore);
  protected readonly language = inject(LanguageService);
  protected readonly profileMenuOpen = signal(false);
  protected readonly historyView = signal(false);

  private readonly pageSize = 20;
  private page = 0;
  protected readonly hasMore = signal(false);
  protected readonly loading = signal(true);
  protected readonly loadFailed = signal(false);
  protected readonly errorMessage = signal<string | null>(null);
  private readonly appointments = signal<Appointment[]>([]);

  protected readonly upcoming = computed(() =>
    this.appointments()
      .filter((a) => a.status === 'RESERVED' && startOf(a) > Date.now())
      .sort((a, b) => startOf(a) - startOf(b)),
  );
  protected readonly history = computed(() =>
    this.appointments()
      .filter((a) => !this.upcoming().includes(a))
      .sort((a, b) => startOf(b) - startOf(a)),
  );
  protected readonly next = computed(() => this.upcoming()[0] ?? null);

  protected initials(fullName: string): string {
    return fullName
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toLocaleUpperCase() ?? '')
      .join('');
  }

  constructor() {
    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      this.historyView.set(params.get('view') === 'history');
    });
    this.load();
  }

  /** US14 is paginated: the first call loads page 0, "load more" appends the next one. */
  protected load(more = false): void {
    this.page = more ? this.page + 1 : 0;
    this.loading.set(!more);
    this.loadFailed.set(false);
    this.api.getMine(this.page, this.pageSize).subscribe({
      next: (history) => {
        this.appointments.set(more ? [...this.appointments(), ...history.appointments] : history.appointments);
        this.hasMore.set(this.page + 1 < (history.totalPages ?? 0));
        this.loading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        // US14: a slow history answers 503 "Please try again later".
        this.errorMessage.set(apiErrorMessage(error));
        this.loadFailed.set(true);
        this.loading.set(false);
      },
    });
  }

  /** US11 */
  protected reschedule(appointment: Appointment): void {
    this.dialog
      .open<RescheduleDialog, Appointment, Session>(RescheduleDialog, { data: appointment, width: '640px' })
      .afterClosed()
      .subscribe((session) => {
        if (!session) return;
        this.feedback.success(session.lateChange ? 'treatment.reschedule.doneLate' : 'treatment.reschedule.done');
        this.load();
      });
  }

  /** US12: less than 24 hours before, the backend records a late cancellation. */
  protected cancel(appointment: Appointment): void {
    this.dialog
      .open<ConfirmDialog, ConfirmDialogData, boolean>(ConfirmDialog, {
        data: {
          title: 'treatment.cancel.title',
          message: 'treatment.cancel.message',
          confirm: 'treatment.cancel.confirm',
          warning: isWithin24Hours(appointment.startTime) ? 'treatment.cancel.lateWarning' : undefined,
        },
      })
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap(() => this.sessionsApi.cancel(appointment.sessionId)),
      )
      .subscribe({
        next: (session) => {
          this.feedback.success(
            session.status === 'LATE_CANCELLED' ? 'treatment.cancel.doneLate' : 'treatment.cancel.done',
          );
          this.load();
        },
        error: (error: HttpErrorResponse) => this.feedback.error(error),
      });
  }

  protected signOut(): void {
    this.auth.signOut();
    this.notifications.clear();
    this.router.navigate(['/sign-in']);
  }
}
