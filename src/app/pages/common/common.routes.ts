import { Routes } from '@angular/router';

/** Pages for both roles: dashboard, notifications (US13) and the AI assistant (US17-US20). */
export const commonRoutes: Routes = [
  { path: 'home', loadComponent: () => import('./dashboard/dashboard').then((m) => m.Dashboard) },
  {
    path: 'notifications',
    loadComponent: () => import('./notifications/notifications').then((m) => m.Notifications),
  },
  { path: 'assistant', loadComponent: () => import('./assistant-chat/assistant-chat').then((m) => m.AssistantChat) },
];
