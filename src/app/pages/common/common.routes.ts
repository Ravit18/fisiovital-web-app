import { Routes } from '@angular/router';

/** Pages for both roles, mounted inside each group: dashboard, notifications (US13). */
export const COMMON_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadComponent: () => import('./dashboard/dashboard').then((m) => m.Dashboard) },
  {
    path: 'notifications',
    loadComponent: () => import('./notifications/notifications').then((m) => m.Notifications),
  },
];
