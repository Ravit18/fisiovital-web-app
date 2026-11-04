import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Role } from '../models/authenticated-user.model';
import { AuthService } from '../services/auth.service';

/** Only signed-in users; the rest go to sign-in. */
export const authGuard: CanActivateFn = () =>
  inject(AuthService).isSignedIn() || inject(Router).createUrlTree(['/sign-in']);

/** Only visitors; a signed-in user opening sign-in goes to the home of their group. */
export const guestGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  return !auth.isSignedIn() || inject(Router).parseUrl(auth.homeUrl());
};

/** Only the given role (use after authGuard); anyone else goes to the home of their own group. */
export const roleGuard =
  (role: Role): CanActivateFn =>
  () => {
    const auth = inject(AuthService);
    return auth.currentUser()?.role === role || inject(Router).parseUrl(auth.homeUrl());
  };
