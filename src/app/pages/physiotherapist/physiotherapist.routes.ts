import { Routes } from '@angular/router';

/** Physiotherapist group: scheduling (US07), agenda (US08) and patient history (US15-US16). */
export const physiotherapistRoutes: Routes = [
  { path: 'availability', loadComponent: () => import('./publish-slots/publish-slots').then((m) => m.PublishSlots) },
  { path: 'agenda', loadComponent: () => import('./agenda/agenda').then((m) => m.AgendaPage) },
  {
    path: 'patients',
    loadComponent: () => import('./patient-history/patient-history').then((m) => m.PatientHistory),
  },
];
