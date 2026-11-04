import { Routes } from '@angular/router';
import { guestGuard } from '../../core/guards/auth.guard';
import { AuthLayout } from '../../layouts/auth-layout/auth-layout';

/** Auth group (US01-US03): /sign-in, /sign-up only for visitors; /terms and the 404 page for everyone. */
export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'sign-in',
        canActivate: [guestGuard],
        loadComponent: () => import('./sign-in/sign-in').then((m) => m.SignIn),
      },
      {
        path: 'sign-up',
        canActivate: [guestGuard],
        loadComponent: () => import('./sign-up/sign-up').then((m) => m.SignUp),
      },
      { path: 'terms', loadComponent: () => import('../common/terms/terms').then((m) => m.Terms) },
      { path: '**', loadComponent: () => import('../common/not-found/not-found').then((m) => m.NotFound) },
    ],
  },
];
