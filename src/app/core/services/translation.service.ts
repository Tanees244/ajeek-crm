import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private translations: { [key: string]: string } = {}; // Ensure the type is correct
  private currentLang = new BehaviorSubject<string>('en');

  constructor(private http: HttpClient) {
    this.setLanguage('en');
}

  setLanguage(lang: string) {
    this.http.get(`/assets/i18n/${lang}.json`).subscribe((translations: any) => {
      this.translations = translations;
      this.currentLang.next(lang);

      const dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.setAttribute('dir', dir); // Updates the `dir` attribute
      document.documentElement.setAttribute('lang', lang); // Updates the `lang` attribute
    });
  }

  translate(key: string): string {
    return this.translations[key] || key;
  }

  getLanguage() {
    return this.currentLang.asObservable();
  }
}
