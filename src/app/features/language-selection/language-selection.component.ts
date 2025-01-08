import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language-selection',
  templateUrl: './language-selection.component.html',
  styleUrls: ['./language-selection.component.css'],
})
export class LanguageSelectionComponent {
  constructor(private router: Router) { }

  onContinue() {
    this.router.navigate(['/login']); 
  }
}

