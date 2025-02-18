import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() label: string = 'Click Me'; 
  @Input() type: 'button' | 'submit' | 'reset' = 'button'; 
  @Input() iconUrl?: string; 
  @Input() disabled: boolean = false;
  @Input() customClass: string = ''; 
  @Input() buttonType: 'primary' | 'secondary' = 'primary'; 
}
