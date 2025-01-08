import { Routes } from '@angular/router';
import { LanguageSelectionComponent } from '../features/language-selection/language-selection.component';
import { LoginComponent } from '../features/login/login.component';
import { DashboardComponent } from '../features/dashboard/dashboard.component';

// Auth related routes
//const authRoutes: Routes = [
  
//];

// Dashboard related routes
//const dashboardRoutes: Routes = [
//  {
//    path: 'dashboard',
//    component: DashboardComponent,
//    canActivate: [AuthGuard],
//    children: [
//      {
//        path: 'tickets',
//        component: TicketsComponent
//      },
//      {
//        path: 'profiles',
//        component: ProfilesComponent
//      }
//    ]
//  }
//];

// Combine all feature routes
export const featureRoutes: Routes = [
  {
    path: 'language-selection',
    component: LanguageSelectionComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  }
];
