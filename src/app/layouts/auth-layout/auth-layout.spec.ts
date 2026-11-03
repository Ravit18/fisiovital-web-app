import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AuthLayout } from './auth-layout';

describe('AuthLayout', () => {
  it('gives the skip link its target', async () => {
    await TestBed.configureTestingModule({ imports: [AuthLayout], providers: [provideRouter([])] }).compileComponents();
    const fixture = TestBed.createComponent(AuthLayout);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelector('main#main-content')).toBeTruthy();
  });
});
