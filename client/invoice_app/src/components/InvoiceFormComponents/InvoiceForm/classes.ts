import { NumericItem } from "../../../context/Form/types";
import { Address } from "../../../services/api_response_types/invoice";
import { parseDate } from "../../../utils";

export class InvoiceData {
  sender_address: Address;
  client_address: Address;
  items: NumericItem[];
  payment_due: Date;
  description: string;
  payment_terms: number;
  client_name: string;
  client_email: string;
  status: string;
  total: number;

  constructor() {
    this.sender_address = { city: "", country: "", post_code: "", street: "" };
    this.client_address = { city: "", country: "", post_code: "", street: "" };
    this.items = [{ name: "", price: 0, quantity: 0, total: 0 }];
    this.payment_due = parseDate(new Date()) as unknown as Date;
    this.description = "";
    this.payment_terms = 0;
    this.client_name = "";
    this.client_email = "";
    this.status = "PENDING";
    this.total = 0;
  }
}
