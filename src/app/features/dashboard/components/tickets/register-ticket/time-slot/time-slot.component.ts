import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimeSlot {
  startTime: string;
  endTime: string;
  status: 'available' | 'unavailable';
}

interface Day {
  name: string;
  date: string;
  dateNumber: string;
  relativeName?: string; 
  isToday?: boolean;
  isPast?: boolean;
  isSelected?: boolean;
}


@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  imports: [CommonModule]
})
export class TimeSlotComponent {

  @Output() submit = new EventEmitter<void>();
  allDays: Day[] = [];
  visibleDays: Day[] = [];
  selectedDay: Day | null = null;
  currentIndex = 0;

  constructor() {
    this.initializeDays();
    this.showInitialDays();
  }

  initializeDays() {
    const today = new Date();

    this.allDays = Array.from({ length: 30 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const isPast = date < new Date(today.setHours(0, 0, 0, 0));

      let relativeName = '';
      if (i === 0) relativeName = 'Today';
      else if (i === 1) relativeName = 'Tomorrow';
      else if (i === -1) relativeName = 'Yesterday';

      return {
        name: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date),
        date: new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(date),
        dateNumber: new Intl.DateTimeFormat('en-US', { day: 'numeric' }).format(date),
        isToday: i === 0,
        isPast,
        isSelected: i === 0,
        relativeName,
      };
    });

    this.visibleDays = this.allDays.slice(0, 5);
    this.selectedDay = this.visibleDays[0];
  }


  loadMoreDays() {
    this.currentIndex += 5;
    if (this.currentIndex >= this.allDays.length) {
      this.currentIndex = 0;
    }
    this.visibleDays = this.allDays.slice(this.currentIndex, this.currentIndex + 5);
    this.selectedDay = this.visibleDays[0];
  }

  showInitialDays() {
    this.visibleDays = this.allDays.slice(0, 5);
    this.selectedDay = this.visibleDays[0];
  }

  getTimeSlots(day: Day | null): TimeSlot[] {
    if (!day) return [];

    const baseSlots = [
      'Morning',
      'Afternoon',
      'Evening',
      'Night',
    ];

    // Dynamically reorder based on the selected day
    const dayOffset = this.allDays.findIndex(d => d.isSelected) % baseSlots.length;
    const reorderedSlots = [
      ...baseSlots.slice(dayOffset),
      ...baseSlots.slice(0, dayOffset),
    ];

    // Create slots with random availability ensuring correct type
    return reorderedSlots.map((slot, index) => {
      // Generate random number 0-3, if it's 0 return 'unavailable', otherwise 'available'
      // This maintains roughly 25% unavailable slots
      const status: TimeSlot['status'] = Math.floor(Math.random() * 4) === 0
        ? 'unavailable'
        : 'available';

      return {
        startTime: `${6 + index}:00 AM`,
        endTime: `${7 + index}:00 AM`,
        status
      };
    });
  }
      
  getSlotClass(status: string): string {
    switch (status) {
      case 'available':
        return 'bg-nuetral-gray text-white hover:bg-green';
      case 'unavailable':
        return 'bg-gray-200 cursor-not-allowed';
      default:
        return '';
    }
  }

  selectDay(day: Day) {
    if (day.isPast) return;

    this.visibleDays.forEach(d => (d.isSelected = false));
    day.isSelected = true;
    this.selectedDay = day;

    // Refresh time slots and relative headings
    this.getTimeSlots(day);
  }


  selectTimeSlot(slot: TimeSlot) {
    if (slot.status !== 'unavailable') {
      console.log('Selected time slot:', slot);
      // Implement your selection logic here
    }
  }

  getDayClass(day: Day): string {
    const baseClasses = 'p-3 text-center rounded cursor-pointer transition-colors bg-gray-50';
    const classes = [baseClasses];

    if (day.isPast) {
      classes.push('day-past');
    }

    if (day.isSelected) {
      classes.push('day-selected');
    }

    if (!day.isPast) {
      classes.push('hover:bg-gray-100');
    }

    return classes.join(' ');
  }

  onSubmit() {
    this.submit.emit();  // Emit event when the button is clicked
  }
}
