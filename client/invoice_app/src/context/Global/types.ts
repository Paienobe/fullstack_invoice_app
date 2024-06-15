import { ReactNode } from "react";
import { InvoiceResponse } from "../../services/api_response_types/invoice";

export type GlobalContextType = {
  invoices: InvoiceResponse | null;
  setInvoices: React.Dispatch<React.SetStateAction<InvoiceResponse | null>>;
};

export type GlobalContextProps = {
  children: ReactNode;
};
