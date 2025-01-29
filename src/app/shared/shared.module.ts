import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { MetricCardComponent } from './components/metric-card/metric-card.component';
import { AddUserModalComponent } from './components/modal/add-user-modal/add-user-modal.component';
import { AddProductModalComponent } from './components/modal/add-product-modal/add-product-modal.component';
import { AddressListingModalComponent } from './components/modal/address-listing-modal/address-listing-modal.component';
import { ProductListingModalComponent } from './components/modal/product-listing-modal/product-listing-modal.component';
import { FilterComponent } from './components/modal/filter/filter.component';
import { FilterModalComponent } from './components/modal/filter-modal/filter-modal.component';

@NgModule({
  declarations: [
    //ButtonComponent,
    //MetricCardComponent,
    //AddUserModalComponent
  
    //AddUserModalComponent
  
    //AddProductModalComponent
  
    //AddressListingModalComponent
  
    //ProductListingComponent
  
    //ProductListingModalComponent
  
    FilterComponent,
    FilterModalComponent
  ],
  imports: [CommonModule, BreadcrumbComponent, ButtonComponent],
  exports: [],
})
export class SharedModule { }
