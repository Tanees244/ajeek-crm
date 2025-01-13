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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
