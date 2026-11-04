import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AppNotification } from '../models/notification.model';

/** US13: the signed-in user's notifications, shared by the toolbar badge and the notifications page. */
@Injectable({ providedIn: 'root' })
export class NotificationsStore {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/notifications`;

  private readonly items = signal<AppNotification[]>([]);
  readonly notifications = this.items.asReadonly();
  readonly unreadCount = computed(() => this.items().filter((n) => !n.read).length);

  load(): Observable<AppNotification[]> {
    return this.http.get<AppNotification[]>(this.baseUrl).pipe(tap((items) => this.items.set(items)));
  }

  markAsRead(id: number): Observable<AppNotification> {
    return this.http
      .patch<AppNotification>(`${this.baseUrl}/${id}/read`, {})
      .pipe(tap((updated) => this.items.update((items) => items.map((n) => (n.id === id ? updated : n)))));
  }

  clear(): void {
    this.items.set([]);
  }
}
