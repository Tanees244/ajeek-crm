import { CommonModule } from '@angular/common';
import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { AddProductModalComponent } from '../../../../../../shared/components/modal/add-product-modal/add-product-modal.component';
import { ProductListingModalComponent } from '../../../../../../shared/components/modal/product-listing-modal/product-listing-modal.component';
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
  imports: [CommonModule, AddProductModalComponent, AddressListingModalComponent, ButtonComponent, ProductListingModalComponent],
})
export class ProductSelectionComponent {
  @ViewChild('addProductModal') addProductModal!: AddProductModalComponent;
  @ViewChild('addressModal') addressModal!: AddressListingModalComponent;
  @ViewChild('productListingModal') productListingModal!: ProductListingModalComponent; 
  @Output() stepChange = new EventEmitter<number>();

  collapsedState: { [productId: string]: boolean } = {};

  constructor() {
    // Initialize all products as expanded
    this.selectedProducts.forEach((product) => {
      this.collapsedState[product.productId] = false;
    });
  }

  toggleCollapse(productId: string): void {
    this.collapsedState[productId] = !this.collapsedState[productId];
  }

  openChooseAddressModal(): void {
    this.addressModal.openModal();
  }

  customers: any[] = [];
  selectedProducts: Product[] = [];
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

  issues: string[] = [
    'Powering On Issues',
    'Excessive Noise',
    'Control Panel Malfunctions',
    'Water Leaks',
    'Error Codes',
    'Electrical Issues',
    'Sensor Malfunctions',
    'Unresponsive Buttons',
    'Screen Display Problems',
    'Overheating',
    'Motor Failures',
    'Battery Issues',
    'Software Glitches',
    'Connectivity Problems',
    'Frequent Restarts',
    'Faulty Wiring',
    'Temperature Fluctuations',
    'Airflow Blockages',
    'Grinding Noises',
    'Unexpected Shutdowns',
    'Unit Not Cooling/Heating',
    'Compressor Issues',
    'Lighting Problems',
    'Faulty Door Mechanisms',
    'Leaking Gas',
    'Broken Handles',
    'Cracked Panels',
    'Fan Malfunctions',
    'Unusual Vibrations',
    'Faulty Remote Control',
    'Power Supply Issues',
    'Broken Hinges',
    'Seal Leaks',
    'Water Overflow',
    'Display Malfunctions',
    'Unresponsive Sensors',
    'Incomplete Cycles',
    'Sudden Power Surges',
    'Wire Burns',
    'Loose Screws',
    'Dust Accumulation',
    'Paint Peeling',
    'Rust Formation',
    'Missing Components',
    'Faulty Plug',
    'Improper Grounding',
    'Sparking Outlets',
    'Unstable Base',
    'Tilted Frame',
  ];

  visibleRows = 3; 
  issuesPerRow = 4;

  get limitedIssues() {
    return this.issues.slice(0, this.visibleRows * this.issuesPerRow);
  }

  showAllIssues = false;

  filteredProducts: Product[] = [];
  isCollapsed: boolean = false;
  selectedProduct: any = null;
  selectedPriority: string = '';

  selectProduct(product: any) {
    const alreadySelected = this.selectedProducts.some((p: any) => p.productId === product.productId);

    if (!alreadySelected) {
      this.selectedProducts.push(product);
    }
    console.log("Products Are : ", product);
  }


  unselectProduct(productId: string): void {
    // Remove product and its corresponding collapse state
    delete this.collapsedState[productId];
    this.selectedProducts = this.selectedProducts.filter(
      (product) => product.productId !== productId
    );
  }


  openAddNewProductModal(): void {
    this.addProductModal.openModal();
  }

  openProductListingModal(): void {
    this.productListingModal.openModal();
  }

  handleProductsAdded(productData: Product): void {
    this.products.push(productData); // Add the product to the array
    console.log('New Product Added:', productData);
  }

  nextStep(): void {
    console.log('Next Step button clicked!');
    this.changeStep(3);
  }

  prevStep(): void {
    console.log("Prev Button");
    this.changeStep(1);
  }

  changeStep(stepNumber: number): void {
    this.stepChange.emit(stepNumber);
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
