import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitcher } from '../language-switcher/language-switcher';

@Component({
  selector: 'app-landing',
  imports: [LanguageSwitcher, MatIconModule, RouterLink, TranslatePipe],
  templateUrl: './landing.html',
})
export class Landing {
  protected readonly year = new Date().getFullYear();
  protected readonly menuOpen = signal(false);
  protected readonly navigation = [
    { label: 'landing.navigation.home', href: '#inicio' },
    { label: 'landing.navigation.about', href: '#nosotros' },
    { label: 'landing.navigation.services', href: '#servicios' },
    { label: 'landing.navigation.professionals', href: '#profesionales' },
    { label: 'landing.navigation.contact', href: '#contacto' },
  ];
  protected readonly highlights = [
    { icon: 'volunteer_activism', label: 'landing.hero.highlightPersonalized' },
    { icon: 'verified', label: 'landing.hero.highlightEvidence' },
    { icon: 'accessibility_new', label: 'landing.hero.highlightProgress' },
  ];
  protected readonly services = [
    { icon: 'orthopedics', title: 'landing.services.traumaTitle', description: 'landing.services.traumaDescription' },
    { icon: 'directions_run', title: 'landing.services.rehabTitle', description: 'landing.services.rehabDescription' },
    { icon: 'health_and_safety', title: 'landing.services.preventiveTitle', description: 'landing.services.preventiveDescription' },
    { icon: 'pan_tool_alt', title: 'landing.services.manualTitle', description: 'landing.services.manualDescription' },
  ];
  protected readonly professionalAreas = [
    { icon: 'sports', title: 'landing.professionals.trauma' },
    { icon: 'accessibility_new', title: 'landing.professionals.rehab' },
    { icon: 'self_improvement', title: 'landing.professionals.manual' },
  ];
}
