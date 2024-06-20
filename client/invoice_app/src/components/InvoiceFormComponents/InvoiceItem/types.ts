import { FormData, NumericItem } from "../../../context/Form/types";

export type InvoiceItemProps = {
  item: NumericItem;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  index: number;
};
