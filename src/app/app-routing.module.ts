import { Routes } from '@angular/router';
import { featureRoutes } from './features/features-routing.module';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'language-selection',
    pathMatch: 'full'
  },
  ...featureRoutes,
  {
    path: '**',
    redirectTo: 'login'
  }
];
