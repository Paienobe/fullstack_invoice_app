import { FormData } from "../InvoiceForm/types";

export type ItemsFieldsetProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};
