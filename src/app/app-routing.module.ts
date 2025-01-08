import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { featureRoutes } from './features/features-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'language-selection',
    pathMatch: 'full'
  },
  ...featureRoutes,  
  {
    path: '**',
    redirectTo: 'login'
    // Wildcard route catches any undefined paths and redirects them to the 'login' component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
