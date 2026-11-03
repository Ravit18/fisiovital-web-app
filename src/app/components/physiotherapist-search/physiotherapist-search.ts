import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';
import { NotificationsStore } from '../../services/notifications.store';
import { apiErrorMessage } from '../../model/api-error';
import { SPECIALTIES, Specialty } from '../../model/session-status';
import { Physiotherapist } from '../../model/physiotherapist.entity';
import { PhysiotherapistsApi } from '../../services/physiotherapists.api';

/** US04: find physiotherapists by specialty. */
@Component({
  selector: 'app-physiotherapist-search',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressBarModule,
    MatSelectModule,
    RouterLink,
    TranslatePipe,
  ],
  template: `
    @if (auth.currentUser(); as user) {
      <section class="search-page" aria-labelledby="search-title">
        <header class="dashboard-header">
          <a class="dashboard-brand" routerLink="/home" [attr.aria-label]="'layout.goHome' | translate">
            <img src="/images/fisiovital-logo.png" alt="" />
            <span>FisioVital</span>
          </a>
          <nav class="dashboard-nav" [attr.aria-label]="'home.navigation' | translate">
            <a class="dashboard-nav__link" routerLink="/home">{{ 'home.navPanel' | translate }}</a>
            <a
              class="dashboard-nav__link dashboard-nav__link--active"
              routerLink="/physiotherapists"
              aria-current="page"
            >
              {{ 'home.navSpecialists' | translate }}
            </a>
            <a class="dashboard-nav__link" routerLink="/appointments">{{ 'home.navSessions' | translate }}</a>
            <a class="dashboard-nav__link" routerLink="/appointments" [queryParams]="{ view: 'history' }">
              {{ 'home.navHistory' | translate }}
            </a>
          </nav>
          <div class="dashboard-actions">
            <a
              class="notification-indicator"
              routerLink="/notifications"
              [attr.aria-label]="'home.notificationsCount' | translate: { count: notifications.unreadCount() }"
            >
              <mat-icon aria-hidden="true">notifications</mat-icon>
              @if (notifications.unreadCount() > 0) {
                <span class="notification-indicator__count" aria-hidden="true">
                  {{ notifications.unreadCount() }}
                </span>
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

        <div class="search-content">
          <header class="page-heading">
            <p class="eyebrow"><span aria-hidden="true"></span>{{ 'profiles.search.eyebrow' | translate }}</p>
            <h1 id="search-title">{{ 'profiles.search.title' | translate }}</h1>
            <p class="page-heading__subtitle">{{ 'profiles.search.subtitle' | translate }}</p>
          </header>

          <section class="filters" [attr.aria-label]="'profiles.search.filters' | translate">
            <mat-form-field appearance="outline">
              <mat-label>{{ 'iam.signUp.specialty' | translate }}</mat-label>
              <mat-select [value]="specialty()" (selectionChange)="search($event.value)">
                <mat-option [value]="null">{{ 'profiles.search.all' | translate }}</mat-option>
                @for (option of specialties; track option) {
                  <mat-option [value]="option">{{ 'specialties.' + option | translate }}</mat-option>
                }
              </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>{{ 'profiles.search.sort' | translate }}</mat-label>
              <mat-select [value]="sortOrder()" (selectionChange)="sortOrder.set($event.value)">
                <mat-option value="desc">{{ 'profiles.search.experienceHighToLow' | translate }}</mat-option>
                <mat-option value="asc">{{ 'profiles.search.experienceLowToHigh' | translate }}</mat-option>
              </mat-select>
            </mat-form-field>
          </section>

          @if (loading()) {
            <mat-progress-bar mode="indeterminate" [attr.aria-label]="'common.loading' | translate" />
          } @else if (errorMessage()) {
            <div class="empty-state" role="alert">
              <mat-icon aria-hidden="true">error_outline</mat-icon>
              <h2>{{ 'profiles.search.loadErrorTitle' | translate }}</h2>
              <p>{{ errorMessage() }}</p>
              <button mat-stroked-button type="button" (click)="search(specialty())">
                {{ 'common.retry' | translate }}
              </button>
            </div>
          } @else if (visibleResults().length === 0) {
            <div class="empty-state" role="status">
              <span class="empty-state__icon"><mat-icon aria-hidden="true">person_search</mat-icon></span>
              <h2>{{ 'profiles.search.emptyTitle' | translate }}</h2>
              <p>{{ 'profiles.search.emptyMessage' | translate }}</p>
            </div>
          } @else {
            <section class="results" [attr.aria-label]="'profiles.search.results' | translate">
              <div class="results__heading">
                <h2>{{ 'profiles.search.results' | translate }}</h2>
                <span>{{ visibleResults().length }}</span>
              </div>
              <ul class="specialist-list">
                @for (physio of visibleResults(); track physio.id) {
                  <li class="specialist-card">
                    <div class="specialist-card__avatar" aria-hidden="true">{{ initials(physio.fullName) }}</div>
                    <div class="specialist-card__info">
                      <h3>{{ physio.fullName }}</h3>
                      <p class="specialist-card__specialty">
                        {{ 'specialties.' + physio.specialty | translate }}
                      </p>
                      <p class="specialist-card__experience">
                        <mat-icon aria-hidden="true">workspace_premium</mat-icon>
                        {{ 'profiles.years' | translate: { years: physio.yearsOfExperience } }}
                      </p>
                      <span class="availability-badge">
                        <span aria-hidden="true"></span>{{ 'profiles.availability' | translate }}
                      </span>
                    </div>
                    <a class="profile-link" [routerLink]="['/physiotherapists', physio.id]">
                      {{ 'profiles.search.viewProfile' | translate }}
                      <mat-icon aria-hidden="true">arrow_forward</mat-icon>
                    </a>
                  </li>
                }
              </ul>
            </section>
          }
        </div>
      </section>
    }
  `,
  styleUrl: './physiotherapist-search.scss',
})
export class PhysiotherapistSearch {
  private readonly api = inject(PhysiotherapistsApi);
  private readonly translate = inject(TranslateService);
  private readonly router = inject(Router);
  protected readonly auth = inject(AuthService);
  protected readonly notifications = inject(NotificationsStore);

  protected readonly specialties = SPECIALTIES;
  protected readonly specialty = signal<Specialty | null>(null);
  protected readonly sortOrder = signal<'asc' | 'desc'>('desc');
  protected readonly profileMenuOpen = signal(false);
  protected readonly loading = signal(true);
  protected readonly results = signal<Physiotherapist[]>([]);
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly visibleResults = computed(() =>
    this.results()
      .filter((physiotherapist) => physiotherapist.hasAvailability)
      .sort((first, second) =>
        this.sortOrder() === 'desc'
          ? second.yearsOfExperience - first.yearsOfExperience
          : first.yearsOfExperience - second.yearsOfExperience,
      ),
  );

  constructor() {
    this.search(null);
  }

  protected search(specialty: Specialty | null): void {
    this.specialty.set(specialty);
    this.loading.set(true);
    this.api.search(specialty).subscribe({
      next: (result) => {
        this.results.set(result.items);
        this.errorMessage.set(null);
        this.loading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.results.set([]);
        this.errorMessage.set(apiErrorMessage(error) ?? this.translate.instant('errors.load'));
        this.loading.set(false);
      },
    });
  }

  protected initials(name: string): string {
    return name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0] ?? '')
      .join('')
      .toUpperCase();
  }

  protected signOut(): void {
    this.auth.signOut();
    this.notifications.clear();
    this.router.navigate(['/sign-in']);
  }
}
