import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isRotated = false;
  @Output() toggleSidebarEvent = new EventEmitter<void>();

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
}
