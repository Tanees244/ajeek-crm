import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  imports: [CommonModule]
})
export class AddUserModalComponent {
  customerData = {
    name: '',
    email: '',
    phone: ''
  };
  isVisible = false;

  @Output() customerAdded = new EventEmitter<any>();

  openModal(): void {
    this.isVisible = true;
  }

  closeModal(): void {
    this.isVisible = false;
  }

  saveCustomer(): void {
    if (this.customerData.name && this.customerData.email && this.customerData.phone) {
      this.customerAdded.emit(this.customerData);
      this.closeModal(); // Close modal after saving
    }
  }
}
