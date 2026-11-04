import { Routes } from '@angular/router';
import { PhysiotherapistLayout } from '../../layouts/physiotherapist-layout/physiotherapist-layout';
import { COMMON_ROUTES } from '../common/common.routes';

/** Physiotherapist group (/physiotherapist/...): scheduling (US07), agenda (US08) and patient history (US15-US16). */
export const PHYSIOTHERAPIST_ROUTES: Routes = [
  {
    path: '',
    component: PhysiotherapistLayout,
    children: [
      ...COMMON_ROUTES,
      { path: 'availability', loadComponent: () => import('./publish-slots/publish-slots').then((m) => m.PublishSlots) },
      { path: 'agenda', loadComponent: () => import('./agenda/agenda').then((m) => m.AgendaPage) },
      {
        path: 'patients',
        loadComponent: () => import('./patient-history/patient-history').then((m) => m.PatientHistory),
      },
    ],
  },
];
