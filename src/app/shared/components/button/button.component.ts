import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label: string = '';  // Input property to set the button label
  @Input() type: string = 'button';
}
