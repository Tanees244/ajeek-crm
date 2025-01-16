import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent]
})
export class AddUserModalComponent {
  isVisible = false;

  customerData = {
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    address: '',
    apartment: '',
    country: '',
    state: '',
    city: '',
    zipCode: ''
  };

  @Output() customerAdded = new EventEmitter<any>();

  openModal(): void {
    this.isVisible = true;
  }

  closeModal(): void {
    this.isVisible = false;
  }

  saveCustomer(): void {
    if (this.isFormValid()) {
      this.customerAdded.emit(this.customerData);
      this.resetForm();
      this.closeModal();
    } else {
      alert('Please fill in all required fields.');
    }
  }

  private isFormValid(): boolean {
    return Object.values(this.customerData).every(value => value.trim() !== '');
  }

  private resetForm(): void {
    this.customerData = {
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      address: '',
      apartment: '',
      country: '',
      state: '',
      city: '',
      zipCode: ''
    };
  }
}
