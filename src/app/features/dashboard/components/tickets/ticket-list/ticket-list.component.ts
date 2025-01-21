import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule, MatPaginator, PageEvent } from '@angular/material/paginator';

export interface Ticket {
  id: string;
  createdAt: string;
  customerName: string;
  product: string;
  priority: string;
  city: string;
  assignedTech: string;
  assignedAt: string;
  status: string;
}


@Component({
  selector: 'app-ticket-list',
  imports: [ButtonComponent, CommonModule, FormsModule, MatPaginatorModule, RouterModule],
  templateUrl: './ticket-list.component.html',
  styles: [` 
    ::ng-deep .mat-mdc-paginator-page-size-label,
    ::ng-deep .mat-mdc-paginator-page-size-value,
    ::ng-deep .mat-mdc-paginator-range-label,
    ::ng-deep .mat-mdc-paginator-page-size,
    ::ng-deep .mat-mdc-paginator-container{
      display:none;
    }
  `]
})
export class TicketListComponent {
  pendingTickets: number = 100;
  resolvedTickets: number = 150;

  constructor(private router: Router) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  navigateToRegisterTicket(): void {
    this.router.navigate(['/dashboard/tickets/register-ticket']);
  }

  navigateToTicketDetails(ticketId: string) {
    this.router.navigate([`/dashboard/tickets/ticket-no/${ticketId}`]);
  }

  tickets : Ticket [] = [
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
  ];

  selectedPriority = '';
  selectedCity = '';
  selectedProductType = '';
  selectedSortOption = '';
  filteredTickets: Ticket[] = [];
  pageSize = 5;
  pageSizeOptions = [5, 10, 15, 20];
  searchQuery = '';
  totalItems = 0;
  currentPage = 1;
  currentPageRange = '';

  ngOnInit() {
    this.updateDisplayedTickets();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.paginator.page.subscribe(() => {
        this.updateDisplayedTickets();
      });
    }
  }

  updatePageRange() {
    const startIndex = this.paginator ? this.paginator.pageIndex * this.paginator.pageSize + 1 : 1;
    const endIndex = Math.min(startIndex + this.pageSize - 1, this.totalItems);
    this.currentPageRange = `Showing ${startIndex} - ${endIndex} of ${this.totalItems} tickets`;
  }

  updateDisplayedTickets() {
    const filteredTickets = this.getFilteredTickets();
    this.totalItems = filteredTickets.length;

    const startIndex = this.paginator ? this.paginator.pageIndex * this.paginator.pageSize : 0;
    const endIndex = startIndex + (this.paginator ? this.paginator.pageSize : this.pageSize);

    this.filteredTickets = filteredTickets.slice(startIndex, endIndex);
    this.updatePageRange();
  }

  getFilteredTickets() {
    return this.tickets.filter(ticket => {
      const matchesSearch = this.searchQuery ? ticket.customerName.toLowerCase().includes(this.searchQuery.toLowerCase()) : true;
      const matchesPriority = this.selectedPriority ? ticket.priority === this.selectedPriority : true;
      const matchesCity = this.selectedCity ? ticket.city === this.selectedCity : true;
      const matchesProductType = this.selectedProductType ? ticket.product === this.selectedProductType : true;

      return matchesSearch && matchesPriority && matchesCity && matchesProductType;
    });
  }

  onPageSizeChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.pageSize = parseInt(select.value);
    if (this.paginator) {
      this.paginator.pageSize = this.pageSize;
      this.paginator.pageIndex = 0;
    }
    this.updateDisplayedTickets();
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.updateDisplayedTickets();
  }

  onSearch(): void {
    if (this.paginator) {
      this.paginator.firstPage();
    }
    this.updateDisplayedTickets();
  }

  onFilterChange(): void {
    if (this.paginator) {
      this.paginator.firstPage();
    }
    this.updateDisplayedTickets();
  }

  resetFilters(): void {
    this.selectedPriority = '';
    this.selectedCity = '';
    this.selectedProductType = '';
    this.searchQuery = '';
    this.updateDisplayedTickets();
  }

  get uniqueCities() {
    return [...new Set(this.tickets.map((ticket) => ticket.city))];
  }

  get uniqueProducts() {
    return [...new Set(this.tickets.map((ticket) => ticket.product))];
  }

  //get filteredTickets() {
  //  return this.tickets.filter(
  //    (ticket) =>
  //      (!this.selectedPriority || ticket.priority === this.selectedPriority) &&
  //      (!this.selectedCity || ticket.city === this.selectedCity) &&
  //      (!this.selectedProductType || ticket.product === this.selectedProductType)
  //  );
  //}

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

  sortTicketsByDate() {
    const now = new Date();

    const dateFilter = {
      '1-week': new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000), // Last 1 week
      '2-weeks': new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000), // Last 2 weeks
      '1-month': new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000), // Last 1 month
    };
  }
}
