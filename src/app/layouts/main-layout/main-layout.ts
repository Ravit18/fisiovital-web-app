import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { NotificationsStore } from '../../services/notifications.store';
import { LanguageSwitcher } from '../../components/language-switcher/language-switcher';

interface NavLink {
  path: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-main-layout',
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
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  protected readonly auth = inject(AuthService);
  protected readonly notifications = inject(NotificationsStore);
  private readonly router = inject(Router);
  protected readonly year = new Date().getFullYear();
  protected readonly isHome = signal(this.router.url === '/home');
  protected readonly isPhysiotherapistSearch = signal(this.router.url === '/physiotherapists');
  protected readonly isPhysiotherapistProfile = signal(this.router.url.startsWith('/physiotherapists/'));
  protected readonly isAppointments = signal(this.router.url.split('?')[0] === '/appointments');
  protected readonly isNotifications = signal(this.router.url === '/notifications');
  protected readonly isAvailability = signal(this.router.url.split('?')[0] === '/availability');
  protected readonly isAgenda = signal(this.router.url.split('?')[0] === '/agenda');
  protected readonly isPatientHistory = signal(this.router.url.split('?')[0] === '/patients');
  /** Pages with their own header (dashboard, lists, profile) hide the generic toolbar and footer. */
  protected readonly showChrome = computed(
    () =>
      !this.isHome() &&
      !this.isPhysiotherapistSearch() &&
      !this.isPhysiotherapistProfile() &&
      !this.isAppointments() &&
      !this.isNotifications() &&
      !this.isAvailability() &&
      !this.isAgenda() &&
      !this.isPatientHistory(),
  );

  protected readonly patientLinks: NavLink[] = [
    { path: '/physiotherapists', icon: 'person_search', label: 'nav.search' },
    { path: '/treatment-plans', icon: 'assignment', label: 'nav.plans' },
    { path: '/appointments', icon: 'event', label: 'nav.appointments' },
    { path: '/assistant', icon: 'smart_toy', label: 'nav.assistant' },
  ];
  protected readonly physioLinks: NavLink[] = [
    { path: '/home', icon: 'dashboard', label: 'nav.panel' },
    { path: '/agenda', icon: 'calendar_month', label: 'nav.agenda' },
    { path: '/availability', icon: 'more_time', label: 'nav.availability' },
    { path: '/patients', icon: 'history', label: 'nav.patients' },
    { path: '/assistant', icon: 'smart_toy', label: 'nav.assistant' },
  ];

  constructor() {
    const destroyRef = inject(DestroyRef);
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(destroyRef),
      )
      .subscribe(() => {
        this.isHome.set(this.router.url === '/home');
        this.isPhysiotherapistSearch.set(this.router.url === '/physiotherapists');
        this.isPhysiotherapistProfile.set(this.router.url.startsWith('/physiotherapists/'));
        this.isAppointments.set(this.router.url.split('?')[0] === '/appointments');
        this.isNotifications.set(this.router.url === '/notifications');
        this.isAvailability.set(this.router.url.split('?')[0] === '/availability');
        this.isAgenda.set(this.router.url.split('?')[0] === '/agenda');
        this.isPatientHistory.set(this.router.url.split('?')[0] === '/patients');

        if (this.auth.isSignedIn() && this.router.url !== '/notifications') {
          this.notifications.load().subscribe({ error: () => undefined });
        }
      });
  }

  protected signOut(): void {
    this.auth.signOut();
    this.notifications.clear();
    this.router.navigate(['/sign-in']);
  }
}
