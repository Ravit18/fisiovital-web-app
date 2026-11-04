import { Routes } from '@angular/router';
import { authGuard, roleGuard } from './core/guards/auth.guard';

// "/" loads the landing; each group (one layout each) is loaded with loadChildren.
export const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('./home/home').then((m) => m.Home) },
  {
    path: 'patient',
    canActivate: [authGuard, roleGuard('PATIENT')],
    loadChildren: () => import('./pages/patient/patient.routes').then((m) => m.PATIENT_ROUTES),
  },
  {
    path: 'physiotherapist',
    canActivate: [authGuard, roleGuard('PHYSIOTHERAPIST')],
    loadChildren: () =>
      import('./pages/physiotherapist/physiotherapist.routes').then((m) => m.PHYSIOTHERAPIST_ROUTES),
  },
  { path: '', loadChildren: () => import('./pages/auth/auth.routes').then((m) => m.AUTH_ROUTES) },
];
