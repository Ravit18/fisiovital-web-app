import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { environment } from '../../../environments/environment';
import { authInterceptor } from '../interceptors/auth.interceptor';
import { notBelow } from '../../pages/patient/treatment-plans/edit-plan-dialog/edit-plan-dialog';
import { TreatmentPlansService } from './treatment-plans.service';

const plansUrl = `${environment.apiBaseUrl}/treatment-plans`;

describe('TreatmentPlansService (CRUD)', () => {
  let api: TreatmentPlansService;
  let http: HttpTestingController;

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem(
      'fisiovital.session',
      JSON.stringify({ role: 'PATIENT', token: 'jwt-token' }),
    );
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting(),
      ],
    });
    api = TestBed.inject(TreatmentPlansService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('uses one HTTP verb per CRUD operation, always with the JWT', () => {
    const body = { diagnosis: 'Lumbalgia', totalSessions: 8, frequencyPerWeek: 2 };
    api.create({ physiotherapistId: 1, ...body }).subscribe();
    api.getMine().subscribe();
    api.getById(5).subscribe();
    api.update(5, body).subscribe();
    api.delete(5).subscribe();

    const calls = [
      http.expectOne({ method: 'POST', url: plansUrl }),
      http.expectOne({ method: 'GET', url: `${plansUrl}/me` }),
      http.expectOne({ method: 'GET', url: `${plansUrl}/5` }),
      http.expectOne({ method: 'PUT', url: `${plansUrl}/5` }),
      http.expectOne({ method: 'DELETE', url: `${plansUrl}/5` }),
    ];
    for (const call of calls) {
      expect(call.request.headers.get('Authorization')).toBe('Bearer jwt-token');
      call.flush(null);
    }
  });

  it('notBelow rejects a total lower than the booked sessions', () => {
    expect(new FormControl(1, notBelow(2)).errors).toEqual({ notBelow: { minimum: 2 } });
    expect(new FormControl(2, notBelow(2)).errors).toBeNull();
  });
});
