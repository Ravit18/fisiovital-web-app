import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SessionStatus } from '../../model/session-status';

/** Colored label for a session state; the text carries the meaning, the color only reinforces it. */
@Component({
  selector: 'app-session-status-chip',
  imports: [TranslatePipe],
  template: `<span class="chip" [class]="'chip chip--' + status().toLowerCase()">{{
    'sessionStatus.' + status() | translate
  }}</span>`,
  styles: `
    .chip {
      display: inline-flex;
      align-items: center;
      padding: 2px 10px;
      border-radius: 999px;
      font: var(--mat-sys-label-medium);
      white-space: nowrap;
    }
    .chip--reserved {
      background: var(--mat-sys-primary-container);
      color: var(--mat-sys-on-primary-container);
    }
    .chip--completed {
      background: var(--mat-sys-tertiary-container);
      color: var(--mat-sys-on-tertiary-container);
    }
    .chip--cancelled,
    .chip--late_cancelled {
      background: var(--mat-sys-error-container);
      color: var(--mat-sys-on-error-container);
    }
  `,
})
export class SessionStatusChip {
  readonly status = input.required<SessionStatus>();
}
