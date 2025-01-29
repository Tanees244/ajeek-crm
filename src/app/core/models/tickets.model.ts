export interface CustomerDetails {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
}

export interface Ticket {
  id: string;
  createdAt: string;
  customerName: string;
  noOfProducts: string;
  priority: string;
  noOfIssues: string;
  updatedAt: string;
  status: string;
  customerDetails: CustomerDetails;
}
