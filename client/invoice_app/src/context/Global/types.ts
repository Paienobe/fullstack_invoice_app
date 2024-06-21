import { ReactNode } from "react";
import {
  Invoice,
  InvoiceResponse,
} from "../../services/api_response_types/invoice";
import { FormData } from "../Form/types";

export type GlobalContextType = {
  invoices: InvoiceResponse | null;
  setInvoices: React.Dispatch<React.SetStateAction<InvoiceResponse | null>>;
  chosenFilter: Filters;
  setChosenFilter: React.Dispatch<React.SetStateAction<Filters>>;
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  isEditMode: boolean;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  singleInvoice: Invoice | null;
  setSingleInvoice: React.Dispatch<React.SetStateAction<Invoice | null>>;
};

export type Filters = { [x: string]: boolean };

export type GlobalContextProps = {
  children: ReactNode;
};
