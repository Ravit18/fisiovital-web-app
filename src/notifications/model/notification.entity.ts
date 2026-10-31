export type NotificationType = 'SESSION_REMINDER' | 'SESSION_RESCHEDULED' | 'SESSION_CANCELLED';

/** NotificationResource in the backend (US13); message is already in the reader's language. */
export interface AppNotification {
  id: number;
  type: NotificationType;
  message: string;
  read: boolean;
  createdAt: string;
}

// Alias de compatibilidad por si tu nuevo diseño usa el nombre 'Notification'
export type Notification = AppNotification;