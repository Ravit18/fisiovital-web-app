import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Role } from '../model/authenticated-user.entity';
import { AuthService } from './auth.service';

/** Only signed-in users; the rest go to sign-in. */
export const authGuard: CanActivateFn = () =>
  inject(AuthService).isSignedIn() || inject(Router).createUrlTree(['/sign-in']);

/** Only visitors; a signed-in user opening sign-in goes home. */
export const guestGuard: CanActivateFn = () =>
  !inject(AuthService).isSignedIn() || inject(Router).createUrlTree(['/home']);

/** Only the given role (use after authGuard); anyone else goes home instead of hitting a 403. */
export const roleGuard =
  (role: Role): CanActivateFn =>
  () =>
    inject(AuthService).currentUser()?.role === role || inject(Router).createUrlTree(['/home']);
