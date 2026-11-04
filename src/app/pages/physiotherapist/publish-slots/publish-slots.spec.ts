import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
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

describe('PublishSlots', () => {
  let http: HttpTestingController;

  beforeEach(() => {
    localStorage.setItem('fisiovital.session', JSON.stringify(physiotherapist));
    TestBed.configureTestingModule({
      imports: [PublishSlots],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([]), provideTranslateService()],
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
      previewSlots: () => { time: string; overlaps: boolean }[];
      overlappingPreview: () => { time: string; overlaps: boolean }[];
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
    expect(component.overlappingPreview().map((slot) => slot.time)).toEqual(['10:00']);
    expect(component.canPublish()).toBe(false);
    expect((fixture.nativeElement as HTMLElement).querySelector('.form-message--warning')).toBeTruthy();
    expect((fixture.nativeElement as HTMLElement).querySelector('.dashboard-brand img')?.getAttribute('src')).toBe(
      '/images/fisiovital-logo.png',
    );
    expect((fixture.nativeElement as HTMLElement).querySelector('.dashboard-nav a[href="/physiotherapist/patients"]')).toBeTruthy();
  });
});
