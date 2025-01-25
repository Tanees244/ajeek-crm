import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../../../../core/services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {
  isRotated = false;
  @Output() toggleSidebarEvent = new EventEmitter<void>();

  constructor(private translationService : TranslationService) { }

  toggleSidebar(): void {
    this.isRotated = !this.isRotated; 
    this.toggleSidebarEvent.emit();
  }

  toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen(); // Exit full-screen mode if it's already active
    } else {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen(); // Request full-screen mode
      }
    }
  }

  isLanguageDropdownVisible = false;
  currentLanguage = 'en';

  toggleLanguageDropdown(): void {
    this.isLanguageDropdownVisible = !this.isLanguageDropdownVisible;
  }

  setLanguage(lang: string): void {
    this.currentLanguage = lang;
    this.translationService.setLanguage(lang);
    console.log(lang);
    //document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'; // Adjust for RTL
    this.isLanguageDropdownVisible = false; // Close the dropdown after selection
  }
}
