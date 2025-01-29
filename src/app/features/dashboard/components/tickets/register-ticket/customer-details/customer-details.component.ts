import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';
import { AddUserModalComponent } from '../../../../../../shared/components/modal/add-user-modal/add-user-modal.component';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../../../../core/services/customer.service';
import { Customer } from '../../../../../../core/models/customer.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  imports: [CommonModule, ButtonComponent, AddUserModalComponent, FormsModule],
})
export class CustomerDetailsComponent {
  searchId: string = '';
  customers: Customer[] = [];
  isLoading = false;
  error: string | null = null;

  @ViewChild('addUserModal') addUserModal!: AddUserModalComponent;
  @Output() stepChange = new EventEmitter<number>();
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.fetchCustomerDetails();
  } 

  fetchCustomerDetails(): void {
    if (!this.searchId.trim()) {
      this.error = 'Please enter a valid customer ID.';
      return;
    }

    this.isLoading = true;
    this.error = null; // Reset error message

    this.customerService.getCustomerById(this.searchId.trim())
      .subscribe(
        (response: any) => {
          this.isLoading = false;

          if (response.isRequestSuccess) {
            this.customers = [response.data];
            this.error = null;
            console.log('Customer Details:', response.data);
          } else {
            this.customers = [];
            this.error = response.message || 'Customer not found.';
          }
        },
        (error) => {
          console.error('Error:', error);
          this.isLoading = false;
          this.customers = [];
          this.error = 'Error fetching customer details';
        }
      );
  }

  openAddNewCustomerModal(): void {
    this.addUserModal.openModal();
  }

  handleCustomerAdded(customerData: any): void {
    this.customers.push(customerData);
  }

  nextStep(): void {
    this.changeStep(2);
  }

  changeStep(stepNumber: number): void {
    this.stepChange.emit(stepNumber);
  }

}
