import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Routes } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { AuthenticatedUser } from '../../../core/models/authenticated-user.model';
import { PublishSlots } from './publish-slots';

const physiotherapist: AuthenticatedUser = {
  userId: 2,
  profileId: 2,
  email: 'physio@example.com',
  role: 'PHYSIOTHERAPIST',
  fullName: 'Mariana Rojas',
  token: 'test-token',
};

const agendaUrl = `${environment.apiBaseUrl}/physiotherapists/me/agenda`;
const routes: Routes = [{ path: 'availability', component: PublishSlots }];

describe('PublishSlots', () => {
  let http: HttpTestingController;

  beforeEach(() => {
    localStorage.setItem('fisiovital.session', JSON.stringify(physiotherapist));
    TestBed.configureTestingModule({
      imports: [PublishSlots],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter(routes), provideTranslateService()],
    });
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
    localStorage.clear();
  });

  it('previews generated slots and flags overlaps with the real weekly agenda', async () => {
    const fixture = TestBed.createComponent(PublishSlots);
    fixture.detectChanges();

    const component = fixture.componentInstance as unknown as {
      selectedDate: () => string;
      previewSlots: () => { time: string; endTime: string; overlaps: boolean }[];
      overlappingPreview: () => { time: string; endTime: string; overlaps: boolean }[];
      canPublish: () => boolean;
    };
    const selectedDate = component.selectedDate();
    const weekRequests = http.match((request) => request.url === agendaUrl);
    expect(weekRequests).toHaveLength(7);

    for (const request of weekRequests) {
      const date = request.request.params.get('date')!;
      request.flush({
        date,
        items:
          date === selectedDate
            ? [
                {
                  slotId: 1,
                  startTime: `${date}T10:00:00`,
                  endTime: `${date}T11:00:00`,
                  status: 'FREE',
                  sessionId: null,
                  patientName: null,
                  sessionNumber: null,
                  totalSessions: null,
                  sessionStatus: null,
                },
              ]
            : [],
        message: null,
      });
    }

    await fixture.whenStable();
    fixture.detectChanges();

    expect(component.previewSlots().map((slot) => slot.time)).toEqual(['08:00', '09:00', '10:00', '11:00']);
    expect(component.previewSlots().map((slot) => slot.endTime)).toEqual(['09:00', '10:00', '11:00', '12:00']);
    expect(component.overlappingPreview().map((slot) => slot.time)).toEqual(['10:00']);
    expect(component.canPublish()).toBe(false);
    expect((fixture.nativeElement as HTMLElement).querySelector('.form-message--warning')).toBeTruthy();
    expect((fixture.nativeElement as HTMLElement).querySelector('.dashboard-brand img')?.getAttribute('src')).toBe(
      '/images/fisiovital-logo.png',
    );
    expect((fixture.nativeElement as HTMLElement).querySelector('.dashboard-nav a[href="/physiotherapist/patients"]')).toBeTruthy();
  });

  it('prefills the selected day from the availability route query parameter', async () => {
    const requestedDate = `${new Date().getFullYear() + 1}-01-15`;
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl(`/availability?date=${requestedDate}`, PublishSlots);

    const dateInput = harness.routeNativeElement?.querySelector<HTMLInputElement>('input[type="date"]');
    expect(dateInput?.value).toBe(requestedDate);

    const requests = http.match((request) => request.url === agendaUrl);
    expect(requests).toHaveLength(7);
    for (const request of requests) {
      const date = request.request.params.get('date')!;
      request.flush({ date, items: [], message: null });
    }
    await harness.fixture.whenStable();
  });

  it('updates the date field when selecting a day from the weekly availability', async () => {
    const fixture = TestBed.createComponent(PublishSlots);
    fixture.detectChanges();

    const requests = http.match((request) => request.url === agendaUrl);
    for (const request of requests) {
      const date = request.request.params.get('date')!;
      request.flush({ date, items: [], message: null });
    }
    await fixture.whenStable();
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const dateInput = element.querySelector<HTMLInputElement>('input[type="date"]')!;
    const previousDate = dateInput.value;
    const dateButtons = [...element.querySelectorAll<HTMLButtonElement>('.week-day__date')];
    expect(dateButtons).toHaveLength(7);
    expect(dateButtons.find((button) => button.getAttribute('aria-pressed') === 'true')?.disabled).toBe(false);
    const selectableDate = dateButtons.find(
      (button) => !button.disabled && button.getAttribute('aria-pressed') !== 'true',
    )!;
    expect(selectableDate).toBeTruthy();

    selectableDate.click();
    fixture.detectChanges();

    expect(dateInput.value).not.toBe(previousDate);
    expect(dateInput.value).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(element.querySelector('.week-day__date--selected')).toBe(selectableDate);
    expect(http.match((request) => request.url === agendaUrl)).toHaveLength(0);
  });

  it('shows a clear publication confirmation with the created times and next actions', async () => {
    const fixture = TestBed.createComponent(PublishSlots);
    fixture.detectChanges();

    const agendaRequests = http.match((request) => request.url === agendaUrl);
    for (const request of agendaRequests) {
      const date = request.request.params.get('date')!;
      request.flush({ date, items: [], message: null });
    }
    await fixture.whenStable();
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const date = (element.querySelector('input[type="date"]') as HTMLInputElement).value;
    (element.querySelector('button[type="submit"]') as HTMLButtonElement).click();

    const publishRequest = http.expectOne(`${environment.apiBaseUrl}/physiotherapists/me/slots`);
    expect(publishRequest.request.body).toEqual({
      date,
      startTime: '08:00',
      endTime: '12:00',
      durationMinutes: 60,
    });
    publishRequest.flush([
      { id: 21, startTime: `${date}T08:00:00`, endTime: `${date}T09:00:00`, status: 'FREE' },
      { id: 22, startTime: `${date}T09:00:00`, endTime: `${date}T10:00:00`, status: 'FREE' },
    ]);
    await fixture.whenStable();
    fixture.detectChanges();

    expect(element.querySelector('.publish-confirmation')).toBeTruthy();
    expect(element.querySelector('.publish-confirmation__slots')?.textContent).toContain('8:00');
    expect(element.querySelector('.publish-confirmation__slots')?.textContent).toContain('9:00');
    expect(element.querySelector('.preview-summary')).toBeNull();
    expect(element.querySelector('.form-message--warning')).toBeNull();
    expect(new URL((element.querySelector('.publish-confirmation__actions a') as HTMLAnchorElement).href).searchParams.get('date')).toBe(date);

    const refreshedWeek = http.match((request) => request.url === agendaUrl);
    expect(refreshedWeek).toHaveLength(7);
    for (const request of refreshedWeek) {
      const refreshedDate = request.request.params.get('date')!;
      request.flush({ date: refreshedDate, items: [], message: null });
    }
    await fixture.whenStable();

    (element.querySelector('.publish-confirmation__actions button') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(element.querySelector('.publish-confirmation')).toBeNull();
    expect(element.querySelector('form')).toBeTruthy();
  });
});
