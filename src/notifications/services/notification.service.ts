import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Notification } from '../model/notification.entity';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly http = inject(HttpClient);

  findMine(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${environment.apiBaseUrl}/notifications`);
  }
}
