import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslatePipe } from '@ngx-translate/core';
import { forkJoin, Subscription } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { NotificationsStore } from '../../../core/services/notifications.store';
import { SessionStatusChip } from '../../../core/components/session-status-chip/session-status-chip';
import { apiErrorMessage } from '../../../core/models/api-error.model';
import { LanguageService } from '../../../core/services/language.service';
import { addDays, fromIsoDate, startOfToday, toIsoDate } from '../../../core/dates';
import { AgendaItem } from '../../../core/models/agenda.model';
import { AgendaService } from '../../../core/services/agenda.service';

/** US08: the physiotherapist's full week, with booked sessions and free slots. */
@Component({
  selector: 'app-agenda',
  imports: [
    DatePipe,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    RouterLink,
    TranslatePipe,
    SessionStatusChip,
  ],
  templateUrl: './agenda.html',
  styleUrl: './agenda.scss',
})
export class AgendaPage {
  private readonly api = inject(AgendaService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  protected readonly auth = inject(AuthService);
  protected readonly notifications = inject(NotificationsStore);
  protected readonly language = inject(LanguageService);

  protected readonly today = toIsoDate(startOfToday());
  protected readonly selected = signal(this.initialSelectedDay());
  protected readonly showFree = signal(true);
  protected readonly loading = signal(true);
  protected readonly loadFailed = signal(false);
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly profileMenuOpen = signal(false);
  private readonly weekItems = signal<Record<string, AgendaItem[]>>({});
  private request?: Subscription;

  /** Monday to Sunday of the selected week's calendar week. */
  protected readonly week = computed(() => {
    const day = this.selected();
    const monday = addDays(day, -((day.getDay() + 6) % 7));
    return Array.from({ length: 7 }, (_, i) => addDays(monday, i));
  });
  protected readonly allItems = computed(() =>
    this.week().flatMap((day) => this.weekItems()[this.isoDate(day)] ?? []),
  );
  protected readonly booked = computed(() => this.allItems().filter((item) => item.status === 'BOOKED'));
  protected readonly freeCount = computed(() => this.allItems().length - this.booked().length);

  constructor() {
    this.load();
  }

  private initialSelectedDay(): Date {
    const requestedDate = this.route.snapshot.queryParamMap.get('date');
    if (requestedDate && toIsoDate(fromIsoDate(requestedDate)) === requestedDate) return fromIsoDate(requestedDate);
    return startOfToday();
  }

  protected isoDate(date: Date): string {
    return toIsoDate(date);
  }

  protected moveWeek(direction: 1 | -1): void {
    this.selected.update((date) => addDays(date, 7 * direction));
    this.load();
  }

  protected goToday(): void {
    this.selected.set(startOfToday());
    this.load();
  }

  protected dayItems(date: Date): AgendaItem[] {
    const items = this.weekItems()[this.isoDate(date)] ?? [];
    return this.showFree() ? items : items.filter((item) => item.status === 'BOOKED');
  }

  protected dayIsEmpty(date: Date): boolean {
    return (this.weekItems()[this.isoDate(date)] ?? []).length === 0;
  }

  protected canAddAvailability(date: Date): boolean {
    return this.dayIsEmpty(date) && this.isoDate(date) >= this.today;
  }

  protected dayBooked(date: Date): number {
    return (this.weekItems()[this.isoDate(date)] ?? []).filter((item) => item.status === 'BOOKED').length;
  }

  protected dayFree(date: Date): number {
    return (this.weekItems()[this.isoDate(date)] ?? []).filter((item) => item.status !== 'BOOKED').length;
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

  protected load(): void {
    this.request?.unsubscribe();
    this.loading.set(true);
    this.loadFailed.set(false);
    this.errorMessage.set(null);
    const dates = this.week().map((day) => this.isoDate(day));
    this.request = forkJoin(dates.map((date) => this.api.getForDate(date)))
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (agendas) => {
          this.weekItems.set(Object.fromEntries(agendas.map((agenda, index) => [dates[index], agenda.items])));
          this.loading.set(false);
        },
        error: (error: HttpErrorResponse) => {
          this.weekItems.set({});
          this.errorMessage.set(apiErrorMessage(error));
          this.loadFailed.set(true);
          this.loading.set(false);
        },
      });
  }
}
