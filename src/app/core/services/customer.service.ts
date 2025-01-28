import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import { Customer } from '../models/customer.model';
interface ApiResponse<T> {
  isApiHandled: boolean;
  isRequestSuccess: boolean;
  statusCode: number;
  message: string;
  data: T;
}

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private apiService: BaseApiService) { }

  getCustomerById(customerId: string): Observable<ApiResponse<Customer>> {
    const endpoint = `GetCustomerById/${customerId}`; // Use the correct API path format
    const params = { Customer_id: customerId }; // Query parameters
    return this.apiService.get<ApiResponse<Customer>>('cs', 'ICustomerManagementFeature', endpoint, { params });
  }

}
