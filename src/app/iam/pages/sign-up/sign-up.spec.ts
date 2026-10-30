import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { SignUp } from './sign-up';

describe('SignUp', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUp],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
        provideTranslateService(),
      ],
    }).compileComponents();
  });

  it('switches between patient and physiotherapist registration fields', async () => {
    const fixture = TestBed.createComponent(SignUp);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const roleButtons = compiled.querySelectorAll<HTMLButtonElement>('.account-types button');

    expect(roleButtons).toHaveLength(2);
    expect(compiled.querySelector('#license-number')).toBeNull();

    roleButtons[1].click();
    fixture.detectChanges();
    expect(compiled.querySelector('#license-number')).toBeTruthy();
    expect(compiled.querySelector('#specialty')).toBeTruthy();
    expect(compiled.querySelector('#years-of-experience')).toBeTruthy();

    roleButtons[0].click();
    fixture.detectChanges();
    expect(compiled.querySelector('#license-number')).toBeNull();
  });

  it('shows the account password rules and terms acceptance control', async () => {
    const fixture = TestBed.createComponent(SignUp);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const password = compiled.querySelector<HTMLInputElement>('#password')!;

    password.value = 'Recovery1';
    password.dispatchEvent(new Event('input', { bubbles: true }));
    fixture.detectChanges();

    expect(compiled.querySelectorAll('.password-requirements li')).toHaveLength(3);
    expect(compiled.querySelectorAll('.password-requirements li.met')).toHaveLength(3);
    expect(compiled.querySelector<HTMLInputElement>('#accept-terms')).toBeTruthy();
    expect(compiled.querySelector('a[href="/terms#terms-privacy"]')).toBeTruthy();
  });
});
