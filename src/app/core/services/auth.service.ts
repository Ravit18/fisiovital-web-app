import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthenticatedUser } from '../models/authenticated-user.model';
import { SignInRequest } from '../models/sign-in-request.model';
import { SignUpPatientRequest } from '../models/sign-up-patient-request.model';
import { SignUpPhysiotherapistRequest } from '../models/sign-up-physiotherapist-request.model';

const SESSION_KEY = 'fisiovital.session';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/auth`;

  private readonly session = signal<AuthenticatedUser | null>(this.restoreSession());
  readonly currentUser = this.session.asReadonly();
  readonly isSignedIn = computed(() => this.session() !== null);
  /** URL prefix of the signed-in user's group: /patient or /physiotherapist. */
  readonly basePath = computed(() => (this.session()?.role === 'PHYSIOTHERAPIST' ? '/physiotherapist' : '/patient'));
  readonly homeUrl = computed(() => `${this.basePath()}/home`);

  signIn(request: SignInRequest): Observable<AuthenticatedUser> {
    return this.http
      .post<AuthenticatedUser>(`${this.baseUrl}/sign-in`, request)
      .pipe(tap((user) => this.saveSession(user)));
  }

  signUpPatient(request: SignUpPatientRequest): Observable<AuthenticatedUser> {
    return this.http
      .post<AuthenticatedUser>(`${this.baseUrl}/sign-up/patient`, request)
      .pipe(tap((user) => this.saveSession(user)));
  }

  signUpPhysiotherapist(request: SignUpPhysiotherapistRequest): Observable<AuthenticatedUser> {
    return this.http
      .post<AuthenticatedUser>(`${this.baseUrl}/sign-up/physiotherapist`, request)
      .pipe(tap((user) => this.saveSession(user)));
  }

  signOut(): void {
    this.session.set(null);
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch {
      // Nothing stored to remove.
    }
  }

  token(): string | null {
    return this.session()?.token ?? null;
  }

  private saveSession(user: AuthenticatedUser): void {
    this.session.set(user);
    try {
      localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    } catch {
      // Without storage the session lasts until the page is reloaded.
    }
  }

  private restoreSession(): AuthenticatedUser | null {
    try {
      const stored = localStorage.getItem(SESSION_KEY);
      return stored ? (JSON.parse(stored) as AuthenticatedUser) : null;
    } catch {
      return null;
    }
  }
}
