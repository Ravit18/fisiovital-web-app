import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

/** Root component: the skip link and the outlet where the router puts the landing or a layout. */
@Component({
  imports: [RouterOutlet, TranslatePipe],
  selector: 'app-root',
  template: `
    <a class="skip-link" href="#main-content">{{ 'layout.skipToContent' | translate }}</a>
    <router-outlet />
  `,
  styles: ':host { display: block; height: 100%; }',
})
export class App {}
