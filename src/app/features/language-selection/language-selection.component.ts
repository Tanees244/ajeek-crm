import { Component } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CrmRouterService } from '../../core/services/crm-router.service';

@Component({
  selector: 'app-language-selection',
  templateUrl: './language-selection.component.html',
  imports: [ButtonComponent]
})
export class LanguageSelectionComponent {
  isLanguageDropdownVisible = false;
  currentLanguage = 'en';
  constructor(private crmRouter: CrmRouterService, private translationService: TranslationService) { }

  onContinue() {
    this.crmRouter.navigate(['login']); 
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

