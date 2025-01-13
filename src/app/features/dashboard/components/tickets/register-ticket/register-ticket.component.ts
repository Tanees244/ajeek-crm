import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { AddUserModalComponent } from '../../../../../shared/components/modal/add-user-modal/add-user-modal.component';

@Component({
  selector: 'app-register-ticket',
  imports: [CommonModule, ButtonComponent, AddUserModalComponent],
  templateUrl: './register-ticket.component.html',
  styleUrl: './register-ticket.component.css'
})
export class RegisterTicketComponent {

  @ViewChild('addUserModal') addUserModal!: AddUserModalComponent;

  openAddNewCustomerModal(): void {
    this.addUserModal.openModal();
  }

  handleCustomerAdded(customerData: any): void {
    // Handle the customer data here, for example, add it to an array or send it to the server
    console.log('New Customer Added:', customerData);
  }

  currentStep = 1;

  steps = [
    { number: 1, title: 'Enter Customer Details' },
    { number: 2, title: 'Select Product/Appliance' },
    { number: 3, title: 'Select Time Slot' }
  ];

  products = [
    {
      id: '12341233',
      name: 'Samsung Split AC 1.5T',
      type: 'Air Conditioner',
      brand: 'Samsung',
      warranty: '1 Year',
      serialNumber: 'SAM123456789',
      modelNumber: 'AC-SPLIT-150JT'
    }
    // Add more products as needed
  ];

  days = [
    { name: 'Thursday', date: 'December 28', isSelected: true },
    { name: 'Friday', date: 'December 29', isSelected: false },
    // Add more days
  ];

  timePeriods = ['Morning', 'Afternoon', 'Evening', 'Night'];

  timeSlots = [
    {
      period: 'Morning',
      times: [
        { range: '6:00 AM to 7:00 AM', colorClass: 'bg-green-50 border-green-200' },
        { range: '7:00 AM to 8:00 AM', colorClass: 'bg-yellow-50 border-yellow-200' }
      ]
    }
    // Add more slots
  ];

  statusLegend = [
    { label: 'All skills matched', colorClass: 'bg-green-500' },
    { label: 'Few or more skills matched', colorClass: 'bg-yellow-500' },
    { label: 'No skills matched', colorClass: 'bg-red-500' },
    { label: 'Unavailable', colorClass: 'bg-gray-300' }
  ];

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
