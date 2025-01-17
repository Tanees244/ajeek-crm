// core/core.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbService } from './services/breadcrumbs.service';  // Import the service
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule],
  providers: [BreadcrumbService],  // Provide the service here
})
export class CoreModule { }
