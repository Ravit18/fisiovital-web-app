import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';
import { NotificationsStore } from './notifications.store';

describe('NotificationsStore (US13)', () => {
  it('counts unread notifications and updates the count when one is read', () => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
    const store = TestBed.inject(NotificationsStore);
    const http = TestBed.inject(HttpTestingController);
    const reminder = { id: 1, type: 'SESSION_REMINDER', message: 'Mañana tienes sesión', read: false, createdAt: '' };

    store.load().subscribe();
    http.expectOne(`${environment.apiBaseUrl}/notifications`).flush([
      reminder,
      { ...reminder, id: 2, read: true },
    ]);
    expect(store.unreadCount()).toBe(1);

    store.markAsRead(1).subscribe();
    const patch = http.expectOne(`${environment.apiBaseUrl}/notifications/1/read`);
    expect(patch.request.method).toBe('PATCH');
    patch.flush({ ...reminder, read: true });
    expect(store.unreadCount()).toBe(0);
    http.verify();
  });
});
