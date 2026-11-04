import { Component, inject } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslatePipe } from '@ngx-translate/core';
import { AppLanguage, LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  imports: [MatButtonToggleModule, TranslatePipe],
  template: `
    <mat-button-toggle-group
      hideSingleSelectionIndicator
      [value]="language.current()"
      (change)="language.use($event.value)"
      [attr.aria-label]="'layout.language' | translate"
    >
      @for (option of language.supported; track option) {
        <mat-button-toggle [value]="option" [attr.lang]="option" [aria-label]="names[option]">
          {{ codes[option] }}
        </mat-button-toggle>
      }
    </mat-button-toggle-group>
  `,
})
export class LanguageSwitcher {
  protected readonly language = inject(LanguageService);
  protected readonly codes: Record<AppLanguage, string> = { 'es-419': 'ES', 'en-US': 'EN' };
  /** Each language is named in itself so screen readers announce it correctly. */
  protected readonly names: Record<AppLanguage, string> = { 'es-419': 'Español', 'en-US': 'English' };
}
