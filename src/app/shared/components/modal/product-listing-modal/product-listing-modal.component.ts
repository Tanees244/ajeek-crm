import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

interface Product {
  productId: string;
  productName: string;
  productType: string;
  brand: string;
  warranty: string;
  serialNumber: string;
  modelNumber: string;
}

@Component({
  selector: 'app-product-listing-modal',
  templateUrl: './product-listing-modal.component.html',
  standalone: true,
  imports: [CommonModule, ButtonComponent]
})
export class ProductListingModalComponent {
  @Output() productSelected = new EventEmitter<any>();

  selectedProduct: string[] = []

  products: Product[] = [
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

  isVisible = false;
  openModal(): void {
    this.isVisible = true;
  }

  closeModal(): void {
    this.isVisible = false;
  }

  selectProduct(product: any): void {
    this.productSelected.emit(product); 
    this.closeModal(); 
  }

  currentPage = 1;
  itemsPerPage = 5;
  paginatedProducts = [];
  totalPages = 0;

}
