export interface InvoiceResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Invoice[];
}

export interface Invoice {
  id: string;
  sender_address: Address;
  client_address: Address;
  items: Item[];
  created_at: Date;
  payment_due: Date;
  description: string;
  payment_terms: number;
  client_name: string;
  client_email: string;
  status: string;
  total: string;
}

export interface Address {
  street: string;
  city: string;
  post_code: string;
  country: string;
}

export interface Item {
  name: string;
  quantity: number;
  price: string;
  total: string;
}
