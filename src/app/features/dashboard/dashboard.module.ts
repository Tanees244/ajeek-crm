import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule, // Add other required modules like RouterModule
    RouterModule,
    
  ],
  exports: [
    DashboardComponent,
    HeaderComponent
  ]
})
export class DashboardModule { }
