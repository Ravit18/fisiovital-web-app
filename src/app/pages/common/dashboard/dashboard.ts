import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';
import { Appointment } from '../../../core/models/appointment.model';
import { AppointmentsService } from '../../../core/services/appointments.service';
import { apiErrorMessage } from '../../../core/models/api-error.model';
import { Notification } from '../../../core/models/notification.model';
import { NotificationService } from '../../../core/services/notification.service';
import { AuthService } from '../../../core/services/auth.service';
import { TreatmentPlan } from '../../../core/models/treatment-plan.model';
import { TreatmentPlansService } from '../../../core/services/treatment-plans.service';
import { AgendaItem } from '../../../core/models/agenda.model';
import { AgendaService } from '../../../core/services/agenda.service';
import { LanguageService } from '../../../core/services/language.service';
import { addDays, startOfToday, toIsoDate } from '../../../core/dates';

interface PlanSummary {
  plan: TreatmentPlan;
}

@Component({
  selector: 'app-dashboard',
  imports: [DatePipe, MatIconModule, RouterLink, TranslatePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  protected readonly auth = inject(AuthService);
  private readonly plansApi = inject(TreatmentPlansService);
  private readonly appointmentsApi = inject(AppointmentsService);
  private readonly notificationsApi = inject(NotificationService);
  private readonly agendaApi = inject(AgendaService);
  private readonly router = inject(Router);
  protected readonly language = inject(LanguageService);
  protected readonly plans = signal<PlanSummary[]>([]);
  protected readonly appointments = signal<Appointment[]>([]);
  protected readonly notifications = signal<Notification[]>([]);
  protected readonly agendaItems = signal<AgendaItem[]>([]);
  protected readonly selectedAgendaDate = signal(startOfToday());
  protected readonly profileMenuOpen = signal(false);
  protected readonly loading = signal(true);
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly networkError = signal(false);
  protected readonly agendaLoading = signal(true);
  protected readonly agendaErrorMessage = signal<string | null>(null);
  protected readonly agendaNetworkError = signal(false);
  protected readonly notificationsErrorMessage = signal<string | null>(null);
  protected readonly notificationsNetworkError = signal(false);
  protected readonly reservedAgendaItems = computed(() =>
    this.agendaItems().filter((item) => item.status === 'BOOKED'),
  );
  protected readonly cancelledAgendaItems = computed(() =>
    this.agendaItems().filter((item) => item.status === 'FREE_CANCELLED'),
  );
  protected readonly activePlans = computed(() => this.plans().filter(({ plan }) => plan.status === 'ACTIVE'));
  protected readonly completedSessions = computed(() =>
    this.plans().reduce((total, summary) => total + summary.plan.completedSessions, 0),
  );
  protected readonly progressPercent = computed(() => {
    const summaries = this.plans();
    const totalSessions = summaries.reduce((total, { plan }) => total + plan.totalSessions, 0);
    if (!totalSessions) return null;
    const completed = summaries.reduce((total, { plan }) => total + plan.completedSessions, 0);
    return Math.round((completed / totalSessions) * 100);
  });
  protected readonly nextSession = computed(() => {
    const sessions = this.appointments().filter(
      (appointment) => appointment.status === 'RESERVED' && Date.parse(appointment.startTime) > Date.now(),
    );
    return sessions.sort((a, b) => Date.parse(a.startTime) - Date.parse(b.startTime))[0] ?? null;
  });
  protected readonly unreadNotifications = computed(() => this.notifications().filter(({ read }) => !read).length);

  ngOnInit(): void {
    if (this.auth.currentUser()?.role === 'PHYSIOTHERAPIST') {
      this.loadPhysiotherapistDashboard();
      return;
    }

    forkJoin({
      plans: this.plansApi.getMine(),
      appointments: this.appointmentsApi.getMine(0, 100),
      notifications: this.notificationsApi.findMine(),
    })
      .subscribe({
        next: ({ plans, appointments, notifications }) => {
          this.plans.set(plans.map((plan) => ({ plan })));
          this.appointments.set(appointments.appointments);
          this.notifications.set(notifications);
          this.loading.set(false);
        },
        error: (error: HttpErrorResponse) => {
          const message = apiErrorMessage(error);
          this.errorMessage.set(message);
          this.networkError.set(message === null);
          this.loading.set(false);
        },
      });
  }

  protected moveAgendaDay(days: -1 | 1): void {
    this.selectedAgendaDate.update((date) => addDays(date, days));
    this.loadAgenda();
  }

  protected loadAgenda(): void {
    this.agendaLoading.set(true);
    this.agendaErrorMessage.set(null);
    this.agendaNetworkError.set(false);
    this.agendaApi.getForDate(toIsoDate(this.selectedAgendaDate())).subscribe({
      next: (agenda) => {
        this.agendaItems.set(agenda.items);
        this.agendaLoading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        const message = apiErrorMessage(error);
        this.agendaErrorMessage.set(message);
        this.agendaNetworkError.set(message === null);
        this.agendaLoading.set(false);
      },
    });
  }

  protected agendaStatusKey(item: AgendaItem): string {
    if (item.status === 'BOOKED') return 'home.physio.reserved';
    return item.status === 'FREE_CANCELLED' ? 'home.physio.freeCancelled' : 'home.physio.free';
  }

  protected firstName(fullName: string): string {
    return fullName.trim().split(/\s+/)[0] ?? fullName;
  }

  protected initials(fullName: string): string {
    return fullName
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toLocaleUpperCase() ?? '')
      .join('');
  }

  protected planProgressPercent(plan: TreatmentPlan): number {
    return plan.totalSessions > 0 ? Math.round((plan.completedSessions / plan.totalSessions) * 100) : 0;
  }

  protected signOut(): void {
    this.auth.signOut();
    this.router.navigate(['/sign-in']);
  }

  private loadPhysiotherapistDashboard(): void {
    this.loadAgenda();
    this.notificationsApi.findMine().subscribe({
      next: (notifications) => {
        this.notifications.set(notifications);
        this.notificationsErrorMessage.set(null);
        this.notificationsNetworkError.set(false);
      },
      error: (error: HttpErrorResponse) => {
        const message = apiErrorMessage(error);
        this.notificationsErrorMessage.set(message);
        this.notificationsNetworkError.set(message === null);
      },
    });
  }
}
