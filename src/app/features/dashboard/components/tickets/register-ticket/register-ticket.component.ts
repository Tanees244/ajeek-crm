import { Component, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { AddUserModalComponent } from '../../../../../shared/components/modal/add-user-modal/add-user-modal.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ProductSelectionComponent } from './product-selection/product-selection.component';
import { TimeSlotComponent } from './time-slot/time-slot.component';

@Component({
  selector: 'app-register-ticket',
  imports: [CommonModule, CustomerDetailsComponent, ProductSelectionComponent],
  templateUrl: './register-ticket.component.html'
})
export class RegisterTicketComponent {
  @ViewChild('addUserModal') addUserModal!: AddUserModalComponent;
  currentStep = 2;

  steps = [
    { number: 1, title: 'Enter Customer Details' },
    { number: 2, title: 'Select Product/Appliance' },
    { number: 3, title: 'Select Time Slot' },
  ];

  customers: any[] = [];
  handleCustomerAdded(customerData: any): void {
    this.customers.push(customerData);
  }

  updateStep(stepNumber: number): void {
    this.currentStep = stepNumber; 
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
