import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { MetricCardComponent } from './components/metric-card/metric-card.component';
import { AddUserModalComponent } from './components/modal/add-user-modal/add-user-modal.component';

@NgModule({
  declarations: [
    //ButtonComponent,
    //MetricCardComponent,
    //AddUserModalComponent
  
    //AddUserModalComponent
  ],
  imports: [CommonModule, BreadcrumbComponent, ButtonComponent],
  exports: [],
})
export class SharedModule { }
