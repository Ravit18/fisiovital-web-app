import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { acceptLanguageInterceptor } from '../../shared/interceptors/accept-language.interceptor';
import { LanguageService } from '../../shared/services/language.service';
import { AuthenticatedUser } from '../model/authenticated-user.entity';
import { authInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';

const user: AuthenticatedUser = {
  userId: 1,
  profileId: 1,
  email: 'carlos.mendoza@gmail.com',
  role: 'PATIENT',
  fullName: 'Carlos Mendoza',
  token: 'jwt-token',
};

describe('AuthService', () => {
  let auth: AuthService;
  let http: HttpTestingController;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [
        provideRouter([{ path: 'sign-in', children: [] }]),
        provideHttpClient(withInterceptors([acceptLanguageInterceptor, authInterceptor])),
        provideHttpClientTesting(),
        provideTranslateService(),
      ],
    });
    auth = TestBed.inject(AuthService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('stores the session after signing in', () => {
    auth.signIn({ email: user.email, password: 'Fisio2026*' }).subscribe();
    http.expectOne(`${environment.apiBaseUrl}/auth/sign-in`).flush(user);

    expect(auth.isSignedIn()).toBe(true);
    expect(JSON.parse(localStorage.getItem('fisiovital.session')!).token).toBe('jwt-token');
  });

  it('registers a patient and stores the returned session', () => {
    const request = {
      fullName: user.fullName,
      email: user.email,
      password: 'Fisio2026*',
    };
    auth.signUpPatient(request).subscribe();
    const httpRequest = http.expectOne(`${environment.apiBaseUrl}/auth/sign-up/patient`);

    expect(httpRequest.request.method).toBe('POST');
    expect(httpRequest.request.body).toEqual(request);
    httpRequest.flush(user, { status: 201, statusText: 'Created' });

    expect(auth.isSignedIn()).toBe(true);
    expect(JSON.parse(localStorage.getItem('fisiovital.session')!).token).toBe('jwt-token');
  });

  it('registers a physiotherapist with the backend-required profile fields', () => {
    const request = {
      fullName: user.fullName,
      email: user.email,
      password: 'Fisio2026*',
      licenseNumber: 'C123456',
      specialty: 'DEPORTIVA' as const,
      yearsOfExperience: 8,
    };
    auth.signUpPhysiotherapist(request).subscribe();
    const httpRequest = http.expectOne(`${environment.apiBaseUrl}/auth/sign-up/physiotherapist`);

    expect(httpRequest.request.method).toBe('POST');
    expect(httpRequest.request.body).toEqual(request);
    httpRequest.flush({ ...user, role: 'PHYSIOTHERAPIST' }, { status: 201, statusText: 'Created' });

    expect(auth.currentUser()?.role).toBe('PHYSIOTHERAPIST');
  });

  it('sends the token and the UI language to the backend', () => {
    TestBed.inject(LanguageService).use('en-US');
    auth.signIn({ email: user.email, password: 'Fisio2026*' }).subscribe();
    http.expectOne(`${environment.apiBaseUrl}/auth/sign-in`).flush(user);

    TestBed.inject(HttpClient).get(`${environment.apiBaseUrl}/notifications`).subscribe();
    const request = http.expectOne(`${environment.apiBaseUrl}/notifications`).request;

    expect(request.headers.get('Authorization')).toBe('Bearer jwt-token');
    expect(request.headers.get('Accept-Language')).toBe('en-US');
  });

  it('signs out when the backend rejects the token', () => {
    auth.signIn({ email: user.email, password: 'Fisio2026*' }).subscribe();
    http.expectOne(`${environment.apiBaseUrl}/auth/sign-in`).flush(user);

    TestBed.inject(HttpClient).get(`${environment.apiBaseUrl}/notifications`).subscribe({ error: () => {} });
    http.expectOne(`${environment.apiBaseUrl}/notifications`).flush(null, { status: 401, statusText: 'Unauthorized' });

    expect(auth.isSignedIn()).toBe(false);
  });
});
