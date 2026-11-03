import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitcher } from '../../../components/language-switcher/language-switcher';
import { apiErrorMessage } from '../../../model/api-error';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatIconModule,
    MatProgressBarModule,
    LanguageSwitcher,
    TranslatePipe,
  ],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignIn {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  protected readonly form = inject(NonNullableFormBuilder).group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  protected readonly loading = signal(false);
  protected readonly hidePassword = signal(true);
  /** Translated message from the backend, or null to show the generic network error key. */
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly networkError = signal(false);

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.errorMessage.set(null);
    this.networkError.set(false);
    this.auth.signIn(this.form.getRawValue()).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (error: HttpErrorResponse) => {
        this.loading.set(false);
        const message = apiErrorMessage(error);
        this.errorMessage.set(message);
        this.networkError.set(message === null);
      },
    });
  }
}
