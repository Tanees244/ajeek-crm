import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';

interface Ticket {
  id: string;
  status: string;
  priority: string;
  assignedTo: string;
  franchise: string;
  preferredTime: string;
  preferredDate: string;
  customerDetails: {
    phone: string;
    address: string;
  };
  lastUpdated: string;
  products: Product[];
}

interface Product {
  name: string;
  type: string;
  brand: string;
  model: string;
  serial: string;
  purchaseDate: string;
  issues: ProductIssues;
  showDetails?: boolean;
}

interface ProductIssues {
  title: string;
  details: IssueDetail[];
  issueTypes: string[];
}

interface IssueDetail {
  heading: string;
  text: string;
}

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  imports: [ButtonComponent, CommonModule]
})
export class TicketDetailsComponent implements OnInit {
  ticket: Ticket = {
    id: '10931235',
    status: 'In Progress',
    priority: 'High',
    assignedTo: 'Sheikh Nazim',
    franchise: 'Shakir',
    preferredTime: '8:00 AM - 10:00 PM',
    preferredDate: '25 May 2024',
    customerDetails: {
      phone: '0303-1233456',
      address: '123 King Faisal Road, Al Malaz'
    },
    lastUpdated: '25 May 2024',
    products: [
      {
        name: 'Samsung Split AC 1.5T',
        type: 'Refrigerator',
        brand: 'Samsung',
        model: 'RS5091255A',
        serial: 'T234SP300',
        purchaseDate: '2022-09-13',
        issues: {
          title: 'Refrigerator Issue',
          details: [
            {
              heading: 'Cooling Issue:',
              text: 'The refrigerator is not cooling properly. The temperature inside is not staying consistent, and the food is spoiling quicker than usual.'
            },
            {
              heading: 'Water Issue:',
              text: 'There is noticeable water leakage visible like a drip, pooling at the bottom of the refrigerator compartment.'
            },
            {
              heading: 'Technical Noise:',
              text: 'The refrigerator is making a loud, persistent humming noise when running. The noise is constant, and sometimes it gets louder than usual, especially when the cooling cycle kicks in.'
            },
            {
              heading: 'Control Panel Malfunction:',
              text: 'The control panel/display is not responding consistently. Some buttons are unresponsive.'
            }
          ],
          issueTypes: [
            'Not Cooling Properly',
            'Water Leakage',
            'Excessive Noise',
            'Control Panel Malfunctions'
          ]
        }
      },
      {
        name: 'Philips Air Purifier',
        type: 'Air',
        brand: 'Dawlance',
        model: 'KGS012305FOA',
        serial: 'U3551223',
        purchaseDate: '2024-05-15',
        issues: {
          title: 'Air Purifier Issue',
          details: [
            {
              heading: 'Filter Replacement Alert:',
              text: 'The air purifier indicates that the filter needs replacement earlier than expected.'
            },
            {
              heading: 'Noise Issue:',
              text: 'The air purifier is emitting an unusual noise during operation, which is louder than its normal functioning.'
            },
            {
              heading: 'Air Quality Indicator Malfunction:',
              text: 'The air quality indicator light is stuck on one color and does not change based on actual air quality.'
            }
          ],
          issueTypes: [
            'Early Filter Replacement',
            'Excessive Noise',
            'Indicator Malfunctions'
          ]
        }
      }
    ]
  };

  selectedProductIndex: number = 0;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  get selectedProduct() {
    return this.ticket.products[this.selectedProductIndex];
  }

  ngOnInit(): void {
    // Get ticket ID from route params and fetch ticket details
    this.route.params.subscribe(params => {
      const ticketId = params['id'];
      this.ticket.id = ticketId;
      this.selectedProductIndex = 0;
      // In real app, fetch ticket details using service
      // this.ticketService.getTicketDetails(ticketId).subscribe(...)
    });
  }


  selectProduct(index: number): void {
    this.selectedProductIndex = index;
  }

  navigateBack(): void {
    this.router.navigate(['/dashboard/tickets']);
  }

  downloadReport(): void {
    // Implement report download logic
  }

  registerNewTicket(): void {
    this.router.navigate(['dashboard/tickets/register-ticket']);
  }
}
