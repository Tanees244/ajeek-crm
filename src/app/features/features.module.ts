import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // LoginComponent
    //DashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    //RouterModule,
  ],
  exports: [
    // LoginComponent
    ReactiveFormsModule, // Export if needed in other modules
  ]
})
export class FeaturesModule { }
