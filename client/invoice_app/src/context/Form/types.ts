import { ReactNode } from "react";
import {
  Address,
  Invoice,
  Item,
} from "../../services/api_response_types/invoice";

export type FormContextType = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  updateFormData: (key: keyof FormData, value: string) => void;
  updateNestedFormData: (
    outer_key: keyof FormData,
    inner_key: keyof Address,
    value: string
  ) => void;
  updateDate: (value: Date) => void;
  updateTerms: (term: number) => void;
  handleSubmit: () => void;
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

export type FormContextProps = {
  children: ReactNode;
};
