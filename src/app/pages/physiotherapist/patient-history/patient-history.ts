import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { FormGroupDirective, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ClinicalNote } from '../../../core/models/clinical-note.model';
import { ClinicalNotesService } from '../../../core/services/clinical-notes.service';
import { NotificationsStore } from '../../../core/services/notifications.store';
import { apiErrorMessage } from '../../../core/models/api-error.model';
import { SessionStatusChip } from '../../../core/components/session-status-chip/session-status-chip';
import { LanguageService } from '../../../core/services/language.service';
import { AuthService } from '../../../core/services/auth.service';
import { Appointment } from '../../../core/models/appointment.model';
import { AppointmentsService } from '../../../core/services/appointments.service';

/** US15: the physiotherapist's appointment history; US16: one patient's record and sessions. */
@Component({
  selector: 'app-patient-history',
  imports: [
    DatePipe,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    ReactiveFormsModule,
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
          </header>

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
            @if (record(); as record) {
              <section class="patient-record" aria-labelledby="record-title">
                <header class="patient-record__header">
                  <span class="patient-record__avatar" aria-hidden="true">{{ initials(record.name) }}</span>
                  <div>
                    <p class="patient-record__eyebrow">{{ 'appointments.record.eyebrow' | translate }}</p>
                    <h2 id="record-title">{{ record.name }}</h2>
                    <p class="patient-record__since">
                      {{ 'appointments.record.since' | translate: { date: (record.firstVisit | date: 'longDate' : undefined : language.current()) } }}
                    </p>
                  </div>
                </header>

                <dl class="patient-record__stats">
                  <div>
                    <dt>{{ 'appointments.record.completed' | translate }}</dt>
                    <dd>{{ record.completed }}</dd>
                  </div>
                  <div>
                    <dt>{{ 'appointments.record.upcoming' | translate }}</dt>
                    <dd>{{ record.upcoming }}</dd>
                  </div>
                  <div>
                    <dt>{{ 'appointments.record.cancelled' | translate }}</dt>
                    <dd>{{ record.cancelled }}</dd>
                  </div>
                  <div>
                    <dt>{{ 'appointments.record.next' | translate }}</dt>
                    <dd>
                      @if (record.next; as next) {
                        <time [attr.datetime]="next">
                          {{ next | date: 'dd/MM/yyyy · HH:mm' : undefined : language.current() }}
                        </time>
                      } @else {
                        {{ 'appointments.record.noNext' | translate }}
                      }
                    </dd>
                  </div>
                </dl>

                <h3 class="patient-record__subtitle">{{ 'appointments.record.treatments' | translate }}</h3>
                <ul class="patient-record__treatments">
                  @for (treatment of record.treatments; track treatment.key) {
                    <li class="treatment">
                      <div class="treatment__header">
                        <strong>{{ treatment.diagnosis }}</strong>
                        <span class="treatment__specialty">{{ 'specialties.' + treatment.specialty | translate }}</span>
                      </div>
                      <div
                        class="treatment__bar"
                        role="progressbar"
                        aria-valuemin="0"
                        [attr.aria-valuemax]="treatment.total"
                        [attr.aria-valuenow]="treatment.completed"
                        [attr.aria-label]="'appointments.record.progress' | translate: { completed: treatment.completed, total: treatment.total }"
                      >
                        <span [style.width.%]="treatment.percent"></span>
                      </div>
                      <p class="treatment__details">
                        {{ 'appointments.record.progress' | translate: { completed: treatment.completed, total: treatment.total } }}
                        @if (treatment.upcoming > 0) {
                          · {{ 'appointments.record.upcomingCount' | translate: { count: treatment.upcoming } }}
                        }
                        @if (treatment.lastVisit; as last) {
                          · {{ 'appointments.record.lastVisit' | translate: { date: (last | date: 'dd/MM/yyyy' : undefined : language.current()) } }}
                        }
                      </p>
                    </li>
                  }
                </ul>

                <section class="clinical-history" aria-labelledby="clinical-title">
                  <h3 id="clinical-title" class="patient-record__subtitle">
                    {{ 'appointments.record.clinicalTitle' | translate }}
                  </h3>
                  @if (notesLoading()) {
                    <mat-progress-bar mode="indeterminate" [attr.aria-label]="'common.loading' | translate" />
                  } @else if (notesError(); as loadMessage) {
                    <p class="clinical-history__message clinical-history__message--error" role="alert">
                      {{ loadMessage }}
                      <button mat-button type="button" (click)="loadNotes(record.patientId)">
                        {{ 'common.retry' | translate }}
                      </button>
                    </p>
                  } @else if (notes().length === 0) {
                    <p class="clinical-history__message">{{ 'appointments.record.noNotes' | translate }}</p>
                  } @else {
                    <p class="clinical-history__latest" role="status">
                      <strong>{{ 'appointments.record.latestNote' | translate }}</strong>
                      {{ notes()[0].text }}
                    </p>
                    <ol class="clinical-history__notes">
                      @for (note of notes(); track note.id) {
                        <li class="clinical-note">
                          <span class="clinical-note__tag" [class.clinical-note__tag--general]="!note.sessionId">
                            @if (note.sessionId && note.sessionStartTime) {
                              {{
                                'appointments.record.sessionTag'
                                  | translate
                                    : {
                                        number: note.sessionNumber,
                                        date: (note.sessionStartTime | date: 'dd/MM/yyyy' : undefined : language.current()),
                                      }
                              }}
                            } @else {
                              {{ 'appointments.record.generalTag' | translate }}
                            }
                          </span>
                          <p class="clinical-note__text">{{ note.text }}</p>
                          <p class="clinical-note__meta">
                            {{ note.physiotherapistName }} ·
                            <time [attr.datetime]="note.createdAt">
                              {{ note.createdAt | date: 'dd/MM/yyyy · HH:mm' : undefined : language.current() }}
                            </time>
                          </p>
                        </li>
                      }
                    </ol>
                  }

                  <form
                    #noteFormDirective="ngForm"
                    class="clinical-history__form"
                    [formGroup]="noteForm"
                    (ngSubmit)="saveNote(record.patientId, noteFormDirective)"
                    novalidate
                  >
                    <mat-form-field appearance="outline">
                      <mat-label>{{ 'appointments.record.sessionLabel' | translate }}</mat-label>
                      <mat-select formControlName="sessionId" [canSelectNullableOptions]="true">
                        <mat-option [value]="null">{{ 'appointments.record.generalOption' | translate }}</mat-option>
                        @for (session of noteSessions(); track session.sessionId) {
                          <mat-option [value]="session.sessionId">
                            {{
                              'appointments.record.sessionOption'
                                | translate
                                  : {
                                      number: session.sessionNumber,
                                      total: session.totalSessions,
                                      date: (session.startTime | date: 'dd/MM/yyyy' : undefined : language.current()),
                                    }
                            }}
                          </mat-option>
                        }
                      </mat-select>
                      <mat-hint>{{ 'appointments.record.sessionHint' | translate }}</mat-hint>
                    </mat-form-field>
                    <mat-form-field appearance="outline">
                      <mat-label>{{ 'appointments.record.noteLabel' | translate }}</mat-label>
                      <textarea
                        matInput
                        formControlName="text"
                        rows="3"
                        [maxlength]="noteMaxLength"
                        [placeholder]="'appointments.record.notePlaceholder' | translate"
                      ></textarea>
                      <mat-hint align="end">{{ noteForm.controls.text.value.length }} / {{ noteMaxLength }}</mat-hint>
                      @if (noteForm.controls.text.invalid && noteForm.controls.text.touched) {
                        <mat-error>{{ 'validation.required' | translate }}</mat-error>
                      }
                    </mat-form-field>
                    @if (noteError(); as saveMessage) {
                      <p class="clinical-history__message clinical-history__message--error" role="alert">{{ saveMessage }}</p>
                    }
                    <button mat-flat-button type="submit" [disabled]="noteForm.invalid || noteSaving()">
                      {{ (noteSaving() ? 'appointments.record.savingNote' : 'appointments.record.saveNote') | translate }}
                    </button>
                  </form>
                </section>
              </section>
            }
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
                    @if (filtered()) {
                      <th scope="col">{{ 'appointments.record.evolution' | translate }}</th>
                    }
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
                      <td>
                        @if (filtered()) {
                          {{ appointment.patientName }}
                        } @else {
                          <button
                            class="patient-link"
                            type="button"
                            [attr.aria-label]="'appointments.record.open' | translate: { name: appointment.patientName }"
                            (click)="openRecord(appointment.patientName)"
                          >
                            {{ appointment.patientName }}
                          </button>
                        }
                      </td>
                      <td>
                        {{ 'appointments.session' | translate: { number: appointment.sessionNumber, total: appointment.totalSessions } }}
                      </td>
                      <td><app-session-status-chip [status]="appointment.status" /></td>
                      @if (filtered()) {
                        <td class="evolution-cell">
                          @for (note of notesBySession().get(appointment.sessionId) ?? []; track note.id) {
                            <p class="evolution-note">
                              {{ note.text }}
                              <span class="evolution-note__meta">
                                {{ note.physiotherapistName }} ·
                                {{ note.createdAt | date: 'dd/MM/yyyy' : undefined : language.current() }}
                              </span>
                            </p>
                          } @empty {
                            <span class="evolution-cell__empty">{{ 'appointments.record.noEvolution' | translate }}</span>
                          }
                        </td>
                      }
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
  private readonly notesApi = inject(ClinicalNotesService);
  private readonly translate = inject(TranslateService);
  private readonly router = inject(Router);
  protected readonly auth = inject(AuthService);
  protected readonly notifications = inject(NotificationsStore);
  protected readonly language = inject(LanguageService);

  protected patientName = '';
  protected readonly filtered = signal(false);
  protected readonly profileMenuOpen = signal(false);
  protected readonly loading = signal(true);
  protected readonly loadFailed = signal(false);
  protected readonly appointments = signal<Appointment[]>([]);
  protected readonly emptyMessage = signal('');
  protected readonly errorMessage = signal<string | null>(null);
  private activePatientName = '';

  /**
   * US16: the patient's record, built from their sessions with this physiotherapist. Each treatment plan is one
   * diagnosis with its own total; sessions already past count as completed (the backend sends COMPLETED).
   */
  protected readonly record = computed(() => {
    const sessions = this.appointments();
    if (!this.filtered() || sessions.length === 0) return null;
    const now = Date.now();
    const isUpcoming = (a: Appointment) => a.status === 'RESERVED' && Date.parse(a.startTime) > now;
    const isCancelled = (a: Appointment) => a.status === 'CANCELLED' || a.status === 'LATE_CANCELLED';

    const plans = new Map<string, Appointment[]>();
    for (const session of sessions) {
      const key = `${session.diagnosis}|${session.totalSessions}`;
      plans.set(key, [...(plans.get(key) ?? []), session]);
    }
    const treatments = [...plans.entries()].map(([key, items]) => {
      const completed = items.filter((a) => a.status === 'COMPLETED');
      return {
        key,
        diagnosis: items[0].diagnosis,
        specialty: items[0].specialty,
        total: items[0].totalSessions,
        completed: completed.length,
        upcoming: items.filter(isUpcoming).length,
        percent: Math.min(100, Math.round((completed.length / items[0].totalSessions) * 100)),
        // Sessions are sorted newest first, so the first completed one is the last visit.
        lastVisit: completed[0]?.startTime ?? null,
      };
    });
    const upcoming = sessions.filter(isUpcoming);
    return {
      patientId: sessions[0].patientId,
      name: sessions[0].patientName,
      firstVisit: sessions[sessions.length - 1].startTime,
      completed: sessions.filter((a) => a.status === 'COMPLETED').length,
      upcoming: upcoming.length,
      cancelled: sessions.filter(isCancelled).length,
      next: upcoming.length > 0 ? upcoming[upcoming.length - 1].startTime : null,
      treatments,
    };
  });

  protected readonly noteMaxLength = 1000;
  protected readonly notes = signal<ClinicalNote[]>([]);
  protected readonly notesLoading = signal(false);
  protected readonly notesError = signal<string | null>(null);
  protected readonly noteSaving = signal(false);
  protected readonly noteError = signal<string | null>(null);
  protected readonly noteForm = inject(NonNullableFormBuilder).group({
    /** Session the note belongs to (its progress); null for a general note about the patient. */
    sessionId: [null as number | null],
    text: ['', [Validators.required, Validators.maxLength(this.noteMaxLength), Validators.pattern(/\S/)]],
  });

  /**
   * Sessions the note can belong to: those of the open record that already started and were not cancelled,
   * newest first. Progress is written once a session happened (the backend rejects future ones with 422).
   */
  protected readonly noteSessions = computed(() => {
    if (!this.filtered()) return [];
    const now = Date.now();
    return this.appointments().filter(
      (a) => a.status !== 'CANCELLED' && a.status !== 'LATE_CANCELLED' && Date.parse(a.startTime) <= now,
    );
  });

  /** Notes grouped by session, to show the patient's progress in each session of the table. */
  protected readonly notesBySession = computed(() => {
    const bySession = new Map<number, ClinicalNote[]>();
    for (const note of this.notes()) {
      if (note.sessionId) bySession.set(note.sessionId, [...(bySession.get(note.sessionId) ?? []), note]);
    }
    return bySession;
  });

  constructor() {
    // The Panel and the Agenda link here with ?patient=<full name> to open that patient's record.
    const patient = inject(ActivatedRoute).snapshot.queryParamMap.get('patient')?.trim() ?? '';
    this.patientName = patient;
    this.load(patient);
  }

  /** Clinical history of the patient whose record is open. */
  protected loadNotes(patientId: number): void {
    this.notesLoading.set(true);
    this.notesError.set(null);
    this.notesApi.getForPatient(patientId).subscribe({
      next: (notes) => {
        this.notes.set(notes);
        this.notesLoading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.notesError.set(apiErrorMessage(error) ?? this.translate.instant('errors.load'));
        this.notesLoading.set(false);
      },
    });
  }

  protected saveNote(patientId: number, formDirective: FormGroupDirective): void {
    if (this.noteForm.invalid) {
      this.noteForm.markAllAsTouched();
      return;
    }
    this.noteSaving.set(true);
    this.noteError.set(null);
    const { sessionId, text } = this.noteForm.getRawValue();
    this.notesApi.create(patientId, { sessionId, text: text.trim() }).subscribe({
      next: (note) => {
        this.notes.update((notes) => [note, ...notes]);
        // resetForm also clears the "submitted" state, so the empty field is not shown as an error.
        formDirective.resetForm({ sessionId, text: '' });
        this.noteSaving.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.noteError.set(apiErrorMessage(error) ?? this.translate.instant('errors.load'));
        this.noteSaving.set(false);
      },
    });
  }

  /** By default a note is the progress of the latest session that already started. */
  private defaultNoteSession(): number | null {
    return this.noteSessions()[0]?.sessionId ?? null;
  }

  /** Opens the record of a patient from the full history table. */
  protected openRecord(patientName: string): void {
    this.patientName = patientName;
    this.load(patientName);
  }

  protected search(event: Event): void {
    event.preventDefault();
    this.load(this.patientName.trim());
  }

  protected clear(): void {
    this.patientName = '';
    this.load();
  }

  protected retry(): void {
    this.load(this.activePatientName);
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
    this.api.getForPhysiotherapist(patientName || undefined).subscribe({
      next: (history) => {
        this.appointments.set(
          [...history.appointments].sort((first, second) => Date.parse(second.startTime) - Date.parse(first.startTime)),
        );
        this.notes.set([]);
        this.noteError.set(null);
        this.noteForm.reset({ sessionId: this.defaultNoteSession(), text: '' });
        if (this.filtered() && history.appointments.length > 0) {
          this.loadNotes(history.appointments[0].patientId);
        }
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
