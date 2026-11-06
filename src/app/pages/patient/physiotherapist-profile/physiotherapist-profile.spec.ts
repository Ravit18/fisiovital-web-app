import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { addDays, toIsoDate } from '../../../core/dates';
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
const secondSlot = { id: 10, startTime: '2030-03-06T11:00:00', endTime: '2030-03-06T12:00:00', status: 'FREE' };

describe('PhysiotherapistProfile (US05, US09, US10)', () => {
  let http: HttpTestingController;
  let dialogResponse: unknown;
  let openedDialogData: unknown;

  beforeEach(() => {
    dialogResponse = true;
    openedDialogData = undefined;
    localStorage.setItem('fisiovital.session', JSON.stringify(patient));
    TestBed.configureTestingModule({
      imports: [PhysiotherapistProfile],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideTranslateService(),
        {
          provide: MatDialog,
          useValue: {
            open: (_component: unknown, config: { data?: unknown }) => {
              openedDialogData = config.data;
              return { afterClosed: () => of(dialogResponse) };
            },
          },
        },
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

  function flushSlots(availableSlots = [slot]) {
    http
      .expectOne((req) => req.url === `${api}/physiotherapists/5/slots`)
      .flush({
        physiotherapistId: 5,
        from: '',
        to: '',
        slots: availableSlots,
        nextAvailableWeek: null,
        message: null,
      });
  }

  function flushAppointments(appointments: object[] = []) {
    http
      .expectOne((req) => req.url === `${api}/appointments/me`)
      .flush({
        appointments,
        message: null,
        page: 0,
        size: 100,
        totalElements: appointments.length,
        totalPages: 1,
      });
  }

  it('shows slots after plan details are reviewed and creates the plan only when booking is confirmed', async () => {
    const fixture = await open();
    http.expectOne(`${api}/treatment-plans/me`).flush([]);
    await fixture.whenStable();
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('.dashboard-nav .dashboard-nav__link--active')?.textContent).toContain(
      'home.navSpecialists',
    );
    expect(element.querySelector('.dashboard-header .mat-button-toggle-group')).toBeNull();
    expect(element.querySelector('app-slot-picker')).toBeNull();

    const diagnosis = element.querySelector('input[formControlName="diagnosis"]') as HTMLInputElement;
    diagnosis.value = 'Esguince';
    diagnosis.dispatchEvent(new Event('input'));
    (element.querySelector('.plan-form button[type="submit"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(http.match(`${api}/treatment-plans`)).toHaveLength(0);
    flushSlots([slot, secondSlot]);
    await fixture.whenStable();

    expect(element.querySelector('.plan-summary__diagnosis')?.textContent).toContain('Esguince');
    (element.querySelector('.plan-summary button') as HTMLButtonElement).click();
    fixture.detectChanges();
    const revisedDiagnosis = element.querySelector('input[formControlName="diagnosis"]') as HTMLInputElement;
    revisedDiagnosis.value = 'Lesión muscular';
    revisedDiagnosis.dispatchEvent(new Event('input'));
    (element.querySelector('.plan-form button[type="submit"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    flushSlots([slot, secondSlot]);
    await fixture.whenStable();

    expect(http.match(`${api}/treatment-plans`)).toHaveLength(0);
    const availableSlots = element.querySelectorAll('.picker__slots button');
    (availableSlots[0] as HTMLButtonElement).click();
    (availableSlots[1] as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(element.querySelectorAll('.booking-bar__selection li')).toHaveLength(2);
    (element.querySelector('.booking-bar button') as HTMLButtonElement).click();
    expect(openedDialogData).toEqual({
      physiotherapistName: 'Mariana Rojas',
      slots: [slot, secondSlot],
      creatingPlan: true,
      diagnosis: 'Lesión muscular',
      totalSessions: 8,
      frequencyPerWeek: 2,
    });
    const create = http.expectOne(`${api}/treatment-plans`);
    expect(create.request.body).toEqual({
      physiotherapistId: 5,
      diagnosis: 'Lesión muscular',
      totalSessions: 8,
      frequencyPerWeek: 2,
    });
    create.flush(plan);
    await fixture.whenStable();

    const book = http.expectOne(`${api}/treatment-plans/3/sessions`);
    expect(book.request.body).toEqual({ slotId: 9 });
    book.flush({ id: 1, sessionNumber: 1, totalSessions: 4 });
    http.expectOne(`${api}/treatment-plans/3/sessions`).flush({ id: 2, sessionNumber: 2, totalSessions: 4 });

    http.expectOne(`${api}/treatment-plans/me`).flush([{ ...plan, bookedSessions: 2 }]);
    flushAppointments();
    flushSlots();
  });

  it('books a slot against an existing plan without creating another one', async () => {
    const fixture = await open();
    http.expectOne(`${api}/treatment-plans/me`).flush([plan]);
    flushAppointments();
    await fixture.whenStable();
    flushSlots();
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    (element.querySelector('.picker__slots button') as HTMLButtonElement).click();
    fixture.detectChanges();
    (element.querySelector('.booking-bar button') as HTMLButtonElement).click();

    http.expectNone(`${api}/treatment-plans`);
    http.expectOne(`${api}/treatment-plans/3/sessions`).flush({ id: 1, sessionNumber: 1, totalSessions: 4 });
    http.expectOne(`${api}/treatment-plans/me`).flush([{ ...plan, bookedSessions: 1 }]);
    flushAppointments();
    flushSlots();
  });

  it('lets the patient edit an active saved plan before booking any sessions', async () => {
    const fixture = await open();
    http.expectOne(`${api}/treatment-plans/me`).flush([plan]);
    flushAppointments();
    await fixture.whenStable();
    flushSlots();
    await fixture.whenStable();
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const editButton = element.querySelector('.plan-summary button') as HTMLButtonElement;
    expect(editButton).not.toBeNull();

    const updatedPlan = { ...plan, diagnosis: 'Lesión muscular' };
    dialogResponse = updatedPlan;
    editButton.click();
    fixture.detectChanges();

    expect(openedDialogData).toEqual(plan);
    expect(element.querySelector('.plan-summary__diagnosis')?.textContent).toContain('Lesión muscular');
  });

  it('does not offer editing a saved plan after at least one session has been booked', async () => {
    const fixture = await open();
    http.expectOne(`${api}/treatment-plans/me`).flush([{ ...plan, bookedSessions: 1 }]);
    flushAppointments();
    await fixture.whenStable();
    flushSlots();
    await fixture.whenStable();
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('.plan-summary button')).toBeNull();
  });

  it('limits selected sessions per week while allowing more in the next week', async () => {
    const tomorrow = toIsoDate(addDays(new Date(), 1));
    const dayAfter = toIsoDate(addDays(new Date(), 2));
    const thirdDay = toIsoDate(addDays(new Date(), 3));
    const nextWeekDay = toIsoDate(addDays(new Date(), 7));
    const weeklySlots = [
      { id: 9, startTime: `${tomorrow}T09:00:00`, endTime: `${tomorrow}T10:00:00`, status: 'FREE' },
      { id: 10, startTime: `${dayAfter}T11:00:00`, endTime: `${dayAfter}T12:00:00`, status: 'FREE' },
      { id: 11, startTime: `${thirdDay}T09:00:00`, endTime: `${thirdDay}T10:00:00`, status: 'FREE' },
      { id: 12, startTime: `${nextWeekDay}T09:00:00`, endTime: `${nextWeekDay}T10:00:00`, status: 'FREE' },
    ];
    const fixture = await open();
    http.expectOne(`${api}/treatment-plans/me`).flush([plan]);
    flushAppointments();
    await fixture.whenStable();
    flushSlots(weeklySlots);
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    const availableSlots = element.querySelectorAll('.picker__slots button') as NodeListOf<HTMLButtonElement>;
    availableSlots[0].click();
    availableSlots[1].click();
    fixture.detectChanges();

    expect(availableSlots[2].disabled).toBe(true);
    expect(availableSlots[3].disabled).toBe(false);
    expect(element.querySelector('.selection-hint.plan-note')).not.toBeNull();

    availableSlots[3].click();
    fixture.detectChanges();
    expect(element.querySelectorAll('.booking-bar__selection li')).toHaveLength(3);
  });

  it('books multiple selected slots in one confirmation', async () => {
    const fixture = await open();
    http.expectOne(`${api}/treatment-plans/me`).flush([plan]);
    flushAppointments();
    await fixture.whenStable();
    http
      .expectOne((req) => req.url === `${api}/physiotherapists/5/slots`)
      .flush({
        physiotherapistId: 5,
        from: '',
        to: '',
        slots: [slot, secondSlot],
        nextAvailableWeek: null,
        message: null,
      });
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    const availableSlots = element.querySelectorAll('.picker__slots button');
    (availableSlots[0] as HTMLButtonElement).click();
    (availableSlots[1] as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(element.querySelectorAll('.booking-bar__selection li')).toHaveLength(2);
    (element.querySelector('.booking-bar button') as HTMLButtonElement).click();

    http.expectNone(`${api}/treatment-plans`);
    http.expectOne(`${api}/treatment-plans/3/sessions`).flush({ id: 1, sessionNumber: 1, totalSessions: 4 });
    http.expectOne(`${api}/treatment-plans/3/sessions`).flush({ id: 2, sessionNumber: 2, totalSessions: 4 });
    http.expectOne(`${api}/treatment-plans/me`).flush([{ ...plan, bookedSessions: 2 }]);
    flushAppointments();
    flushSlots();
  });

  it('limits selection to the number of sessions still available in the active plan', async () => {
    const fixture = await open();
    http.expectOne(`${api}/treatment-plans/me`).flush([{ ...plan, bookedSessions: 3 }]);
    flushAppointments();
    await fixture.whenStable();
    http
      .expectOne((req) => req.url === `${api}/physiotherapists/5/slots`)
      .flush({
        physiotherapistId: 5,
        from: '',
        to: '',
        slots: [slot, secondSlot],
        nextAvailableWeek: null,
        message: null,
      });
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    const availableSlots = element.querySelectorAll('.picker__slots button') as NodeListOf<HTMLButtonElement>;
    availableSlots[0].click();
    fixture.detectChanges();

    expect(availableSlots[0].getAttribute('aria-pressed')).toBe('true');
    expect(availableSlots[1].disabled).toBe(true);
    expect(element.querySelectorAll('.booking-bar__selection li')).toHaveLength(1);
  });

  it('reports partial success if a later slot becomes unavailable during batch booking', async () => {
    const fixture = await open();
    http.expectOne(`${api}/treatment-plans/me`).flush([plan]);
    flushAppointments();
    await fixture.whenStable();
    http
      .expectOne((req) => req.url === `${api}/physiotherapists/5/slots`)
      .flush({
        physiotherapistId: 5,
        from: '',
        to: '',
        slots: [slot, secondSlot],
        nextAvailableWeek: null,
        message: null,
      });
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    const availableSlots = element.querySelectorAll('.picker__slots button');
    (availableSlots[0] as HTMLButtonElement).click();
    (availableSlots[1] as HTMLButtonElement).click();
    fixture.detectChanges();
    (element.querySelector('.booking-bar button') as HTMLButtonElement).click();

    http.expectOne(`${api}/treatment-plans/3/sessions`).flush({ id: 1, sessionNumber: 1, totalSessions: 4 });
    http
      .expectOne(`${api}/treatment-plans/3/sessions`)
      .flush({ message: 'El horario ya no está disponible' }, { status: 409, statusText: 'Conflict' });
    http.expectOne(`${api}/treatment-plans/me`).flush([{ ...plan, bookedSessions: 1 }]);
    flushAppointments();
    flushSlots();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(element.querySelector('[role="alert"].booking-outcome')).not.toBeNull();
    expect(http.match(`${api}/treatment-plans/3/sessions`)).toHaveLength(0);
  });

  it('refreshes the slots when someone else booked the slot first (409)', async () => {
    const fixture = await open();
    http.expectOne(`${api}/treatment-plans/me`).flush([plan]);
    flushAppointments();
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
    http.expectOne(`${api}/treatment-plans/me`).flush([plan]);
    flushAppointments();
    flushSlots();
  });
});
