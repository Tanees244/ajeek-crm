import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';

@Component({
  selector: 'app-ticket-list',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './ticket-list.component.html',
  styleUrls: [],
})
export class TicketListComponent {
  pendingTickets: number = 90;
  resolvedTickets: number = 150;

  constructor(private router: Router) { }

  navigateToRegisterTicket(): void {
    this.router.navigate(['/dashboard/tickets/register-ticket']);
  }

  navigateToTicketDetails(ticketId: string) {
    this.router.navigate([`/dashboard/tickets/ticket-no/${ticketId}`]);
  }

  tickets = [
    {
      id: '10931235',
      createdAt: '2024-12-19',
      customerName: 'Mustafa Ali',
      product: 'AC, Refrigerator',
      priority: 'High',
      city: 'Riyadh',
      assignedTech: 'Abdul Malik',
      assignedAt: '2024-12-19',
      status: 'In Progress',
    },
    {
      id: '11232142',
      createdAt: '2024-12-10',
      customerName: 'Shayan Shinwari',
      product: 'AC, Refrigerator',
      priority: 'Medium',
      city: 'Riyadh',
      assignedTech: 'Haseeb Khan',
      assignedAt: '2024-12-11',
      status: 'In Progress',
    },
    {
      id: '11232142',
      createdAt: '2024-12-10',
      customerName: 'Shayan Shinwari',
      product: 'AC, Refrigerator',
      priority: 'Medium',
      city: 'Riyadh',
      assignedTech: 'Haseeb Khan',
      assignedAt: '2024-12-11',
      status: 'In Progress',
    },
    {
      id: '11232142',
      createdAt: '2024-12-10',
      customerName: 'Shayan Shinwari',
      product: 'AC, Refrigerator',
      priority: 'Medium',
      city: 'Riyadh',
      assignedTech: 'Haseeb Khan',
      assignedAt: '2024-12-11',
      status: 'In Progress',
    },
    {
      id: '11232142',
      createdAt: '2024-12-10',
      customerName: 'Shayan Shinwari',
      product: 'AC, Refrigerator',
      priority: 'Low',
      city: 'Riyadh',
      assignedTech: 'Haseeb Khan',
      assignedAt: '2024-12-11',
      status: 'In Progress',
    },
    {
      id: '11232142',
      createdAt: '2024-12-10',
      customerName: 'Shayan Shinwari',
      product: 'AC, Refrigerator',
      priority: 'Medium',
      city: 'Riyadh',
      assignedTech: 'Haseeb Khan',
      assignedAt: '2024-12-11',
      status: 'In Progress',
    },
    {
      id: '11232142',
      createdAt: '2024-12-10',
      customerName: 'Shayan Shinwari',
      product: 'AC, Refrigerator',
      priority: 'Medium',
      city: 'Riyadh',
      assignedTech: 'Haseeb Khan',
      assignedAt: '2024-12-11',
      status: 'In Progress',
    },
    {
      id: '11232142',
      createdAt: '2024-12-10',
      customerName: 'Shayan Shinwari',
      product: 'AC, Refrigerator',
      priority: 'Medium',
      city: 'Riyadh',
      assignedTech: 'Haseeb Khan',
      assignedAt: '2024-12-11',
      status: 'In Progress',
    },

    // Add more dummy data here
  ];

  page = 1;
  rowsPerPageOptions = [5, 10, 15, 20];
  selectedPriority = '';
  selectedCity = '';
  selectedProductType = '';
  selectedSortOption = ''; // Tracks the selected sort option

  get uniqueCities() {
    return [...new Set(this.tickets.map((ticket) => ticket.city))];
  }

  get uniqueProducts() {
    return [...new Set(this.tickets.map((ticket) => ticket.product))];
  }

  get filteredTickets() {
    return this.tickets.filter(
      (ticket) =>
        (!this.selectedPriority || ticket.priority === this.selectedPriority) &&
        (!this.selectedCity || ticket.city === this.selectedCity) &&
        (!this.selectedProductType || ticket.product === this.selectedProductType)
    );
  }

  getPriorityStyles(priority: string): { bgColor: string; icon: string } {
    switch (priority) {
      case 'High':
        return { bgColor: '#FDE6E6', icon: 'assets/icons/redFlag.svg' };
      case 'Medium':
        return { bgColor: '#FFF39A', icon: 'assets/icons/yellowFlag.svg' };
      case 'Low':
        return { bgColor: '#E8FDE6', icon: 'assets/icons/greenFlag.svg' };
      default:
        return { bgColor: '', icon: '' };
    }
  }

  resetFilters() {
    this.selectedPriority = '';
    this.selectedCity = '';
    this.selectedProductType = '';
    this.selectedSortOption = '';
  }

  sortTicketsByDate() {
    const now = new Date();

    const dateFilter = {
      '1-week': new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000), // Last 1 week
      '2-weeks': new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000), // Last 2 weeks
      '1-month': new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000), // Last 1 month
    };
  }
}
