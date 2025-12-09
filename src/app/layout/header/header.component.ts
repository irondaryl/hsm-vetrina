import { Component } from '@angular/core';
import { TranslationService } from 'src/app/services/translation';
import { Language } from 'src/app/services/translation';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

   langs = [
    { code: 'it' as Language, label: 'IT' },
    { code: 'en' as Language, label: 'EN' },
    { code: 'de' as Language, label: 'DE' },
    { code: 'fr' as Language, label: 'FR' },
    { code: 'es' as Language, label: 'ES' },
  ];

  constructor(public i18n: TranslationService) {}

  setLang(lang: Language) {
    this.i18n.setLanguage(lang);
  }

  isActive(lang: Language): boolean {
    return this.i18n.currentLang === lang;
  }

  isMobileMenuOpen = false;

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
  }
}
