import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent]
})
export class AddProductModalComponent {
  isVisible = false;

  productData = {
    productName: '',
    brand: '',
    model: '',
    productType: '',
    serialNumber: '',
    purchaseDate: '',
    warrantyStatus: '',
    lastServiceDate: '',
    address: '',
    apartment: '',
    country: '',
    state: '',
    city: '',
    zipCode: ''
  };

  @Output() productAdded = new EventEmitter<any>();

  brands = ['Apple', 'Samsung', 'Sony', 'LG', 'HP', 'Dell'];
  productTypes = ['Smartphone', 'Laptop', 'Tablet', 'Monitor', 'Printer'];
  countries = ['United States', 'Canada', 'United Kingdom', 'Germany', 'India'];
  states = ['California', 'Texas', 'New York', 'Ontario', 'Bavaria', 'Karnataka'];
  cities = ['Los Angeles', 'Houston', 'Toronto', 'Munich', 'Bangalore'];

  openModal(): void {
    this.isVisible = true;
  }

  closeModal(): void {
    this.isVisible = false;
  }

  saveProduct(): void {
    if (this.isFormValid()) {
      this.productAdded.emit(this.productData);
      this.resetForm();
      this.closeModal();
    } else {
      alert('Please fill in all required fields.');
    }
  }

  private isFormValid(): boolean {
    return Object.values(this.productData).every(value => value.trim() !== '');
  }

  private resetForm(): void {
    this.productData = {
      productName: '',
      brand: '',
      model: '',
      productType: '',
      serialNumber: '',
      purchaseDate: '',
      warrantyStatus: '',
      lastServiceDate: '',
      address: '',
      apartment: '',
      country: '',
      state: '',
      city: '',
      zipCode: ''
    };
  }
}
