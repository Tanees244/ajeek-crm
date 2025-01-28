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
    this.isLoading = true;
    this.customerService.getCustomerById('customerId123') // Pass the actual customer ID here
      .subscribe(
        (response) => {
          this.customers = [response]; // Assuming only one customer is returned, else update accordingly
          this.isLoading = false;
        },
        (error) => {
          this.error = 'Error fetching customer details';
          this.isLoading = false;
        }
      );
  }

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
