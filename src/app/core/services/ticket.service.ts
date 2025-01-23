import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import { Ticket } from '../models/tickets.model'; 

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private apiService: BaseApiService) { }

  getTickets(): Observable<Ticket[]> {
    return this.apiService.get<Ticket[]>('cs', 'ITicketFeature', 'ListTickets');
  }
}
