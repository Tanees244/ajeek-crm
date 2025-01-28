import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslationService } from './core/services/translation.service';
import { TranslatePipe } from './shared/pipes/translate.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgChartsModule,
    FormsModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatSnackBarModule
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private translationService: TranslationService) { }

  translate(key: string): string {
    return this.translationService.translate(key);
  }

  setLanguage(lang: string) {
    this.translationService.setLanguage(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'; // Adjust direction for RTL languages
  }
}
