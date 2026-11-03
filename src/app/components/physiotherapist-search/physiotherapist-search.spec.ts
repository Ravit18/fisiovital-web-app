import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { AuthenticatedUser } from '../../model/authenticated-user.entity';
import { PhysiotherapistSearch } from './physiotherapist-search';

const patient: AuthenticatedUser = {
  userId: 1,
  profileId: 1,
  email: 'patient@example.com',
  role: 'PATIENT',
  fullName: 'Andrea Perez',
  token: 'test-token',
};

const basePhysiotherapist = {
  fullName: 'Mariana Rojas',
  specialty: 'DEPORTIVA',
  licenseNumber: 'C-1',
  description: null,
  availabilityMessage: null,
};

describe('PhysiotherapistSearch', () => {
  let http: HttpTestingController;

  beforeEach(() => {
    localStorage.setItem('fisiovital.session', JSON.stringify(patient));
    TestBed.configureTestingModule({
      imports: [PhysiotherapistSearch],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([]), provideTranslateService()],
    });
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
    localStorage.clear();
  });

  function open() {
    const fixture = TestBed.createComponent(PhysiotherapistSearch);
    fixture.detectChanges();
    return fixture;
  }

  it('shows an empty state until someone publishes availability', async () => {
    const fixture = open();
    http
      .expectOne(`${environment.apiBaseUrl}/physiotherapists`)
      .flush({ items: [{ ...basePhysiotherapist, id: 1, yearsOfExperience: 9, hasAvailability: false }], message: null });
    await fixture.whenStable();
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('profiles.search.emptyTitle');
    expect(element.querySelector('.specialist-card')).toBeNull();
    expect(element.querySelector('.dashboard-header .dashboard-brand')?.getAttribute('href')).toBe('/home');
    expect(element.querySelector('.dashboard-header .mat-button-toggle-group')).toBeNull();
    expect(element.querySelector('mat-progress-bar')).toBeNull();
    expect(element.querySelector('.dashboard-nav a[href="/home"]')?.textContent).toContain('home.navPanel');
    expect(element.querySelector('.dashboard-nav a[href="/appointments"]')?.textContent).toContain('home.navSessions');
  });

  it('lists only specialists with published hours, ordered by experience', async () => {
    const fixture = open();
    http.expectOne(`${environment.apiBaseUrl}/physiotherapists`).flush({
      items: [
        { ...basePhysiotherapist, id: 1, fullName: 'Ana Lima', yearsOfExperience: 3, hasAvailability: true },
        { ...basePhysiotherapist, id: 2, fullName: 'Eva Ruiz', yearsOfExperience: 12, hasAvailability: true },
        { ...basePhysiotherapist, id: 3, fullName: 'Noa Diaz', yearsOfExperience: 20, hasAvailability: false },
      ],
      message: null,
    });
    await fixture.whenStable();
    fixture.detectChanges();

    const cards = (fixture.nativeElement as HTMLElement).querySelectorAll('.specialist-card');
    expect(cards).toHaveLength(2);
    expect(cards[0].textContent).toContain('Eva Ruiz');
    expect(cards[1].textContent).toContain('Ana Lima');
  });
});
