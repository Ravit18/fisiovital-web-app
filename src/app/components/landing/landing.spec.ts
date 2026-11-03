import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { Landing } from './landing';

describe('Landing', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landing],
      providers: [provideRouter([]), provideTranslateService()],
    }).compileComponents();
  });

  it('links sign-in calls to the existing authentication route', async () => {
    const fixture = TestBed.createComponent(Landing);
    await fixture.whenStable();
    const links = (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLAnchorElement>(
      'a[ng-reflect-router-link="/sign-in"], a[href="/sign-in"]',
    );
    expect(links.length).toBeGreaterThan(0);
    expect([...links].every((link) => link.getAttribute('href') === '/sign-in')).toBe(true);
  });

  it('includes the public information sections and uses the new logo', async () => {
    const fixture = TestBed.createComponent(Landing);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    for (const section of ['inicio', 'nosotros', 'servicios', 'profesionales', 'contacto']) {
      expect(compiled.querySelector(`#${section}`)).toBeTruthy();
    }
    expect(compiled.querySelector('.site-brand img')?.getAttribute('src')).toBe('/images/fisiovital-logo.png');
    expect(compiled.querySelector('form')).toBeNull();
    expect(compiled.querySelector('footer a[href="/terms"]')?.textContent).toContain('layout.terms');
  });
});
