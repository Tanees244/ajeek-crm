import { Component, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { AddUserModalComponent } from '../../../../../shared/components/modal/add-user-modal/add-user-modal.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ProductSelectionComponent } from './product-selection/product-selection.component';
import { TimeSlotComponent } from './time-slot/time-slot.component';

@Component({
  selector: 'app-register-ticket',
  imports: [CommonModule, CustomerDetailsComponent, ProductSelectionComponent, TimeSlotComponent],
  templateUrl: './register-ticket.component.html'
})
export class RegisterTicketComponent {
  @ViewChild('addUserModal') addUserModal!: AddUserModalComponent;
  currentStep = 1;

  steps = [
    { number: 1, title: 'Enter Customer Details' },
    { number: 2, title: 'Select Product/Appliance' },
    { number: 3, title: 'Select Time Slot' },
    { number: 4, title: 'Confirmation' }
  ];

  customers: any[] = [];
  handleCustomerAdded(customerData: any): void {
    this.customers.push(customerData);
  }

  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
