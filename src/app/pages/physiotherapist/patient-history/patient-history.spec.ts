import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { AuthenticatedUser } from '../../../model/authenticated-user.entity';
import { PatientHistory } from './patient-history';

const historyUrl = `${environment.apiBaseUrl}/appointments/physiotherapist/me`;
const physiotherapist: AuthenticatedUser = {
  userId: 2,
  profileId: 2,
  email: 'physio@example.com',
  role: 'PHYSIOTHERAPIST',
  fullName: 'Mariana Rojas',
  token: 'test-token',
};

describe('PatientHistory (US15/US16)', () => {
  let http: HttpTestingController;

  beforeEach(() => {
    localStorage.setItem('fisiovital.session', JSON.stringify(physiotherapist));
    TestBed.configureTestingModule({
      imports: [PatientHistory],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([]), provideTranslateService()],
    });
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
    localStorage.clear();
  });

  it('loads every appointment and lets the physiotherapist search by patient', async () => {
    const fixture = TestBed.createComponent(PatientHistory);
    fixture.detectChanges();
    const all = http.expectOne((req) => req.url === historyUrl);
    expect(all.request.params.has('patientName')).toBe(false);
    all.flush({ appointments: [], message: null });
    await fixture.whenStable();
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('.dashboard-nav a[href="/agenda"]')).toBeTruthy();
    expect(element.querySelector('.dashboard-nav a[aria-current="page"]')?.getAttribute('href')).toBe('/patients');
    (element.querySelector('.history-action') as HTMLButtonElement).click();
    fixture.detectChanges();

    const input = element.querySelector('input') as HTMLInputElement;
    input.value = 'Pedro Ruiz';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await fixture.whenStable();
    fixture.detectChanges();
    (element.querySelector('button[type="submit"]') as HTMLButtonElement).click();
    fixture.detectChanges();

    const filtered = http.expectOne((req) => req.url === historyUrl);
    expect(filtered.request.params.get('patientName')).toBe('Pedro Ruiz');
    filtered.flush({ appointments: [], message: 'No se encontró al paciente' });
    await fixture.whenStable();

    expect(element.textContent).toContain('No se encontró al paciente');
  });

  it('renders real appointments newest first with their session and status', async () => {
    const fixture = TestBed.createComponent(PatientHistory);
    fixture.detectChanges();
    http.expectOne((req) => req.url === historyUrl).flush({
      appointments: [
        {
          sessionId: 11,
          sessionNumber: 2,
          totalSessions: 12,
          status: 'COMPLETED',
          startTime: '2026-10-15T16:00:00',
          endTime: '2026-10-15T17:00:00',
          patientId: 5,
          patientName: 'Carlos Mendoza',
          physiotherapistId: 2,
          physiotherapistName: 'Mariana Rojas',
          specialty: 'DEPORTIVA',
          diagnosis: 'Lesión muscular',
        },
        {
          sessionId: 12,
          sessionNumber: 3,
          totalSessions: 12,
          status: 'RESERVED',
          startTime: '2026-10-19T08:00:00',
          endTime: '2026-10-19T09:00:00',
          patientId: 5,
          patientName: 'Carlos Mendoza',
          physiotherapistId: 2,
          physiotherapistName: 'Mariana Rojas',
          specialty: 'DEPORTIVA',
          diagnosis: 'Lesión muscular',
        },
      ],
      message: null,
    });
    await fixture.whenStable();
    fixture.detectChanges();

    const rows = (fixture.nativeElement as HTMLElement).querySelectorAll('tbody tr');
    expect(rows).toHaveLength(2);
    expect(rows[0].textContent).toContain('19/10/2026');
    expect(rows[0].textContent).toContain('Carlos Mendoza');
    expect(rows[0].textContent).toContain('appointments.session');
    expect(rows[1].textContent).toContain('15/10/2026');
    expect((fixture.nativeElement as HTMLElement).querySelector('.history-table')).toBeTruthy();
  });
});
