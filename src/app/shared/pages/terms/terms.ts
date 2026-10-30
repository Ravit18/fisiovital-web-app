import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-terms',
  imports: [TranslatePipe],
  template: `
    <article class="terms" aria-labelledby="terms-title">
      <h1 id="terms-title">{{ 'terms.title' | translate }}</h1>
      <p>{{ 'terms.updated' | translate }}</p>
      @for (section of sections; track section) {
        <section [attr.aria-labelledby]="'terms-' + section">
          <h2 [id]="'terms-' + section">{{ 'terms.' + section + '.title' | translate }}</h2>
          <p>{{ 'terms.' + section + '.body' | translate }}</p>
        </section>
      }
    </article>
  `,
  styles: `
    .terms {
      max-width: 760px;
      margin: 0 auto;
      padding: 32px 16px;
    }
    h1 {
      font: var(--mat-sys-headline-medium);
    }
    h2 {
      font: var(--mat-sys-title-medium);
      margin-top: 24px;
    }
  `,
})
export class Terms {
  protected readonly sections = ['acceptance', 'service', 'assistant', 'privacy', 'ethics', 'contact'];
}
