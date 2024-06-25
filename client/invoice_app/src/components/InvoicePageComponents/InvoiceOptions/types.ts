import { Invoice } from "../../../services/api_response_types/invoice";

export type InvoiceOptionsProps = {
  invoice: Invoice;
  openModal: () => void;
};
