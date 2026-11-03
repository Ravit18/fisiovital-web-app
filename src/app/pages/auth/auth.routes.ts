import { Routes } from '@angular/router';

/** Auth group (US01-US03): /sign-in, /sign-up. Shown inside AuthLayout, only to visitors. */
export const authRoutes: Routes = [
  { path: 'sign-in', loadComponent: () => import('./sign-in/sign-in').then((m) => m.SignIn) },
  { path: 'sign-up', loadComponent: () => import('./sign-up/sign-up').then((m) => m.SignUp) },
];
