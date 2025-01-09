import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PartnerDashboardComponent } from './components/partner-dashboard/partner-dashboard.component';
import { TicketsComponent } from './components/tickets/tickets.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DashboardComponent, // Import instead of declare for standalone components
    PartnerDashboardComponent,
    TicketsComponent
  ]
})
export class DashboardModule { }
