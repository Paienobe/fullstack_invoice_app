import { NumericItem } from "../../../context/Global/types";
import { Address } from "../../../services/api_response_types/invoice";
import { makeNewItem, parseDate } from "../../../utils";
import { v4 as uuid } from "uuid";

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
    this.sender_address = {
      id: uuid(),
      city: "",
      country: "",
      post_code: "",
      street: "",
    };
    this.client_address = {
      id: uuid(),
      city: "",
      country: "",
      post_code: "",
      street: "",
    };
    this.items = [makeNewItem()];
    this.payment_due = parseDate(new Date()) as unknown as Date;
    this.description = "";
    this.payment_terms = 1;
    this.client_name = "";
    this.client_email = "";
    this.status = "PENDING";
    this.total = 0;
  }
}
