import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';
import { NotificationsStore } from '../../services/notifications.store';
import { apiErrorMessage } from '../../model/api-error';
import { FeedbackService } from '../../services/feedback.service';
import { LanguageService } from '../../services/language.service';

type NotificationFilter = 'all' | 'unread';

const ICONS = { SESSION_REMINDER: 'alarm', SESSION_RESCHEDULED: 'event_repeat', SESSION_CANCELLED: 'event_busy' };

/** US13: reminders (24 h before) and changes to the user's sessions. */
@Component({
  selector: 'app-notifications',
  imports: [MatButtonModule, MatIconModule, MatProgressBarModule, RouterLink, TranslatePipe],
  template: `
    @if (auth.currentUser(); as user) {
      <section class="notifications-page" aria-labelledby="notifications-title">
        <header class="dashboard-header">
          <a class="dashboard-brand" routerLink="/home" [attr.aria-label]="'layout.goHome' | translate">
            <img src="/images/fisiovital-logo.png" alt="" />
            <span>FisioVital</span>
          </a>
          <nav class="dashboard-nav" [attr.aria-label]="'home.navigation' | translate">
            @if (user.role === 'PHYSIOTHERAPIST') {
              <a class="dashboard-nav__link" routerLink="/home">{{ 'home.physio.panelNav' | translate }}</a>
              <a class="dashboard-nav__link" routerLink="/agenda">{{ 'home.physio.agendaNav' | translate }}</a>
              <a class="dashboard-nav__link" routerLink="/availability">
                {{ 'home.physio.availabilityNav' | translate }}
              </a>
              <a class="dashboard-nav__link" routerLink="/patients">{{ 'home.physio.historyNav' | translate }}</a>
            } @else {
              <a class="dashboard-nav__link" routerLink="/home">{{ 'home.navPanel' | translate }}</a>
              <a class="dashboard-nav__link" routerLink="/physiotherapists">
                {{ 'home.navSpecialists' | translate }}
              </a>
              <a class="dashboard-nav__link" routerLink="/appointments">{{ 'home.navSessions' | translate }}</a>
              <a
                class="dashboard-nav__link"
                routerLink="/appointments"
                [queryParams]="{ view: 'history' }"
              >
                {{ 'home.navHistory' | translate }}
              </a>
            }
          </nav>
          <div class="dashboard-actions">
            <a
              class="notification-indicator notification-indicator--active"
              routerLink="/notifications"
              aria-current="page"
              [attr.aria-label]="'home.notificationsCount' | translate: { count: store.unreadCount() }"
            >
              <mat-icon aria-hidden="true">notifications</mat-icon>
              @if (store.unreadCount() > 0) {
                <span class="notification-indicator__count" aria-hidden="true">{{ store.unreadCount() }}</span>
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

        <div class="notifications-content">
          <header class="page-heading">
            <p class="notifications-eyebrow physio-eyebrow">
              <span aria-hidden="true"></span>{{ 'notifications.eyebrow' | translate }}
            </p>
            <h1 id="notifications-title">
              {{ 'notifications.titlePrefix' | translate }}
              <span>{{ 'notifications.titleAccent' | translate }}</span>
            </h1>
          </header>

          <div class="filters" role="group" [attr.aria-label]="'notifications.filters' | translate">
            <button
              type="button"
              class="filter-button"
              [class.filter-button--active]="filter() === 'all'"
              [attr.aria-pressed]="filter() === 'all'"
              (click)="filter.set('all')"
            >
              {{ 'notifications.all' | translate }}
            </button>
            <button
              type="button"
              class="filter-button"
              [class.filter-button--active]="filter() === 'unread'"
              [attr.aria-pressed]="filter() === 'unread'"
              (click)="filter.set('unread')"
            >
              {{ 'notifications.unread' | translate }}
              @if (store.unreadCount() > 0) {
                <span class="filter-button__count">{{ store.unreadCount() }}</span>
              }
            </button>
          </div>

          @if (loading()) {
            <mat-progress-bar mode="indeterminate" [attr.aria-label]="'common.loading' | translate" />
          } @else if (errorMessage()) {
            <div class="state" role="alert">
              <mat-icon aria-hidden="true">cloud_off</mat-icon>
              <p>{{ errorMessage() }}</p>
              <button mat-stroked-button type="button" (click)="load()">{{ 'common.retry' | translate }}</button>
            </div>
          } @else if (visibleNotifications().length === 0) {
            <div class="state">
              <mat-icon aria-hidden="true">notifications_none</mat-icon>
              <p>{{ (filter() === 'unread' ? 'notifications.emptyUnread' : 'notifications.empty') | translate }}</p>
            </div>
          } @else {
            <ul class="notification-list">
              @for (notification of visibleNotifications(); track notification.id) {
                <li class="notification-card" [class.notification-card--unread]="!notification.read">
                  <div class="notification-card__content">
                    <mat-icon class="notification-card__icon" aria-hidden="true">
                      {{ icons[notification.type] }}
                    </mat-icon>
                    <div class="notification-card__text">
                      <h2>{{ 'notifications.types.' + notification.type | translate }}</h2>
                      <p>{{ notification.message }}</p>
                    </div>
                    @if (!notification.read) {
                      <button
                        class="notification-card__mark-read"
                        mat-button
                        type="button"
                        (click)="markAsRead(notification.id)"
                      >
                        {{ 'notifications.markRead' | translate }}
                      </button>
                    }
                  </div>
                  <time class="notification-card__time" [attr.datetime]="notification.createdAt">
                    {{ relativeTime(notification.createdAt) }}
                  </time>
                </li>
              }
            </ul>
          }
        </div>
      </section>
    }
  `,
  styleUrl: './notifications.scss',
})
export class Notifications {
  protected readonly auth = inject(AuthService);
  protected readonly store = inject(NotificationsStore);
  private readonly feedback = inject(FeedbackService);
  private readonly translate = inject(TranslateService);
  private readonly router = inject(Router);
  protected readonly language = inject(LanguageService);
  protected readonly icons = ICONS;
  protected readonly profileMenuOpen = signal(false);
  protected readonly filter = signal<NotificationFilter>('all');
  protected readonly loading = signal(true);
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly visibleNotifications = computed(() =>
    this.store.notifications().filter((notification) => this.filter() === 'all' || !notification.read),
  );

  constructor() {
    this.load();
  }

  protected load(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.store.load().subscribe({
      next: () => this.loading.set(false),
      error: (error: HttpErrorResponse) => {
        this.errorMessage.set(apiErrorMessage(error) ?? this.translate.instant('errors.load'));
        this.loading.set(false);
      },
    });
  }

  protected markAsRead(id: number): void {
    this.store.markAsRead(id).subscribe({ error: (error: HttpErrorResponse) => this.feedback.error(error) });
  }

  protected initials(fullName: string): string {
    return fullName
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toLocaleUpperCase() ?? '')
      .join('');
  }

  protected relativeTime(value: string): string {
    const elapsedSeconds = Math.round((Date.parse(value) - Date.now()) / 1000);
    const units: [Intl.RelativeTimeFormatUnit, number][] = [
      ['year', 60 * 60 * 24 * 365],
      ['month', 60 * 60 * 24 * 30],
      ['week', 60 * 60 * 24 * 7],
      ['day', 60 * 60 * 24],
      ['hour', 60 * 60],
      ['minute', 60],
    ];
    const [unit, seconds] = units.find(([, duration]) => Math.abs(elapsedSeconds) >= duration) ?? ['second', 1];
    return new Intl.RelativeTimeFormat(this.language.current(), { numeric: 'auto' }).format(
      Math.round(elapsedSeconds / seconds),
      unit,
    );
  }

  protected signOut(): void {
    this.auth.signOut();
    this.store.clear();
    this.router.navigate(['/sign-in']);
  }
}
