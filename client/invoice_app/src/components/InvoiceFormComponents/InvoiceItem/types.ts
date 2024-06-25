import { FormData, NumericItem } from "../../../context/Global/types";

export type InvoiceItemProps = {
  item: NumericItem;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};
