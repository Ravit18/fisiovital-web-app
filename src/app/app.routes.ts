import { Routes } from '@angular/router';
import { authGuard, guestGuard, roleGuard } from './services/auth.guard';

// "/" loads the landing; every other page belongs to a group that shares a layout.
// A group with path '' keeps the URLs short (/sign-in, /agenda); the router tries each group in order.
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: '',
    loadComponent: () => import('./layouts/auth-layout/auth-layout').then((m) => m.AuthLayout),
    canActivateChild: [guestGuard],
    loadChildren: () => import('./pages/auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: '',
    loadComponent: () => import('./layouts/main-layout/main-layout').then((m) => m.MainLayout),
    children: [
      {
        path: '',
        canActivateChild: [authGuard, roleGuard('PATIENT')],
        loadChildren: () => import('./pages/patient/patient.routes').then((m) => m.patientRoutes),
      },
      {
        path: '',
        canActivateChild: [authGuard, roleGuard('PHYSIOTHERAPIST')],
        loadChildren: () => import('./pages/physiotherapist/physiotherapist.routes').then((m) => m.physiotherapistRoutes),
      },
      {
        path: '',
        canActivateChild: [authGuard],
        loadChildren: () => import('./pages/common/common.routes').then((m) => m.commonRoutes),
      },
      { path: 'terms', loadComponent: () => import('./pages/common/terms/terms').then((m) => m.Terms) },
      { path: '**', loadComponent: () => import('./pages/common/not-found/not-found').then((m) => m.NotFound) },
    ],
  },
];
