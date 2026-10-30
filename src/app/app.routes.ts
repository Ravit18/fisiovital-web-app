import { Routes } from '@angular/router';
import { authGuard, guestGuard, roleGuard } from './iam/services/auth.guard';

const patient = [authGuard, roleGuard('PATIENT')];
const physiotherapist = [authGuard, roleGuard('PHYSIOTHERAPIST')];

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./shared/pages/landing/landing').then((m) => m.Landing),
  },
  {
    path: 'sign-in',
    canActivate: [guestGuard],
    loadComponent: () => import('./iam/pages/sign-in/sign-in').then((m) => m.SignIn),
  },
  {
    path: 'sign-up',
    canActivate: [guestGuard],
    loadComponent: () => import('./iam/pages/sign-up/sign-up').then((m) => m.SignUp),
  },
  {
    path: 'home',
    canActivate: [authGuard],
    loadComponent: () => import('./shared/pages/home/home').then((m) => m.Home),
  },

  // Patient: profiles (US04-US06), treatment (US09-US12), appointments (US14)
  {
    path: 'physiotherapists',
    canActivate: patient,
    loadComponent: () =>
      import('./profiles/pages/physiotherapist-search/physiotherapist-search').then((m) => m.PhysiotherapistSearch),
  },
  {
    path: 'physiotherapists/:id',
    canActivate: patient,
    loadComponent: () =>
      import('./profiles/pages/physiotherapist-profile/physiotherapist-profile').then((m) => m.PhysiotherapistProfile),
  },
  {
    path: 'treatment-plans',
    canActivate: patient,
    loadComponent: () => import('./treatment/pages/treatment-plans/treatment-plans').then((m) => m.TreatmentPlans),
  },
  {
    path: 'appointments',
    canActivate: patient,
    loadComponent: () =>
      import('./appointments/pages/my-appointments/my-appointments').then((m) => m.MyAppointments),
  },

  // Physiotherapist: scheduling (US07), agenda (US08), history (US15-US16)
  {
    path: 'availability',
    canActivate: physiotherapist,
    loadComponent: () => import('./scheduling/pages/publish-slots/publish-slots').then((m) => m.PublishSlots),
  },
  {
    path: 'agenda',
    canActivate: physiotherapist,
    loadComponent: () => import('./treatment/pages/agenda/agenda').then((m) => m.AgendaPage),
  },
  {
    path: 'patients',
    canActivate: physiotherapist,
    loadComponent: () =>
      import('./appointments/pages/patient-history/patient-history').then((m) => m.PatientHistory),
  },

  // Both roles: notifications (US13) and AI assistant (US17-US20)
  {
    path: 'notifications',
    canActivate: [authGuard],
    loadComponent: () => import('./notifications/pages/notifications/notifications').then((m) => m.Notifications),
  },
  {
    path: 'assistant',
    canActivate: [authGuard],
    loadComponent: () => import('./assistant/pages/assistant-chat/assistant-chat').then((m) => m.AssistantChat),
  },

  { path: 'terms', loadComponent: () => import('./shared/pages/terms/terms').then((m) => m.Terms) },
  { path: '**', loadComponent: () => import('./shared/pages/not-found/not-found').then((m) => m.NotFound) },
];
