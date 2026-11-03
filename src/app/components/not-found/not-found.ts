import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-not-found',
  imports: [MatButtonModule, RouterLink, TranslatePipe],
  template: `
    <section class="not-found" aria-labelledby="not-found-title">
      <h1 id="not-found-title">{{ 'notFound.title' | translate }}</h1>
      <p>{{ 'notFound.message' | translate }}</p>
      <a mat-flat-button routerLink="/home">{{ 'layout.goHome' | translate }}</a>
    </section>
  `,
  styles: `
    .not-found {
      padding: 64px 16px;
      text-align: center;
    }
  `,
})
export class NotFound {}
