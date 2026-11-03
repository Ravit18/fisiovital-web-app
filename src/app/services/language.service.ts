import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type AppLanguage = 'es-419' | 'en-US';

const STORAGE_KEY = 'fisiovital.language';

/** Keeps the UI language, the <html lang> attribute and the Accept-Language sent to the backend in sync. */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly document = inject(DOCUMENT);

  readonly supported: readonly AppLanguage[] = ['es-419', 'en-US'];
  private readonly language = signal<AppLanguage>(this.initialLanguage());
  readonly current = this.language.asReadonly();

  constructor() {
    // Runs again every time the `language` signal changes.
    effect(() => {
      const language = this.language();
      this.translate.use(language);
      this.document.documentElement.lang = language;
      try {
        localStorage.setItem(STORAGE_KEY, language);
      } catch {
        // Storage may be blocked; the language still applies for this visit.
      }
    });
  }

  use(language: AppLanguage): void {
    this.language.set(language);
  }

  private initialLanguage(): AppLanguage {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'es-419' || stored === 'en-US') return stored;
    } catch {
      // Ignore blocked storage and fall back to the browser language.
    }
    return navigator.language?.toLowerCase().startsWith('en') ? 'en-US' : 'es-419';
  }
}
