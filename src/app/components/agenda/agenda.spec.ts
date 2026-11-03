import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { AuthenticatedUser } from '../../model/authenticated-user.entity';
import { AgendaItem } from '../../model/agenda.entity';
import { AgendaPage } from './agenda';

const agendaUrl = `${environment.apiBaseUrl}/physiotherapists/me/agenda`;
const physiotherapist: AuthenticatedUser = {
  userId: 2,
  profileId: 2,
  email: 'physio@example.com',
  role: 'PHYSIOTHERAPIST',
  fullName: 'Mariana Rojas',
  token: 'test-token',
};

function itemsFor(date: string): AgendaItem[] {
  return [
    {
      slotId: 1,
      startTime: `${date}T08:00:00`,
      endTime: `${date}T08:45:00`,
      status: 'FREE',
      sessionId: null,
      patientName: null,
      sessionNumber: null,
      totalSessions: null,
      sessionStatus: null,
    },
    {
      slotId: 2,
      startTime: `${date}T08:45:00`,
      endTime: `${date}T09:30:00`,
      status: 'BOOKED',
      sessionId: 19,
      patientName: 'Carlos Mendoza',
      sessionNumber: 3,
      totalSessions: 10,
      sessionStatus: 'RESERVED',
    },
  ];
}

describe('AgendaPage', () => {
  let http: HttpTestingController;

  beforeEach(() => {
    localStorage.setItem('fisiovital.session', JSON.stringify(physiotherapist));
    TestBed.configureTestingModule({
      imports: [AgendaPage],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([]), provideTranslateService()],
    });
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
    localStorage.clear();
  });

  it('loads every day in the week and can hide the free slots', async () => {
    const fixture = TestBed.createComponent(AgendaPage);
    fixture.detectChanges();
    const requests = http.match((req) => req.url === agendaUrl);
    expect(requests).toHaveLength(7);
    const dates = requests.map((request) => request.request.params.get('date')!);
    expect(dates.every((date) => /^\d{4}-\d{2}-\d{2}$/.test(date))).toBe(true);

    const friday = dates.find((date) => new Date(`${date}T00:00:00`).getDay() === 5)!;
    for (const request of requests) {
      const date = request.request.params.get('date')!;
      request.flush({ date, items: date === friday ? itemsFor(date) : [], message: null });
    }
    await fixture.whenStable();
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('.dashboard-header')).toBeTruthy();
    expect(element.querySelector('.dashboard-nav a[aria-current="page"]')?.getAttribute('href')).toBe('/agenda');
    expect(element.querySelectorAll('.week-day').length).toBe(7);
    expect(element.querySelectorAll('.week-slot').length).toBe(2);
    expect(element.textContent).toContain('Carlos Mendoza');

    const page = fixture.componentInstance as unknown as { showFree: { set: (value: boolean) => void } };
    page.showFree.set(false);
    fixture.detectChanges();
    expect(element.querySelectorAll('.week-slot').length).toBe(1);
    expect(element.textContent).toContain('agenda.weekSummary');
  });

  it('loads all seven dates when navigating to another week', async () => {
    const fixture = TestBed.createComponent(AgendaPage);
    fixture.detectChanges();
    const firstWeek = http.match((req) => req.url === agendaUrl);
    expect(firstWeek).toHaveLength(7);
    const firstDates = firstWeek.map((request) => request.request.params.get('date')!);
    for (const request of firstWeek) {
      const date = request.request.params.get('date')!;
      request.flush({ date, items: [], message: null });
    }
    await fixture.whenStable();

    const nextWeek = fixture.nativeElement.querySelectorAll('.week__navigation button')[1] as HTMLButtonElement;
    nextWeek.click();
    const secondWeek = http.match((req) => req.url === agendaUrl);
    expect(secondWeek).toHaveLength(7);
    for (const request of secondWeek) {
      const date = request.request.params.get('date')!;
      const originalDate = firstDates.find((firstDate) => {
        const expected = new Date(`${firstDate}T00:00:00`);
        expected.setDate(expected.getDate() + 7);
        return (
          expected.getFullYear() === Number(date.slice(0, 4)) &&
          expected.getMonth() + 1 === Number(date.slice(5, 7)) &&
          expected.getDate() === Number(date.slice(8, 10))
        );
      });
      expect(originalDate).toBeDefined();
      request.flush({ date, items: [], message: null });
    }
    await fixture.whenStable();
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).querySelectorAll('.week-day').length).toBe(7);
  });
});
