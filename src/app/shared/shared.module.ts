// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [DropdownComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [DropdownComponent, ButtonComponent],
})
export class SharedModule { }
