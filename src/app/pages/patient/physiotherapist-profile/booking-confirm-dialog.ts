import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../core/services/language.service';

export interface BookingConfirmDialogData {
  physiotherapistName: string;
  slots: Array<{ id: number; startTime: string; endTime: string }>;
  creatingPlan: boolean;
  editingPlan?: boolean;
  diagnosis?: string;
  totalSessions?: number;
  frequencyPerWeek?: number;
}

@Component({
  selector: 'app-booking-confirm-dialog',
  imports: [DatePipe, MatButtonModule, MatDialogModule, TranslatePipe],
  template: `
    <h2 mat-dialog-title>{{ 'treatment.book.title' | translate }}</h2>
    <mat-dialog-content>
      <p class="booking-confirm__intro">
        {{
          (data.creatingPlan
            ? 'treatment.book.newPlanPrompt'
            : data.editingPlan
              ? 'treatment.book.updatePlanPrompt'
              : 'treatment.book.multiplePrompt')
            | translate: { count: data.slots.length, name: data.physiotherapistName }
        }}
      </p>
      @if (data.creatingPlan || data.editingPlan) {
        <section class="booking-confirm__plan" aria-labelledby="booking-plan-title">
          <h3 id="booking-plan-title">
            {{ (data.creatingPlan ? 'treatment.book.planSummary' : 'treatment.book.updatedPlanSummary') | translate }}
          </h3>
          <p class="booking-confirm__diagnosis">{{ data.diagnosis }}</p>
          <p>
            {{ 'treatment.plan.totalSessions' | translate }}:
            {{ data.totalSessions }}
          </p>
          <p>
            {{ 'treatment.plan.frequencyPerWeek' | translate }}:
            {{ data.frequencyPerWeek }}
          </p>
        </section>
      }
      <h3 class="booking-confirm__slots-title">{{ 'treatment.book.selectedSlots' | translate }}</h3>
      <ul class="booking-confirm__slots">
        @for (slot of data.slots; track slot.id) {
          <li>
            <time [attr.datetime]="slot.startTime">
              {{ slot.startTime | date: 'fullDate' : undefined : language() }}
            </time>
            <span>
              {{ slot.startTime | date: 'shortTime' : undefined : language() }} –
              {{ slot.endTime | date: 'shortTime' : undefined : language() }}
            </span>
          </li>
        }
      </ul>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button class="booking-confirm__cancel" mat-button type="button" [mat-dialog-close]="false">
        {{ 'common.back' | translate }}
      </button>
      <button class="booking-confirm__submit" mat-flat-button type="button" [mat-dialog-close]="true" cdkFocusInitial>
        {{
          (data.creatingPlan
            ? 'profiles.plan.createAndReserveCount'
            : data.editingPlan
              ? 'profiles.plan.updateAndReserveCount'
              : 'profiles.plan.reserveCount')
            | translate: { count: data.slots.length }
        }}
      </button>
    </mat-dialog-actions>
  `,
  styles: `
    .booking-confirm__intro {
      margin: 0 0 16px;
      color: var(--fv-color-text);
    }

    .booking-confirm__plan {
      margin-bottom: 18px;
      border-radius: 12px;
      padding: 14px;
      background: var(--fv-color-background-soft);
    }

    .booking-confirm__plan h3,
    .booking-confirm__slots-title {
      margin: 0 0 8px;
      color: var(--fv-color-forest);
      font-size: 15px;
    }

    .booking-confirm__plan p {
      margin: 5px 0 0;
      color: var(--fv-color-text-muted);
    }

    .booking-confirm__plan .booking-confirm__diagnosis {
      color: var(--fv-color-text);
      font-weight: 700;
    }

    .booking-confirm__slots {
      display: grid;
      max-height: 240px;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      gap: 8px;
      overflow-y: auto;
      margin: 0;
      padding: 0 2px 2px 0;
      list-style: none;
    }

    .booking-confirm__slots li {
      display: grid;
      gap: 4px;
      border: 1px solid var(--fv-color-border-strong);
      border-radius: 12px;
      padding: 10px 12px;
      background: var(--fv-color-primary-soft);
      color: var(--fv-color-text);
    }

    .booking-confirm__slots time {
      color: var(--fv-color-forest);
      font-size: 13px;
      font-weight: 700;
    }

    .booking-confirm__slots span {
      font-size: 13px;
    }

    .booking-confirm__cancel {
      color: var(--fv-color-primary) !important;
    }

    .booking-confirm__submit {
      background: var(--fv-color-accent) !important;
      color: var(--fv-color-forest) !important;
    }
  `,
})
export class BookingConfirmDialog {
  protected readonly data = inject<BookingConfirmDialogData>(MAT_DIALOG_DATA);
  protected readonly language = inject(LanguageService).current;
}
