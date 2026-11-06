import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { AppointmentHistory } from '../../../core/models/appointment.model';
import { AuthenticatedUser } from '../../../core/models/authenticated-user.model';
import { AgendaItem } from '../../../core/models/agenda.model';
import { Dashboard } from './dashboard';

const patient: AuthenticatedUser = {
  userId: 1,
  profileId: 1,
  email: 'patient@example.com',
  role: 'PATIENT',
  fullName: 'Andrea Perez',
  token: 'test-token',
};

const physiotherapist: AuthenticatedUser = {
  userId: 2,
  profileId: 2,
  email: 'physio@example.com',
  role: 'PHYSIOTHERAPIST',
  fullName: 'Mariana Rojas',
  token: 'test-token',
};

describe('Dashboard', () => {
  let http: HttpTestingController;

  beforeEach(() => {
    localStorage.setItem('fisiovital.session', JSON.stringify(patient));
    TestBed.configureTestingModule({
      imports: [Dashboard],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([]), provideTranslateService()],
    });
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
    localStorage.clear();
  });

  it('shows empty states when the patient has no plans or notifications', async () => {
    const fixture = TestBed.createComponent(Dashboard);
    fixture.detectChanges();

    http.expectOne(`${environment.apiBaseUrl}/treatment-plans/me`).flush([]);
    http.expectOne(`${environment.apiBaseUrl}/appointments/me?page=0&size=100`).flush({
      appointments: [],
      message: null,
      page: 0,
      size: 100,
      totalElements: 0,
      totalPages: 0,
    } satisfies AppointmentHistory);
    http.expectOne(`${environment.apiBaseUrl}/notifications`).flush([]);
    await fixture.whenStable();
    fixture.detectChanges();

    const content = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(content).toContain('home.noActivePlan');
    expect(content).toContain('home.noNotifications');
    expect(content).toContain('home.noUpcomingSessionMessage');
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.dashboard-brand img')?.getAttribute('src')).toBe('/images/fisiovital-logo.png');
    expect(compiled.querySelector('[aria-current="page"]')?.getAttribute('href')).toBe('/patient/home');
    expect(compiled.querySelector('a[href="/patient/physiotherapists"]')?.textContent).toContain('home.navSpecialists');
    expect(compiled.querySelector('a[href="/patient/appointments"]')?.textContent).toContain('home.navSessions');
    expect(compiled.querySelector('a[href="/patient/appointments?view=history"]')?.textContent).toContain('home.navHistory');
    expect(compiled.querySelector('a[href="/specialists"]')).toBeNull();
    const assistantButton = compiled.querySelector<HTMLAnchorElement>('.assistant-button');
    expect(assistantButton?.getAttribute('href')).toBe('/patient/assistant');
    expect(assistantButton?.textContent).toContain('home.assistantButton');
  });

  it('loads real plan progress and selects the nearest upcoming session', async () => {
    const fixture = TestBed.createComponent(Dashboard);
    fixture.detectChanges();

    http.expectOne(`${environment.apiBaseUrl}/treatment-plans/me`).flush([
      {
        id: 42,
        patientId: 1,
        patientName: patient.fullName,
        physiotherapistId: 2,
        physiotherapistName: 'Mariana Rojas',
        diagnosis: 'Lesión de rodilla',
        totalSessions: 8,
        frequencyPerWeek: 2,
        status: 'ACTIVE',
        createdAt: '2026-10-01T10:00:00',
        bookedSessions: 2,
        completedSessions: 1,
      },
    ]);
    http.expectOne(`${environment.apiBaseUrl}/notifications`).flush([
      { id: 5, type: 'REMINDER', message: 'Recordatorio real', read: false, createdAt: '2026-10-24T10:00:00' },
    ]);
    http.expectOne(`${environment.apiBaseUrl}/appointments/me?page=0&size=100`).flush({
      appointments: [
        {
          sessionId: 7,
          sessionNumber: 2,
          totalSessions: 8,
          status: 'RESERVED',
          startTime: '2026-10-28T16:00:00',
          endTime: '2026-10-28T17:00:00',
          patientId: 1,
          patientName: patient.fullName,
          physiotherapistId: 2,
          physiotherapistName: 'Mariana Rojas',
          specialty: 'DEPORTIVA',
          diagnosis: 'Lesión de rodilla',
        },
      ],
      message: null,
      page: 0,
      size: 100,
      totalElements: 1,
      totalPages: 1,
    });
    await fixture.whenStable();
    fixture.detectChanges();

    const content = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(content).toContain('Lesión de rodilla');
    expect(content).toContain('Mariana Rojas');
    expect(content).toContain('Recordatorio real');
    expect(content).toContain('13%');
  });

  it('loads the physiotherapist daily agenda and cancellation alerts', async () => {
    localStorage.setItem('fisiovital.session', JSON.stringify(physiotherapist));
    const fixture = TestBed.createComponent(Dashboard);
    fixture.detectChanges();

    const agendaRequest = http.expectOne((request) =>
      request.url === `${environment.apiBaseUrl}/physiotherapists/me/agenda`,
    );
    expect(agendaRequest.request.params.get('date')).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    const items: AgendaItem[] = [
      {
        slotId: 10,
        startTime: '2026-10-30T08:00:00',
        endTime: '2026-10-30T09:00:00',
        status: 'BOOKED',
        sessionId: 21,
        patientName: 'Carlos Mendoza',
        sessionNumber: 3,
        totalSessions: 12,
        sessionStatus: 'RESERVED',
      },
      {
        slotId: 11,
        startTime: '2026-10-30T10:00:00',
        endTime: '2026-10-30T11:00:00',
        status: 'FREE_CANCELLED',
        sessionId: null,
        patientName: null,
        sessionNumber: null,
        totalSessions: null,
        sessionStatus: null,
      },
    ];
    agendaRequest.flush({ date: '2026-10-30', items, message: null });
    http.expectOne(`${environment.apiBaseUrl}/notifications`).flush([
      { id: 7, type: 'SESSION_CANCELLED', message: 'Un paciente canceló su sesión.', read: false, createdAt: '2026-10-30T09:00:00' },
    ]);
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const content = compiled.textContent ?? '';
    expect(compiled.querySelector('.dashboard-nav__link[aria-current="page"]')?.textContent).toContain(
      'home.physio.panelNav',
    );
    expect(content).toContain('Carlos Mendoza');
    expect(content).toContain('home.physio.freeCancelled');
    expect(content).toContain('home.physio.reservedSessions');
    expect(content).toContain('Un paciente canceló su sesión.');
    expect(compiled.querySelector('.agenda-slot--cancelled')).toBeTruthy();
    // The booked session links to the patient's record; the free block does not.
    const recordLinks = compiled.querySelectorAll('.agenda-slot .record-link');
    expect(recordLinks).toHaveLength(1);
    expect(recordLinks[0].getAttribute('href')).toBe('/physiotherapist/patients?patient=Carlos%20Mendoza');
    expect(compiled.querySelector('.assistant-button')).toBeNull();
  });

  it('loads a different agenda day when the date navigation is used', async () => {
    localStorage.setItem('fisiovital.session', JSON.stringify(physiotherapist));
    const fixture = TestBed.createComponent(Dashboard);
    fixture.detectChanges();

    const first = http.expectOne((request) => request.url.endsWith('/physiotherapists/me/agenda'));
    const firstDate = first.request.params.get('date')!;
    first.flush({ date: firstDate, items: [], message: 'empty' });
    http.expectOne(`${environment.apiBaseUrl}/notifications`).flush([]);
    await fixture.whenStable();
    fixture.detectChanges();

    (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>('.agenda-day-controls button:last-child')!.click();
    const nextDay = http.expectOne((request) => request.url.endsWith('/physiotherapists/me/agenda'));
    const expectedDate = new Date(`${firstDate}T00:00:00`);
    expectedDate.setDate(expectedDate.getDate() + 1);
    const [year, month, day] = nextDay.request.params.get('date')!.split('-').map(Number);
    expect(new Date(year, month - 1, day).getTime()).toBe(expectedDate.getTime());
    nextDay.flush({ date: nextDay.request.params.get('date'), items: [], message: 'empty' });
  });
});
