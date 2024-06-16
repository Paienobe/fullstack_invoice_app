import { Item } from "../../../services/api_response_types/invoice";

export type InvoiceItemsContainerProps = {
  items: Item[];
  invoice_total: string;
};
