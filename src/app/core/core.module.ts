// core/core.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbService } from './services/breadcrumbs.service';  // Import the service

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [BreadcrumbService],  // Provide the service here
})
export class CoreModule { }
