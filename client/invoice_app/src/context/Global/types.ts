import { ReactNode } from "react";
import {
  Address,
  Invoice,
  InvoiceResponse,
  Item,
} from "../../services/api_response_types/invoice";

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
  updateFormData: (key: keyof FormData, value: string) => void;
  updateNestedFormData: (
    outer_key: keyof FormData,
    inner_key: keyof Address,
    value: string
  ) => void;
  updateDate: (value: Date) => void;
  updateTerms: (term: number) => void;
  handleSubmit: () => void;
  handleEdit: (updatedInvoice?: Invoice) => void;
};

export type Filters = { [x: string]: boolean };

export type GlobalContextProps = {
  children: ReactNode;
};

export interface FormData
  extends Omit<Invoice, "id" | "created_at" | "items" | "total"> {
  items: NumericItem[];
  total: number;
}

export interface NumericItem extends Omit<Item, "price" | "total"> {
  price: number;
  total: number;
}
