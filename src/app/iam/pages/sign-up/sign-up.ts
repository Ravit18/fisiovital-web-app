import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitcher } from '../../../shared/components/language-switcher/language-switcher';
import { apiErrorMessage } from '../../../shared/model/api-error';
import {
  PhysiotherapistSpecialty,
  SignUpPhysiotherapistRequest,
} from '../../model/sign-up-physiotherapist.request';
import { AuthService } from '../../services/auth.service';

type AccountType = 'patient' | 'physiotherapist';

const passwordsMatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null =>
  control.get('password')?.value === control.get('confirmPassword')?.value
    ? null
    : { passwordMismatch: true };

function isPhysiotherapistSpecialty(value: string): value is PhysiotherapistSpecialty {
  return [
    'DEPORTIVA',
    'COLUMNA_POSTURA',
    'GERIATRICA',
    'PEDIATRICA',
    'POSTQUIRURGICA',
    'NEUROLOGICA',
  ].includes(value);
}

@Component({
  selector: 'app-sign-up',
  imports: [LanguageSwitcher, MatProgressBarModule, ReactiveFormsModule, RouterLink, TranslatePipe],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
})
export class SignUp {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  protected readonly accountType = signal<AccountType>('patient');
  protected readonly specialties: { value: PhysiotherapistSpecialty; label: string }[] = [
    { value: 'DEPORTIVA', label: 'sports' },
    { value: 'COLUMNA_POSTURA', label: 'spine' },
    { value: 'GERIATRICA', label: 'geriatric' },
    { value: 'PEDIATRICA', label: 'pediatric' },
    { value: 'POSTQUIRURGICA', label: 'postSurgical' },
    { value: 'NEUROLOGICA', label: 'neurological' },
  ];

  protected readonly form = inject(NonNullableFormBuilder).group({
    fullName: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d).*$/)]],
    confirmPassword: ['', Validators.required],
    licenseNumber: [''],
    specialty: [''],
    yearsOfExperience: ['', Validators.pattern(/^\d+$/)],
    description: ['', Validators.maxLength(1000)],
    acceptTerms: [false, Validators.requiredTrue],
  }, { validators: passwordsMatch });
  protected readonly loading = signal(false);
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly networkError = signal(false);

  protected selectAccountType(type: AccountType): void {
    this.accountType.set(type);
    const licenseNumber = this.form.controls.licenseNumber;
    const specialty = this.form.controls.specialty;
    const yearsOfExperience = this.form.controls.yearsOfExperience;

    if (type === 'physiotherapist') {
      licenseNumber.setValidators([Validators.required, Validators.maxLength(10)]);
      specialty.setValidators(Validators.required);
      yearsOfExperience.setValidators([
        Validators.required,
        Validators.pattern(/^\d+$/),
        Validators.min(0),
        Validators.max(60),
      ]);
    } else {
      licenseNumber.clearValidators();
      specialty.clearValidators();
      yearsOfExperience.clearValidators();
    }

    licenseNumber.updateValueAndValidity();
    specialty.updateValueAndValidity();
    yearsOfExperience.updateValueAndValidity();
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const {
      fullName,
      email,
      password,
      licenseNumber,
      specialty,
      yearsOfExperience,
      description,
    } = this.form.getRawValue();

    this.loading.set(true);
    this.errorMessage.set(null);
    this.networkError.set(false);
    const registration = this.accountType() === 'patient'
      ? this.auth.signUpPatient({ fullName, email, password })
      : (() => {
          if (!isPhysiotherapistSpecialty(specialty)) {
            this.form.controls.specialty.setErrors({ required: true });
            this.form.controls.specialty.markAsTouched();
            return null;
          }

          const request: SignUpPhysiotherapistRequest = {
            fullName,
            email,
            password,
            licenseNumber,
            specialty,
            yearsOfExperience: Number(yearsOfExperience),
            description: description || undefined,
          };
          return this.auth.signUpPhysiotherapist(request);
        })();

    if (!registration) {
      return;
    }

    registration.subscribe({
      next: () => this.router.navigate(['/home']),
      error: (error: HttpErrorResponse) => {
        this.loading.set(false);
        const message = apiErrorMessage(error);
        this.errorMessage.set(message);
        this.networkError.set(message === null);
      },
    });
  }

  protected hasMinimumLength(): boolean {
    return this.form.controls.password.value.length >= 8;
  }

  protected hasUppercase(): boolean {
    return /[A-Z]/.test(this.form.controls.password.value);
  }

  protected hasNumber(): boolean {
    return /\d/.test(this.form.controls.password.value);
  }
}
