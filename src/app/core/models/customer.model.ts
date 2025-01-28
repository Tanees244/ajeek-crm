export interface Customer {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  customerAddress: CustomerAddress[];
}

export interface CustomerAddress {
  address: string;
  block: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
}
