import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';
import { AddUserModalComponent } from '../../../../../../shared/components/modal/add-user-modal/add-user-modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  imports: [CommonModule, ButtonComponent, AddUserModalComponent, FormsModule],
})
export class CustomerDetailsComponent {
  @ViewChild('addUserModal') addUserModal!: AddUserModalComponent;
  @Output() stepChange = new EventEmitter<number>(); // Emit step number to parent

  customers: any[] = [];

  openAddNewCustomerModal(): void {
    this.addUserModal.openModal();
  }

  handleCustomerAdded(customerData: any): void {
    this.customers.push(customerData); // Add customer to the array
    console.log('New Customer Added:', this.customers);
    //this.changeStep(2);
  }

  nextStep(): void {
    console.log('Next Step button clicked!'); 
    this.changeStep(2);
  }

  changeStep(stepNumber: number): void {
    this.stepChange.emit(stepNumber);
  }

}
