import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-address-listing-modal',
  templateUrl: './address-listing-modal.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent]
})
export class AddressListingModalComponent {
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

  selectProduct(product: any) {
    //const alreadySelected = this.selectedProducts.some((p: any) => p.productId === product.productId);

    //if (!alreadySelected) {
    //  this.selectedProducts.push(product);
    //}
    console.log("Products Are : ", product);
  }


  products: any[] = [
    {
      productId: '456001',
      productName: 'Smartphone X1',
      productType: 'Electronics',
      brand: 'TechBrand',
      warranty: '1 Year',
      serialNumber: 'SN12345678',
      modelNumber: 'TX1-2025',
    },
    {
      productId: '956002',
      productName: 'Laptop Pro 15',
      productType: 'Electronics',
      brand: 'GigaTech',
      warranty: '2 Years',
      serialNumber: 'SN87654321',
      modelNumber: 'LP15-2025',
    },
    {
      productId: '987003',
      productName: 'Wireless Headphones',
      productType: 'Accessories',
      brand: 'SoundMax',
      warranty: '6 Months',
      serialNumber: 'SN56781234',
      modelNumber: 'WH2025',
    },
    {
      productId: '987003',
      productName: 'Wireless Headphones',
      productType: 'Accessories',
      brand: 'SoundMax',
      warranty: '6 Months',
      serialNumber: 'SN56781234',
      modelNumber: 'WH2025',
    },
    {
      productId: '987003',
      productName: 'Wireless Headphones',
      productType: 'Accessories',
      brand: 'SoundMax',
      warranty: '6 Months',
      serialNumber: 'SN56781234',
      modelNumber: 'WH2025',
    },
    {
      productId: '987003',
      productName: 'Wireless Headphones',
      productType: 'Accessories',
      brand: 'SoundMax',
      warranty: '6 Months',
      serialNumber: 'SN56781234',
      modelNumber: 'WH2025',
    },
    {
      productId: '987003',
      productName: 'Wireless Headphones',
      productType: 'Accessories',
      brand: 'SoundMax',
      warranty: '6 Months',
      serialNumber: 'SN56781234',
      modelNumber: 'WH2025',
    },
    {
      productId: '987003',
      productName: 'Wireless Headphones',
      productType: 'Accessories',
      brand: 'SoundMax',
      warranty: '6 Months',
      serialNumber: 'SN56781234',
      modelNumber: 'WH2025',
    },
    {
      productId: '987003',
      productName: 'Wireless Headphones',
      productType: 'Accessories',
      brand: 'SoundMax',
      warranty: '6 Months',
      serialNumber: 'SN56781234',
      modelNumber: 'WH2025',
    },
  ];

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
