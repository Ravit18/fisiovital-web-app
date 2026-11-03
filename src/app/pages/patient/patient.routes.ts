import { Routes } from '@angular/router';

/** Patient group: profiles (US04-US06), treatment (US09-US12) and appointments (US14). */
export const patientRoutes: Routes = [
  {
    path: 'physiotherapists',
    loadComponent: () =>
      import('./physiotherapist-search/physiotherapist-search').then((m) => m.PhysiotherapistSearch),
  },
  {
    path: 'physiotherapists/:id',
    loadComponent: () =>
      import('./physiotherapist-profile/physiotherapist-profile').then((m) => m.PhysiotherapistProfile),
  },
  {
    path: 'treatment-plans',
    loadComponent: () => import('./treatment-plans/treatment-plans').then((m) => m.TreatmentPlans),
  },
  {
    path: 'appointments',
    loadComponent: () => import('./my-appointments/my-appointments').then((m) => m.MyAppointments),
  },
];
