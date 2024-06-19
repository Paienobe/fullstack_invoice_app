import { Address } from "../../../services/api_response_types/invoice";
import { FormData } from "../InvoiceForm/types";

export type SenderFieldsetProps = {
  formData: FormData;
  updateNestedFormData: (
    outer_key: keyof FormData,
    inner_key: keyof Address,
    value: string
  ) => void;
};
