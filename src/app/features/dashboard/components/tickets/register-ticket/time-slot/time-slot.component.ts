import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  imports: [CommonModule]
})
export class TimeSlotComponent {
  // Your time slot selection logic goes here
  days = [
    { name: 'Thursday', date: 'December 28' },
    { name: 'Friday', date: 'December 29' }
  ];
}
