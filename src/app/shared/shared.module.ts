import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [CommonModule, BreadcrumbComponent],
  exports: [ButtonComponent],
})
export class SharedModule { }
