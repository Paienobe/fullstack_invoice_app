import { Address, Item } from "../../../services/api_response_types/invoice";

export class InvoiceData {
  sender_address: Address;
  client_address: Address;
  items: Item[];
  payment_due: Date;
  description: string;
  payment_terms: number;
  client_name: string;
  client_email: string;
  status: string;
  total: string;

  constructor() {
    this.sender_address = { city: "", country: "", post_code: "", street: "" };
    this.client_address = { city: "", country: "", post_code: "", street: "" };
    this.items = [{ name: "", price: "", quantity: 0, total: "" }];
    this.payment_due = new Date();
    this.description = "";
    this.payment_terms = 0;
    this.client_name = "";
    this.client_email = "";
    this.status = "";
    this.total = "";
  }
}
