import { Invoice } from "../../../services/api_response_types/invoice";

export type StatusBarProps = {
  invoice: Invoice;
  openModal: () => void;
};
