import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Notification {
  date: string;
  time: string;
  type: 'cancelled' | 'completed' | 'assigned' | 'approved';
  message: string;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  imports: [CommonModule, RouterModule]
})
export class NotificationsComponent {
  notifications: Notification[] = [
    {
      date: 'Jan 03, 2025',
      time: 'Now',
      type: 'cancelled',
      message: 'Ticket #54313221 has been cancelled by the customer. No further action is needed.'
    },
    {
      date: 'Jan 03, 2025',
      time: '1h ago',
      type: 'completed',
      message: 'You have successfully completed Ticket #55678123.'
    },
    {
      date: 'Jan 03, 2025',
      time: '1d ago',
      type: 'assigned',
      message: 'Ticket #10931235 has been assigned to you. Please check the details and proceed.'
    },
    {
      date: 'Jan 03, 2025',
      time: '1w ago',
      type: 'approved',
      message: 'Your request for "Refrigerant Gas (2 units)" for Ticket #11223 has been approved.'
    },
    {
      date: 'Jan 03, 2025',
      time: '1mon ago',
      type: 'completed',
      message: 'You have successfully completed Ticket #55678123.'
    },
    {
      date: 'Jan 03, 2025',
      time: '2mon ago',
      type: 'cancelled',
      message: 'Ticket #54313221 has been cancelled by the customer. No further action is needed.'
    },
    {
      date: 'Jan 03, 2025',
      time: '2mon ago',
      type: 'assigned',
      message: 'Ticket #10931235 has been assigned to you. Please check the details and proceed.'
    },
    {
      date: 'Jan 03, 2025',
      time: '2mon ago',
      type: 'completed',
      message: 'You have successfully completed Ticket #55678123.'
    },
    {
      date: 'Jan 03, 2025',
      time: '4mon ago',
      type: 'approved',
      message: 'Your request for "Refrigerant Gas (2 units)" for Ticket #11223 has been approved.'
    }
  ];

  getNotificationTitle(type: string): string {
    switch (type) {
      case 'cancelled':
        return 'Ticket Cancelled';
      case 'completed':
        return 'Ticket Marked as Completed';
      case 'assigned':
        return 'New Ticket Assigned';
      case 'approved':
        return 'Spare Part Request Approved';
      default:
        return '';
    }
  }

  getBackgroundClass(type: string): string {
    switch (type) {
      case 'cancelled':
        return 'bg-error';
      case 'completed':
        return 'bg-success';
      default:
        return '';
    }
  }

  loadPrevious(): void {
    // Implement loading previous notifications
    console.log('Loading previous notifications...');
  }
}
