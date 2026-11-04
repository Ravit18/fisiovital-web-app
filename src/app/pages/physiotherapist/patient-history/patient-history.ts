import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { NotificationsStore } from '../../../core/services/notifications.store';
import { apiErrorMessage } from '../../../core/models/api-error.model';
import { SessionStatusChip } from '../../../core/components/session-status-chip/session-status-chip';
import { LanguageService } from '../../../core/services/language.service';
import { AuthService } from '../../../core/services/auth.service';
import { Appointment } from '../../../core/models/appointment.model';
import { AppointmentsService } from '../../../core/services/appointments.service';

/** US15: the physiotherapist's appointment history; US16: filtered to one patient. */
@Component({
  selector: 'app-patient-history',
  imports: [
    DatePipe,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    RouterLink,
    TranslatePipe,
    SessionStatusChip,
  ],
  template: `
    @if (auth.currentUser(); as user) {
      <section class="physio-history" aria-labelledby="history-title">
        <header class="dashboard-header">
          <a class="dashboard-brand" routerLink="/physiotherapist/home" [attr.aria-label]="'layout.goHome' | translate">
            <img src="/images/fisiovital-logo.png" alt="" />
            <span>FisioVital</span>
          </a>
          <nav class="dashboard-nav" [attr.aria-label]="'home.navigation' | translate">
            <a class="dashboard-nav__link" routerLink="/physiotherapist/home">{{ 'home.physio.panelNav' | translate }}</a>
            <a class="dashboard-nav__link" routerLink="/physiotherapist/agenda">{{ 'home.physio.agendaNav' | translate }}</a>
            <a class="dashboard-nav__link" routerLink="/physiotherapist/availability">
              {{ 'home.physio.availabilityNav' | translate }}
            </a>
            <a
              class="dashboard-nav__link dashboard-nav__link--active"
              routerLink="/physiotherapist/patients"
              aria-current="page"
            >
              {{ 'home.physio.historyNav' | translate }}
            </a>
          </nav>
          <div class="dashboard-actions">
            <a
              class="notification-indicator"
              routerLink="/physiotherapist/notifications"
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

        <div class="history-content">
          <header class="history-heading">
            <div>
              <p class="history-eyebrow physio-eyebrow">
                <span aria-hidden="true"></span>{{ 'appointments.physio.eyebrow' | translate }}
              </p>
              <h1 id="history-title">
                {{ 'appointments.physio.titlePrefix' | translate }}
                <span>{{ 'appointments.physio.titleAccent' | translate }}</span>
              </h1>
              <p class="history-subtitle">{{ 'appointments.physio.subtitle' | translate }}</p>
            </div>
            <button
              class="history-action"
              mat-flat-button
              type="button"
              aria-controls="patient-search"
              [attr.aria-expanded]="patientSearchOpen()"
              (click)="showPatientSearch()"
            >
              {{ 'appointments.physio.patientHistory' | translate }}
            </button>
          </header>

          @if (patientSearchOpen()) {
            <form id="patient-search" class="patient-search" role="search" (submit)="search($event)">
              <mat-form-field appearance="outline">
                <mat-label>{{ 'appointments.physio.patientName' | translate }}</mat-label>
                <input
                  matInput
                  name="patientName"
                  [value]="patientName"
                  (input)="onPatientNameInput($event)"
                  autocomplete="off"
                />
              </mat-form-field>
              <button mat-flat-button type="submit">{{ 'appointments.physio.search' | translate }}</button>
              @if (filtered()) {
                <button mat-stroked-button type="button" (click)="clear()">
                  {{ 'appointments.physio.showAll' | translate }}
                </button>
              }
            </form>
          }

          @if (loading()) {
            <mat-progress-bar mode="indeterminate" [attr.aria-label]="'common.loading' | translate" />
          } @else if (loadFailed()) {
            <section class="history-state history-state--error" role="alert">
              <span class="history-state__badge">{{ 'appointments.physio.errorBadge' | translate }}</span>
              <h2>{{ 'appointments.physio.errorTitle' | translate }}</h2>
              <p>{{ errorMessage() }}</p>
              <button mat-stroked-button type="button" (click)="retry()">{{ 'common.retry' | translate }}</button>
            </section>
          } @else if (appointments().length === 0) {
            <section class="history-state" role="status">
              <span class="history-state__badge">{{ 'appointments.physio.emptyBadge' | translate }}</span>
              <h2>{{ 'appointments.physio.emptyTitle' | translate }}</h2>
              <p>{{ emptyMessage() }}</p>
            </section>
          } @else {
            <p class="history-count" role="status">
              {{ 'appointments.physio.count' | translate: { count: appointments().length } }}
            </p>
            <div class="history-table-wrap">
              <table class="history-table">
                <thead>
                  <tr>
                    <th scope="col">{{ 'appointments.physio.date' | translate }}</th>
                    <th scope="col">{{ 'appointments.physio.patient' | translate }}</th>
                    <th scope="col">{{ 'appointments.physio.session' | translate }}</th>
                    <th scope="col">{{ 'appointments.physio.status' | translate }}</th>
                  </tr>
                </thead>
                <tbody>
                  @for (appointment of appointments(); track appointment.sessionId) {
                    <tr>
                      <td>
                        <time [attr.datetime]="appointment.startTime">
                          {{ appointment.startTime | date: 'dd/MM/yyyy' : undefined : language.current() }} ·
                          {{ appointment.startTime | date: 'HH:mm' : undefined : language.current() }}
                        </time>
                      </td>
                      <td>{{ appointment.patientName }}</td>
                      <td>
                        {{ 'appointments.session' | translate: { number: appointment.sessionNumber, total: appointment.totalSessions } }}
                      </td>
                      <td><app-session-status-chip [status]="appointment.status" /></td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          }
        </div>
      </section>
    }
  `,
  styleUrl: './patient-history.scss',
})
export class PatientHistory {
  private readonly api = inject(AppointmentsService);
  private readonly translate = inject(TranslateService);
  private readonly router = inject(Router);
  protected readonly auth = inject(AuthService);
  protected readonly notifications = inject(NotificationsStore);
  protected readonly language = inject(LanguageService);

  protected patientName = '';
  protected readonly filtered = signal(false);
  protected readonly patientSearchOpen = signal(false);
  protected readonly profileMenuOpen = signal(false);
  protected readonly loading = signal(true);
  protected readonly loadFailed = signal(false);
  protected readonly appointments = signal<Appointment[]>([]);
  protected readonly emptyMessage = signal('');
  protected readonly errorMessage = signal<string | null>(null);
  private activePatientName = '';

  constructor() {
    this.load();
  }

  protected search(event: Event): void {
    event.preventDefault();
    this.load(this.patientName.trim());
  }

  protected clear(): void {
    this.patientName = '';
    this.patientSearchOpen.set(false);
    this.load();
  }

  protected retry(): void {
    this.load(this.activePatientName);
  }

  protected showPatientSearch(): void {
    this.patientSearchOpen.set(true);
  }

  protected onPatientNameInput(event: Event): void {
    const input = event.currentTarget;
    if (input instanceof HTMLInputElement) this.patientName = input.value;
  }

  protected initials(fullName: string): string {
    return fullName
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toLocaleUpperCase() ?? '')
      .join('');
  }

  protected signOut(): void {
    this.auth.signOut();
    this.notifications.clear();
    this.router.navigate(['/sign-in']);
  }

  private load(patientName = ''): void {
    this.loading.set(true);
    this.loadFailed.set(false);
    this.errorMessage.set(null);
    this.activePatientName = patientName;
    this.filtered.set(patientName !== '');
    this.patientSearchOpen.set(patientName !== '');
    this.api.getForPhysiotherapist(patientName || undefined).subscribe({
      next: (history) => {
        this.appointments.set(
          [...history.appointments].sort((first, second) => Date.parse(second.startTime) - Date.parse(first.startTime)),
        );
        this.emptyMessage.set(
          this.filtered() && history.message
            ? history.message
            : this.translate.instant('appointments.physio.empty'),
        );
        this.loading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.appointments.set([]);
        this.errorMessage.set(apiErrorMessage(error) ?? this.translate.instant('errors.load'));
        this.loadFailed.set(true);
        this.loading.set(false);
      },
    });
  }
}
