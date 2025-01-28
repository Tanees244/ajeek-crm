import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import { Ticket } from '../models/tickets.model';
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
export class TicketService {
  constructor(private apiService: BaseApiService) { }


  getTickets(): Observable < ApiResponse < Ticket[] >> {
    return this.apiService.get<ApiResponse<Ticket[]>>('cs', 'ITicketFeature', 'ListTickets');
  }
}

