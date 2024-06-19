import { Address } from "../../../services/api_response_types/invoice";
import { FormData } from "../InvoiceForm/types";

export type ClientFieldsetProps = {
  formData: FormData;
  updateFormData: (key: keyof FormData, value: string) => void;
  updateNestedFormData: (
    outer_key: keyof FormData,
    inner_key: keyof Address,
    value: string
  ) => void;
  updateDate: (value: Date) => void;
  updateTerms: (term: number) => void;
};
