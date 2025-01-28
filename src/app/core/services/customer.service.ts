import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import { Customer } from '../models/customer.model'; // Assuming the updated model is saved here

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private apiService: BaseApiService) { }

  getCustomerById(customerId: string): Observable<Customer> {
    return this.apiService.get<Customer>('cs', 'ICustomerFeature', `GetCustomerById/${customerId}`);
  }
}
