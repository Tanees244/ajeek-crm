import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { MetricCardComponent } from './components/metric-card/metric-card.component';

@NgModule({
  declarations: [
    ButtonComponent,
    //MetricCardComponent,
  ],
  imports: [CommonModule, BreadcrumbComponent],
  exports: [ButtonComponent],
})
export class SharedModule { }
