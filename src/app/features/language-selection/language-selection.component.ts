import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-language-selection',
  templateUrl: './language-selection.component.html',
  imports: [ButtonComponent]
})
export class LanguageSelectionComponent {
  isLanguageDropdownVisible = false;
  currentLanguage = 'en';
  constructor(private router: Router, private translationService: TranslationService) { }

  onContinue() {
    this.router.navigate(['/login']); 
  }

  onLanguageChange(event: Event): void {
    const target = event.target as HTMLSelectElement | null;
    const selectedLang = target?.value; 
    if (selectedLang) {
      this.setLanguage(selectedLang);
    } else {
      console.warn('No language selected, or event target is null.');
    }
  }

  setLanguage(lang: string): void {
    this.currentLanguage = lang;
    this.translationService.setLanguage(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }


}

