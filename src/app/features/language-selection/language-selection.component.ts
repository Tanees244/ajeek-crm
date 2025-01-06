// src/app/features/language-selection/language-selection.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-language-selection',
  templateUrl: './language-selection.component.html',
  styleUrls: ['./language-selection.component.css'],
})
export class LanguageSelectionComponent {
  languages: string[] = ['English', 'Spanish', 'French', 'German'];
  selectedLanguage: string | null = null;

  onLanguageSelected(language: string) {
    this.selectedLanguage = language;
    console.log('Selected language:', language);
  }

  onContinue() {
    if (this.selectedLanguage) {
      console.log('Proceeding with language:', this.selectedLanguage);
      // Navigate or trigger next action
    } else {
      alert('Please select a language first.');
    }
  }
}
