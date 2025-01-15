import { Routes } from '@angular/router';
import { LanguageSelectionComponent } from './language-selection/language-selection.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartnerDashboardComponent } from './dashboard/components/partner-dashboard/partner-dashboard.component';
import { TicketsComponent } from './dashboard/components/tickets/tickets.component';
import { RegisterTicketComponent } from './dashboard/components/tickets/register-ticket/register-ticket.component'; // Import the RegisterTicketComponent
import { TicketListComponent } from './dashboard/components/tickets/ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './dashboard/components/tickets/ticket-details/ticket-details.component';

export const featureRoutes: Routes = [
  {
    path: 'language-selection',
    component: LanguageSelectionComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { breadcrumb: 'Dashboard' },
    children: [
      {
        path: 'partner',
        component: PartnerDashboardComponent,
        data: { breadcrumb: 'Partner Dashboard' },
      },
      {
        path: 'tickets',
        component: TicketsComponent,
        data: { breadcrumb: 'Tickets' },
        children: [
          {
            path: '',
            component: TicketListComponent,
          },
          {
            path: 'register-ticket',
            component: RegisterTicketComponent,
            data: { breadcrumb: 'Register Ticket' },
          },
          {
            path: 'ticket-no/:id', 
            component: TicketDetailsComponent,
            data: { breadcrumb: (data: any) => `Ticket No. ${data.id}` }, 
          }
        ],
      },
    ],
  },
];
