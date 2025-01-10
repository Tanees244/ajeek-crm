import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MetricCardComponent } from '../../../../shared/components/metric-card/metric-card.component';

@Component({
  selector: 'app-partner-dashboard',
  imports: [MetricCardComponent],
  templateUrl: './partner-dashboard.component.html',
  styleUrl: './partner-dashboard.component.css'
})
export class PartnerDashboardComponent {
  pendingTickets: number = 90;
  resolvedTickets: number = 150;

  constructor(private router: Router) { }

  navigateToRegisterTicket(): void {
    this.router.navigate(['/dashboard/tickets/register-ticket']);
  }
}
