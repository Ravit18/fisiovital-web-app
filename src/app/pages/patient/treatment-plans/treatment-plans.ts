import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { filter, switchMap } from 'rxjs';
import {
  ConfirmDialog,
  ConfirmDialogData,
} from '../../../core/components/confirm-dialog/confirm-dialog';
import { apiErrorMessage } from '../../../core/models/api-error.model';
import { FeedbackService } from '../../../core/services/feedback.service';
import { LanguageService } from '../../../core/services/language.service';
import { EditPlanDialog } from './edit-plan-dialog/edit-plan-dialog';
import { TreatmentPlan } from '../../../core/models/treatment-plan.model';
import { TreatmentPlansService } from '../../../core/services/treatment-plans.service';

/** US09: the patient's treatment plans and their progress; active plans can be edited, empty ones deleted. */
@Component({
  selector: 'app-treatment-plans',
  imports: [
    DatePipe,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    RouterLink,
    TranslatePipe,
  ],
  template: `
    <section class="page" aria-labelledby="plans-title">
      <header class="page__header">
        <h1 id="plans-title">{{ 'treatment.plans.title' | translate }}</h1>
        <p>{{ 'treatment.plans.subtitle' | translate }}</p>
      </header>

      @if (loading()) {
        <mat-progress-bar mode="indeterminate" [attr.aria-label]="'common.loading' | translate" />
      } @else if (errorMessage()) {
        <div class="state" role="alert">
          <p>{{ errorMessage() }}</p>
        </div>
      } @else if (plans().length === 0) {
        <div class="state">
          <mat-icon aria-hidden="true">assignment</mat-icon>
          <p>{{ 'treatment.plans.empty' | translate }}</p>
          <a mat-flat-button routerLink="/patient/physiotherapists">{{
            'profiles.search.title' | translate
          }}</a>
        </div>
      } @else {
        <ul class="list">
          @for (plan of plans(); track plan.id) {
            <li class="item">
              <div class="item__info">
                <p class="item__title">{{ plan.diagnosis }}</p>
                <p>{{ plan.physiotherapistName }}</p>
                <p class="muted">
                  {{
                    'treatment.plan.progress'
                      | translate: { booked: plan.bookedSessions, total: plan.totalSessions }
                  }}
                  ·
                  {{ 'treatment.plan.completed' | translate: { count: plan.completedSessions } }} ·
                  {{ 'treatment.plan.frequency' | translate: { count: plan.frequencyPerWeek } }} ·
                  {{
                    'treatment.plan.since'
                      | translate
                        : {
                            date:
                              (plan.createdAt | date: 'longDate' : undefined : language.current()),
                          }
                  }}
                </p>
              </div>
              <span class="muted">{{ 'treatment.planStatus.' + plan.status | translate }}</span>
              @if (plan.status === 'ACTIVE' && plan.bookedSessions < plan.totalSessions) {
                <a mat-stroked-button [routerLink]="['/patient/physiotherapists', plan.physiotherapistId]">
                  {{ 'treatment.plans.bookMore' | translate }}
                </a>
              }
              @if (plan.status === 'ACTIVE') {
                <button
                  mat-icon-button
                  type="button"
                  (click)="edit(plan)"
                  [attr.aria-label]="'treatment.plan.edit' | translate"
                >
                  <mat-icon aria-hidden="true">edit</mat-icon>
                </button>
              }
              @if (plan.bookedSessions === 0) {
                <button
                  mat-icon-button
                  type="button"
                  (click)="remove(plan)"
                  [attr.aria-label]="'treatment.plan.delete' | translate"
                >
                  <mat-icon aria-hidden="true">delete</mat-icon>
                </button>
              }
            </li>
          }
        </ul>
      }
    </section>
  `,
  styleUrl: '../../../styles/page-host.scss',
})
export class TreatmentPlans {
  private readonly api = inject(TreatmentPlansService);
  private readonly translate = inject(TranslateService);
  private readonly dialog = inject(MatDialog);
  private readonly feedback = inject(FeedbackService);
  protected readonly language = inject(LanguageService);

  protected readonly loading = signal(true);
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly plans = signal<TreatmentPlan[]>([]);

  constructor() {
    this.load();
  }

  protected edit(plan: TreatmentPlan): void {
    this.dialog
      .open<EditPlanDialog, TreatmentPlan, TreatmentPlan>(EditPlanDialog, { data: plan })
      .afterClosed()
      .pipe(filter(Boolean))
      .subscribe((updated) => {
        this.plans.update((plans) => plans.map((p) => (p.id === updated.id ? updated : p)));
        this.feedback.success('treatment.plan.updated');
      });
  }

  protected remove(plan: TreatmentPlan): void {
    this.dialog
      .open<ConfirmDialog, ConfirmDialogData, boolean>(ConfirmDialog, {
        data: {
          title: 'treatment.plan.deleteTitle',
          message: 'treatment.plan.deleteMessage',
          confirm: 'treatment.plan.delete',
        },
      })
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap(() => this.api.delete(plan.id)),
      )
      .subscribe({
        next: () => {
          this.plans.update((plans) => plans.filter((p) => p.id !== plan.id));
          this.feedback.success('treatment.plan.deleted');
        },
        error: (error: HttpErrorResponse) => this.feedback.error(error),
      });
  }

  private load(): void {
    this.api.getMine().subscribe({
      next: (plans) => {
        this.plans.set(plans);
        this.loading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage.set(apiErrorMessage(error) ?? this.translate.instant('errors.load'));
        this.loading.set(false);
      },
    });
  }
}
