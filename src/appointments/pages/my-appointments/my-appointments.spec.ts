import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap, ParamMap } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthenticatedUser } from '../../../iam/model/authenticated-user.entity';
import { Appointment } from '../../model/appointment.entity';
import { MyAppointments } from './my-appointments';

const patient: AuthenticatedUser = {
  userId: 1,
  profileId: 1,
  email: 'patient@example.com',
  role: 'PATIENT',
  fullName: 'Carlos Mendoza',
  token: 'test-token',
};

function appointment(sessionId: number, daysFromNow: number, status: Appointment['status']): Appointment {
  const start = new Date();
  start.setDate(start.getDate() + daysFromNow);
  const iso = start.toISOString().slice(0, 19);
  return {
    sessionId,
    sessionNumber: sessionId,
    totalSessions: 10,
    status,
    startTime: iso,
    endTime: iso,
    patientId: 1,
    patientName: 'Carlos Mendoza',
    physiotherapistId: 2,
    physiotherapistName: 'Mariana Rojas',
    specialty: 'DEPORTIVA',
    diagnosis: 'Esguince de tobillo',
  };
}

describe('MyAppointments', () => {
  let http: HttpTestingController;
  let routeParams: BehaviorSubject<ParamMap>;

  beforeEach(() => {
    routeParams = new BehaviorSubject(convertToParamMap({}));
    localStorage.setItem('fisiovital.session', JSON.stringify(patient));
    TestBed.configureTestingModule({
      imports: [MyAppointments],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
        provideTranslateService(),
        { provide: ActivatedRoute, useValue: { queryParamMap: routeParams.asObservable() } },
      ],
    });
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
    localStorage.clear();
  });

  it('shows the closest booked session as the next one and the rest as history', async () => {
    const fixture = TestBed.createComponent(MyAppointments);
    http.expectOne((req) => req.url === `${environment.apiBaseUrl}/appointments/me`).flush({
      appointments: [
        appointment(3, 9, 'RESERVED'),
        appointment(2, 4, 'RESERVED'),
        appointment(1, 6, 'CANCELLED'),
        appointment(4, -3, 'COMPLETED'),
      ],
      message: null,
    });
    await fixture.whenStable();

    const page = fixture.componentInstance as unknown as {
      next: () => Appointment;
      upcoming: () => Appointment[];
      history: () => Appointment[];
    };
    expect(page.next().sessionId).toBe(2);
    expect(page.upcoming().map((a) => a.sessionId)).toEqual([2, 3]);
    expect(page.history().map((a) => a.sessionId)).toEqual([1, 4]);
    expect(fixture.nativeElement.querySelector('#next-title')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.dashboard-nav__link[aria-current="page"]')?.getAttribute('href')).toBe(
      '/appointments',
    );
  });

  it('offers a retry when the history cannot be loaded', async () => {
    const fixture = TestBed.createComponent(MyAppointments);
    http
      .expectOne((req) => req.url === `${environment.apiBaseUrl}/appointments/me`)
      .flush({ status: 503, message: 'Por favor inténtalo más tarde' }, { status: 503, statusText: 'Unavailable' });
    await fixture.whenStable();

    const alert = fixture.nativeElement.querySelector('[role="alert"]') as HTMLElement;
    expect(alert.textContent).toContain('Por favor inténtalo más tarde');
    expect(alert.querySelector('button')).toBeTruthy();
  });

  it('shows the appointment history table when the history navigation is selected', async () => {
    routeParams.next(convertToParamMap({ view: 'history' }));
    const fixture = TestBed.createComponent(MyAppointments);
    http.expectOne((req) => req.url === `${environment.apiBaseUrl}/appointments/me`).flush({
      appointments: [appointment(5, -6, 'COMPLETED')],
      message: null,
      page: 0,
      size: 20,
      totalElements: 1,
      totalPages: 1,
    });
    await fixture.whenStable();
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('.history-table')).toBeTruthy();
    expect(element.querySelector('.history-table tbody')?.textContent).toContain('Mariana Rojas');
    expect(element.querySelector('.dashboard-nav__link[aria-current="page"]')?.textContent).toContain(
      'home.navHistory',
    );
  });
});
