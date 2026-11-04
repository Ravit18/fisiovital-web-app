import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthenticatedUser } from '../../../core/models/authenticated-user.model';
import { PhysiotherapistProfile } from './physiotherapist-profile';

const api = environment.apiBaseUrl;
const patient: AuthenticatedUser = {
  userId: 1,
  profileId: 1,
  email: 'patient@example.com',
  role: 'PATIENT',
  fullName: 'Carlos Perez',
  token: 'test-token',
};
const physio = {
  id: 5,
  fullName: 'Mariana Rojas',
  specialty: 'DEPORTIVA',
  yearsOfExperience: 8,
  licenseNumber: 'C-1',
  description: null,
  hasAvailability: true,
  availabilityMessage: null,
};
const plan = {
  id: 3,
  patientId: 1,
  patientName: 'Carlos',
  physiotherapistId: 5,
  physiotherapistName: 'Mariana Rojas',
  diagnosis: 'Esguince',
  totalSessions: 4,
  frequencyPerWeek: 2,
  status: 'ACTIVE',
  createdAt: '2030-01-01T10:00:00',
  bookedSessions: 0,
  completedSessions: 0,
};
const slot = { id: 9, startTime: '2030-03-05T09:00:00', endTime: '2030-03-05T10:00:00', status: 'FREE' };

describe('PhysiotherapistProfile (US05, US09, US10)', () => {
  let http: HttpTestingController;

  beforeEach(() => {
    localStorage.setItem('fisiovital.session', JSON.stringify(patient));
    TestBed.configureTestingModule({
      imports: [PhysiotherapistProfile],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideTranslateService(),
        // The booking confirmation is accepted right away.
        { provide: MatDialog, useValue: { open: () => ({ afterClosed: () => of(true) }) } },
      ],
    });
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  async function open() {
    const fixture = TestBed.createComponent(PhysiotherapistProfile);
    fixture.componentRef.setInput('id', '5');
    fixture.detectChanges();
    http.expectOne(`${api}/physiotherapists/5`).flush(physio);
    return fixture;
  }

  function flushSlots() {
    http
      .expectOne((req) => req.url === `${api}/physiotherapists/5/slots`)
      .flush({ physiotherapistId: 5, from: '', to: '', slots: [slot], nextAvailableWeek: null, message: null });
  }

  it('asks for a treatment plan first and lets the patient book once it exists', async () => {
    const fixture = await open();
    http.expectOne(`${api}/treatment-plans/me`).flush([]);
    await fixture.whenStable();
    flushSlots();
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('.dashboard-nav .dashboard-nav__link--active')?.textContent).toContain(
      'home.navSpecialists',
    );
    expect(element.querySelector('.dashboard-header .mat-button-toggle-group')).toBeNull();
    expect((element.querySelector('.picker__slots button') as HTMLButtonElement).disabled).toBe(true);

    const diagnosis = element.querySelector('input[formControlName="diagnosis"]') as HTMLInputElement;
    diagnosis.value = 'Esguince';
    diagnosis.dispatchEvent(new Event('input'));
    (element.querySelector('.plan-form button[type="submit"]') as HTMLButtonElement).click();
    const create = http.expectOne(`${api}/treatment-plans`);
    expect(create.request.body).toEqual({ physiotherapistId: 5, diagnosis: 'Esguince', totalSessions: 8, frequencyPerWeek: 2 });
    create.flush(plan);
    await fixture.whenStable();

    (element.querySelector('.picker__slots button') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(element.querySelector('.booking-bar')).not.toBeNull();
    (element.querySelector('.booking-bar button') as HTMLButtonElement).click();
    const book = http.expectOne(`${api}/treatment-plans/3/sessions`);
    expect(book.request.body).toEqual({ slotId: 9 });
    book.flush({ id: 1, sessionNumber: 1, totalSessions: 4 });

    http.expectOne(`${api}/treatment-plans/me`).flush([{ ...plan, bookedSessions: 1 }]);
    flushSlots();
  });

  it('refreshes the slots when someone else booked the slot first (409)', async () => {
    const fixture = await open();
    http.expectOne(`${api}/treatment-plans/me`).flush([plan]);
    await fixture.whenStable();
    flushSlots();
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    (element.querySelector('.picker__slots button') as HTMLButtonElement).click();
    fixture.detectChanges();
    (element.querySelector('.booking-bar button') as HTMLButtonElement).click();
    http
      .expectOne(`${api}/treatment-plans/3/sessions`)
      .flush({ message: 'Este horario acaba de ser reservado' }, { status: 409, statusText: 'Conflict' });
    flushSlots();
  });
});
