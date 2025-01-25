import { Routes } from '@angular/router';
import { LanguageSelectionComponent } from './language-selection/language-selection.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartnerDashboardComponent } from './dashboard/components/partner-dashboard/partner-dashboard.component';
import { TicketsComponent } from './dashboard/components/tickets/tickets.component';
import { RegisterTicketComponent } from './dashboard/components/tickets/register-ticket/register-ticket.component';
import { TicketListComponent } from './dashboard/components/tickets/ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './dashboard/components/tickets/ticket-details/ticket-details.component';
import { TechniciansComponent } from './dashboard/components/technicians/technicians.component';
import { TechnicianDetailsComponent } from './dashboard/components/technicians/technician-details/technician-details.component';
import { TechnicianListComponent } from './dashboard/components/technicians/technician-list/technician-list.component';
import { NotificationsComponent } from './dashboard/components/notifications/notifications.component';
import { CommunicationComponent } from './dashboard/components/communication/communication.component';

export const featureRoutes: Routes = [
  {
    path: '',
    redirectTo: 'crm/language-selection',
    pathMatch: 'full',
  },
  {
    path: 'crm', 
    children: [
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
        data: { breadcrumb: '' },
        children: [
          {
            path: 'partner',
            component: PartnerDashboardComponent,
            data: { breadcrumb: 'Partner Dashboard' },
          },
          {
            path: 'notifications',
            component: NotificationsComponent,
            data: { breadcrumb: 'Notifications' },
          },
          {
            path: 'tickets',
            component: TicketsComponent,
            data: { breadcrumb: 'Tickets' },
            children: [
              {
                path: '',
                component: TicketListComponent,
                data: { breadcrumb: '' },
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
              },
            ],
          },
          {
            path: 'technicians',
            component: TechniciansComponent,
            data: { breadcrumb: 'Technician Listing' },
            children: [
              {
                path: '',
                component: TechnicianListComponent,
                data: { breadcrumb: '' },
              },
              {
                path: 'technician/:id',
                component: TechnicianDetailsComponent,
                data: { breadcrumb: (data: any) => `${data.id}` },
              },
            ],
          },
          {
            path: 'communication',
            component: CommunicationComponent,
            data: { breadcrumb: 'Communication' },
          },
        ],
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'crm/language-selection', 
  },
];
