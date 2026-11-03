import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/** Layout of the auth group (sign-in, sign-up): full-page forms, no toolbar or menu. */
@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet],
  template: `
    <main id="main-content" tabindex="-1">
      <router-outlet />
    </main>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100%;
    }

    main {
      flex: 1;
      outline: none;
    }
  `,
})
export class AuthLayout {}
