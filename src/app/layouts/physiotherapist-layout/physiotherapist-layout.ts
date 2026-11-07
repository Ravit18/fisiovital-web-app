import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { AssistantChat } from '../../core/components/assistant-chat/assistant-chat';
import { LanguageSwitcher } from '../../core/components/language-switcher/language-switcher';
import { AuthService } from '../../core/services/auth.service';
import { NotificationsStore } from '../../core/services/notifications.store';

/** Pages that draw their own header (dashboard, lists, profile): the layout hides its toolbar and footer there. */
const OWN_HEADER = ['/physiotherapist/home', '/physiotherapist/availability', '/physiotherapist/agenda', '/physiotherapist/patients', '/physiotherapist/notifications'];

/** Layout of the physiotherapist group: toolbar with its menu, footer and the pages of /physiotherapist/... */
@Component({
  selector: 'app-physiotherapist-layout',
  imports: [
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    TranslatePipe,
    LanguageSwitcher,
    AssistantChat,
  ],
  templateUrl: './physiotherapist-layout.html',
  styleUrl: '../../styles/app-layout.scss',
})
export class PhysiotherapistLayout {
  protected readonly auth = inject(AuthService);
  protected readonly notifications = inject(NotificationsStore);
  private readonly router = inject(Router);
  protected readonly year = new Date().getFullYear();
  private readonly path = signal(this.currentPath());
  protected readonly showChrome = computed(
    () => !OWN_HEADER.some((page) => this.path() === page || this.path().startsWith(`${page}/`)),
  );

  protected readonly links = [
    { path: '/physiotherapist/home', icon: 'dashboard', label: 'nav.panel' },
    { path: '/physiotherapist/agenda', icon: 'calendar_month', label: 'nav.agenda' },
    { path: '/physiotherapist/availability', icon: 'more_time', label: 'nav.availability' },
    { path: '/physiotherapist/patients', icon: 'history', label: 'nav.patients' },
  ];

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(inject(DestroyRef)),
      )
      .subscribe(() => {
        this.path.set(this.currentPath());
        if (this.auth.isSignedIn() && this.path() !== '/physiotherapist/notifications') {
          this.notifications.load().subscribe({ error: () => undefined });
        }
      });
  }

  protected signOut(): void {
    this.auth.signOut();
    this.notifications.clear();
    this.router.navigate(['/sign-in']);
  }

  private currentPath(): string {
    return this.router.url.split(/[?#]/)[0];
  }
}
