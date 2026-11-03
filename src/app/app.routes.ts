import { Routes } from '@angular/router';
import { authGuard, guestGuard, roleGuard } from './services/auth.guard';

const patient = [authGuard, roleGuard('PATIENT')];
const physiotherapist = [authGuard, roleGuard('PHYSIOTHERAPIST')];

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./components/landing/landing').then((m) => m.Landing),
  },
  {
    path: 'sign-in',
    canActivate: [guestGuard],
    loadComponent: () => import('./components/sign-in/sign-in').then((m) => m.SignIn),
  },
  {
    path: 'sign-up',
    canActivate: [guestGuard],
    loadComponent: () => import('./components/sign-up/sign-up').then((m) => m.SignUp),
  },
  {
    path: 'home',
    canActivate: [authGuard],
    loadComponent: () => import('./components/home/home').then((m) => m.Home),
  },

  // Patient: profiles (US04-US06), treatment (US09-US12), appointments (US14)
  {
    path: 'physiotherapists',
    canActivate: patient,
    loadComponent: () =>
      import('./components/physiotherapist-search/physiotherapist-search').then((m) => m.PhysiotherapistSearch),
  },
  {
    path: 'physiotherapists/:id',
    canActivate: patient,
    loadComponent: () =>
      import('./components/physiotherapist-profile/physiotherapist-profile').then((m) => m.PhysiotherapistProfile),
  },
  {
    path: 'treatment-plans',
    canActivate: patient,
    loadComponent: () => import('./components/treatment-plans/treatment-plans').then((m) => m.TreatmentPlans),
  },
  {
    path: 'appointments',
    canActivate: patient,
    loadComponent: () =>
      import('./components/my-appointments/my-appointments').then((m) => m.MyAppointments),
  },

  // Physiotherapist: scheduling (US07), agenda (US08), history (US15-US16)
  {
    path: 'availability',
    canActivate: physiotherapist,
    loadComponent: () => import('./components/publish-slots/publish-slots').then((m) => m.PublishSlots),
  },
  {
    path: 'agenda',
    canActivate: physiotherapist,
    loadComponent: () => import('./components/agenda/agenda').then((m) => m.AgendaPage),
  },
  {
    path: 'patients',
    canActivate: physiotherapist,
    loadComponent: () =>
      import('./components/patient-history/patient-history').then((m) => m.PatientHistory),
  },

  // Both roles: notifications (US13) and AI assistant (US17-US20)
  {
    path: 'notifications',
    canActivate: [authGuard],
    loadComponent: () => import('./components/notifications/notifications').then((m) => m.Notifications),
  },
  {
    path: 'assistant',
    canActivate: [authGuard],
    loadComponent: () => import('./components/assistant-chat/assistant-chat').then((m) => m.AssistantChat),
  },

  { path: 'terms', loadComponent: () => import('./components/terms/terms').then((m) => m.Terms) },
  { path: '**', loadComponent: () => import('./components/not-found/not-found').then((m) => m.NotFound) },
];
