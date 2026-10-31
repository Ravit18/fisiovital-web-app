import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { AuthenticatedUser } from '../../../iam/model/authenticated-user.entity';
import { Notifications } from './notifications';

const patient: AuthenticatedUser = {
  userId: 1,
  profileId: 1,
  email: 'patient@example.com',
  role: 'PATIENT',
  fullName: 'Carlos Mendoza',
  token: 'test-token',
};

describe('Notifications', () => {
  let http: HttpTestingController;

  beforeEach(() => {
    localStorage.setItem('fisiovital.session', JSON.stringify(patient));
    TestBed.configureTestingModule({
      imports: [Notifications],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([]), provideTranslateService()],
    });
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
    localStorage.clear();
  });

  it('filters unread notifications and lets the user mark them as read', async () => {
    const fixture = TestBed.createComponent(Notifications);
    fixture.detectChanges();
    http.expectOne(`${environment.apiBaseUrl}/notifications`).flush([
      {
        id: 1,
        type: 'SESSION_REMINDER',
        message: 'Mañana tienes sesión',
        read: false,
        createdAt: '2026-10-24T10:00:00',
      },
      {
        id: 2,
        type: 'SESSION_CANCELLED',
        message: 'Tu sesión fue cancelada',
        read: true,
        createdAt: '2026-10-23T10:00:00',
      },
    ]);
    await fixture.whenStable();
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelectorAll('.notification-card')).toHaveLength(2);
    expect(element.querySelector('.dashboard-header .dashboard-brand')?.getAttribute('href')).toBe('/home');
    expect(element.querySelector('.dashboard-nav a[href="/appointments"]')).toBeTruthy();

    (element.querySelectorAll('.filter-button')[1] as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(element.querySelectorAll('.notification-card')).toHaveLength(1);

    (element.querySelector('.notification-card__mark-read') as HTMLButtonElement).click();
    http.expectOne(`${environment.apiBaseUrl}/notifications/1/read`).flush({
      id: 1,
      type: 'SESSION_REMINDER',
      message: 'Mañana tienes sesión',
      read: true,
      createdAt: '2026-10-24T10:00:00',
    });
    await fixture.whenStable();
    fixture.detectChanges();
    expect(element.querySelector('.state')?.textContent).toContain('notifications.emptyUnread');
  });
});
