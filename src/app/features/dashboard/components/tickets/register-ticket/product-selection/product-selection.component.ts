import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  imports: [CommonModule]
})
export class ProductSelectionComponent {
  // Your product selection logic goes here.
  products = [
    { id: '12341233', name: 'Samsung Split AC 1.5T', type: 'Air Conditioner' }
    // More products
  ];
}
