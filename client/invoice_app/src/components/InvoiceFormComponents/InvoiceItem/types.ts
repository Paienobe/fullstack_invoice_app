import { Item } from "../../../services/api_response_types/invoice";
import { FormData } from "../InvoiceForm/types";

export type InvoiceItemProps = {
  item: Item;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  index: number;
};
