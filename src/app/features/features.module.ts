import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LanguageSelectionComponent } from './language-selection/language-selection.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    DashboardModule,
    // If Login and LanguageSelection are also standalone:
    LoginComponent,
    LanguageSelectionComponent,
  ]
})
export class FeaturesModule { }
