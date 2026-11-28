import { Routes } from '@angular/router';

/** Pages for both roles, mounted inside each group: dashboard, AI assistant (US17-US20), notifications (US13). */
export const COMMON_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadComponent: () => import('./dashboard/dashboard').then((m) => m.Dashboard) },
  { path: 'assistant', loadComponent: () => import('./assistant/assistant').then((m) => m.Assistant) },
  { path: 'assistant/:id', loadComponent: () => import('./assistant/assistant').then((m) => m.Assistant) },
  {
    path: 'notifications',
    loadComponent: () => import('./notifications/notifications').then((m) => m.Notifications),
  },
];
