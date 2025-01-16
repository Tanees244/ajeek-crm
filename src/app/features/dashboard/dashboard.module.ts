import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PartnerDashboardComponent } from './components/partner-dashboard/partner-dashboard.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketDetailsComponent } from './components/tickets/ticket-details/ticket-details.component';
//import { CustomerDetailsComponent } from './components/tickets/register-ticket/step-1/customer-details/customer-details.component';
//import { ProductSelectionComponent } from './components/tickets/register-ticket/product-selection/product-selection.component';
//import { TimeSlotComponent } from './components/tickets/register-ticket/time-slot/time-slot.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DashboardComponent, // Import instead of declare for standalone components
    PartnerDashboardComponent,
    //TicketsComponent
  ],
  declarations: [
    //CustomerDetailsComponent,
    //ProductSelectionComponent,
    //TimeSlotComponent
  
    //TicketDetailsComponent
  
    //TechniciansDetailsComponent,
    //TechnicianDetailsComponent,
    //TechnicianListComponent,
    //TechniciansComponent
  ]
})
export class DashboardModule { }
