import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, computed, inject, input, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { apiErrorMessage } from '../../../../core/models/api-error.model';
import { LanguageService } from '../../../../core/services/language.service';
import { addDays, fromIsoDate, groupByDay, startOfToday, toIsoDate } from '../../../../core/dates';
import { Availability, Slot } from '../../../../core/models/slot.model';
import { SlotsService } from '../../../../core/services/slots.service';

/** US06: a physiotherapist's free slots week by week; emits the slot the user picks. */
@Component({
  selector: 'app-slot-picker',
  imports: [DatePipe, MatButtonModule, MatIconModule, MatProgressBarModule, TranslatePipe],
  template: `
    <div class="picker">
      <div class="picker__week" aria-live="polite">
        <span>
          {{ 'agenda.week' | translate }} {{ from() | date: 'd' : undefined : language.current() }}–{{
            to() | date: 'd MMM y' : undefined : language.current()
          }}
        </span>
        <div class="picker__week-controls">
          <button
            mat-icon-button
            type="button"
            (click)="moveWeek(-1)"
            [disabled]="!canGoBack()"
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

      @if (loading()) {
        <mat-progress-bar mode="indeterminate" [attr.aria-label]="'common.loading' | translate" />
      } @else if (errorMessage()) {
        <p class="picker__message" role="alert">{{ errorMessage() }}</p>
      } @else {
        @if (availability()?.message) {
          <p class="picker__message" role="status">{{ availability()?.message }}</p>
        }
        @if (days().length > 0) {
          <div class="picker__days">
            @for (group of days(); track group.day) {
              <section class="picker__day">
                <h3>{{ group.day | date: 'EEE d' : undefined : language.current() }}</h3>
                <div
                  class="picker__slots"
                  role="group"
                  [attr.aria-label]="group.day | date: 'fullDate' : undefined : language.current()"
                >
                  @for (slot of group.items; track slot.id) {
                    <button
                      class="picker__slot"
                      mat-stroked-button
                      type="button"
                      [class.picker__slot--selected]="slot.id === selectedSlotId()"
                      [attr.aria-pressed]="slot.id === selectedSlotId()"
                      [disabled]="!selectable() || busy()"
                      (click)="picked.emit(slot)"
                    >
                      {{ slot.startTime | date: 'shortTime' : undefined : language.current() }}
                    </button>
                  }
                </div>
              </section>
            }
          </div>
        } @else if (!availability()?.message) {
          <p class="picker__message" role="status">{{ 'profiles.noSlots' | translate }}</p>
        }
      }
    </div>
  `,
  styles: `
    .picker {
      min-width: 0;
    }
    .picker__week {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 12px;
      color: var(--fv-color-text-muted);
      font-size: 13px;
    }
    .picker__week-controls {
      display: flex;
      flex: 0 0 auto;
      align-items: center;
      gap: 0;
    }
    .picker__days {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
      gap: 10px;
    }
    .picker__message {
      color: var(--mat-sys-on-surface-variant);
    }
    .picker__day {
      min-width: 0;
    }
    .picker__day h3 {
      margin: 0 0 8px;
      color: var(--fv-color-text);
      font: var(--mat-sys-title-small);
      text-transform: capitalize;
    }
    .picker__slots {
      display: flex;
      flex-direction: column;
      gap: 7px;
    }
    .picker__slot {
      width: 100%;
      min-height: 36px;
      border-color: #cbd8c5;
      color: var(--fv-color-text);
      font-size: 12px;
    }
    .picker__slot--selected {
      border-color: var(--fv-color-accent) !important;
      background: var(--fv-color-accent) !important;
      color: var(--fv-color-forest) !important;
      font-weight: 700;
    }
    @media (max-width: 420px) {
      .picker__days {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
  `,
})
export class SlotPicker implements OnInit {
  private readonly api = inject(SlotsService);
  private readonly translate = inject(TranslateService);
  protected readonly language = inject(LanguageService);

  readonly physiotherapistId = input.required<number>();
  /** False shows the slots without letting the user pick (e.g. no treatment plan yet). */
  readonly selectable = input(true);
  /** True while the parent is saving the picked slot. */
  readonly busy = input(false);
  readonly selectedSlotId = input<number | null>(null);
  readonly picked = output<Slot>();

  protected readonly from = signal(startOfToday());
  protected readonly to = computed(() => addDays(this.from(), 6));
  protected readonly loading = signal(true);
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly availability = signal<Availability | null>(null);
  protected readonly days = computed(() => groupByDay(this.availability()?.slots ?? [], (slot) => slot.startTime));
  protected readonly canGoBack = computed(() => this.from().getTime() > startOfToday().getTime());

  ngOnInit(): void {
    this.reload();
  }

  /** Loads the current week again, e.g. after a slot was booked. */
  reload(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getFree(this.physiotherapistId(), toIsoDate(this.from()), toIsoDate(this.to())).subscribe({
      next: (availability) => {
        // The backend may answer with a later week when this one is empty (US06).
        if (availability.nextAvailableWeek) this.from.set(fromIsoDate(availability.nextAvailableWeek));
        this.availability.set(availability);
        this.loading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage.set(apiErrorMessage(error) ?? this.translate.instant('errors.load'));
        this.loading.set(false);
      },
    });
  }

  protected moveWeek(direction: 1 | -1): void {
    const next = addDays(this.from(), 7 * direction);
    this.from.set(next < startOfToday() ? startOfToday() : next);
    this.reload();
  }
}
