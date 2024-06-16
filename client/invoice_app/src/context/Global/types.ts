import { ReactNode } from "react";
import { InvoiceResponse } from "../../services/api_response_types/invoice";

export type GlobalContextType = {
  invoices: InvoiceResponse | null;
  setInvoices: React.Dispatch<React.SetStateAction<InvoiceResponse | null>>;
  chosenFilter: Filters;
  setChosenFilter: React.Dispatch<React.SetStateAction<Filters>>;
};

export type Filters = { [x: string]: boolean };

export type GlobalContextProps = {
  children: ReactNode;
};
