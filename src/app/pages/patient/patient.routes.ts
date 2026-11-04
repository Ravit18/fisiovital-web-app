import { Routes } from '@angular/router';
import { PatientLayout } from '../../layouts/patient-layout/patient-layout';
import { COMMON_ROUTES } from '../common/common.routes';

/** Patient group (/patient/...): profiles (US04-US06), treatment (US09-US12) and appointments (US14). */
export const PATIENT_ROUTES: Routes = [
  {
    path: '',
    component: PatientLayout,
    children: [
      ...COMMON_ROUTES,
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
    ],
  },
];
