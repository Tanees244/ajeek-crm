import { CommonModule } from '@angular/common';
import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { AddProductModalComponent } from '../../../../../../shared/components/modal/add-product-modal/add-product-modal.component';
import { AddressListingModalComponent } from '../../../../../../shared/components/modal/address-listing-modal/address-listing-modal.component';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';

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
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  imports: [CommonModule, AddProductModalComponent, AddressListingModalComponent, ButtonComponent],
})
export class ProductSelectionComponent {
  @ViewChild('addProductModal') addProductModal!: AddProductModalComponent;
  @ViewChild('addressModal') addressModal!: AddressListingModalComponent;
  @Output() stepChange = new EventEmitter<number>();

  openChooseAddressModal(): void {
    this.addressModal.openModal();
  }


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

  filteredProducts: Product[] = [];
  selectedProducts: string[] = [];
  isCollapsed: boolean = false;
  selectedProduct: any = null;

  selectProduct(product: any) {
    this.selectedProduct = product;
  }

  unselectProduct() {
    this.selectedProduct = null;
  }

  openAddNewProductModal(): void {
    this.addProductModal.openModal();
  }

  handleProductsAdded(productData: Product): void {
    this.products.push(productData); // Add the product to the array
    console.log('New Product Added:', productData);
  }

  private filterByWarranty(warranty: string, filter: string): boolean {
    switch (filter) {
      case '6-months': return warranty === '6 Months';
      case '1-year': return warranty === '1 Year';
      case '2-years': return warranty === '2 Years';
      default: return true;
    }
  }
}
