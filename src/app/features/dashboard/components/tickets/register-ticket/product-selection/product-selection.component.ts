import { CommonModule } from '@angular/common';
import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { AddProductModalComponent } from '../../../../../../shared/components/modal/add-product-modal/add-product-modal.component';
import { ButtonComponent } from '../../../../../../shared/components/button/button.component';

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  imports: [CommonModule, AddProductModalComponent, ButtonComponent]
})
export class ProductSelectionComponent {
  @ViewChild('addProductModal') addProductModal!: AddProductModalComponent;
  @Output() stepChange = new EventEmitter<number>(); 

  products: any[] = [];

  openAddNewProductModal(): void {
    this.addProductModal.openModal();
  }

  handleProductsAdded(productsData: any): void {
    this.products.push(productsData); // Add products to the array
    console.log('New Product Added:', this.products);
    //this.changeStep(2);
  }

}
