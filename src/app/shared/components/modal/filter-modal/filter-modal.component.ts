import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../button/button.component';
interface FilterOption {
  label: string;
  value: string;
}
interface FilterConfig {
  key: string;  
  label: string;
  options: FilterOption[];
}

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  imports: [CommonModule, FormsModule, ButtonComponent]
})
export class FilterModalComponent {

  @Input() filters: FilterConfig[] = [];
  @Output() filterApplied = new EventEmitter<any>();
  @Output() modalClosed = new EventEmitter<void>();

  selectedFilters: { [key: string]: string } = {};

  applyFilters(): void {
    this.filterApplied.emit(this.selectedFilters);
    this.close();
  }

  close(): void {
    this.modalClosed.emit();
  }
}
