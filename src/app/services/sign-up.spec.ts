import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

describe('AuthService sign-up (US01/US02)', () => {
  let auth: AuthService;
  let http: HttpTestingController;
  const account = { fullName: 'Ana Torres', email: 'ana@example.com', password: 'Prueba123', phone: '943210987' };

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
    auth = TestBed.inject(AuthService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('signs the new patient in with the session the backend returns', () => {
    auth.signUpPatient(account).subscribe();
    const request = http.expectOne(`${environment.apiBaseUrl}/auth/sign-up/patient`);
    expect(request.request.body).toEqual(account);
    request.flush({ userId: 1, profileId: 7, email: account.email, role: 'PATIENT', fullName: 'Ana Torres', token: 't' });

    expect(auth.currentUser()?.profileId).toBe(7);
  });

  it('sends the professional data for a physiotherapist', () => {
    auth
      .signUpPhysiotherapist({
        ...account,
        licenseNumber: 'C-1',
        specialty: 'DEPORTIVA',
        yearsOfExperience: 3,
        description: '',
      })
      .subscribe({ error: () => undefined });
    const request = http.expectOne(`${environment.apiBaseUrl}/auth/sign-up/physiotherapist`);
    expect(request.request.body.specialty).toBe('DEPORTIVA');
    request.flush({ message: 'Esta colegiatura ya está registrada' }, { status: 409, statusText: 'Conflict' });

    expect(auth.isSignedIn()).toBe(false);
  });
});
