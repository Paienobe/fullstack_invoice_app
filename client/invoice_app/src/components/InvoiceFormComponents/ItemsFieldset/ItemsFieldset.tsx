import { useFormContext } from "../../../context/Form/FormContext";
import { NumericItem } from "../../../context/Form/types";
import Button from "../../UI/Button/Button";
import InvoiceItem from "../InvoiceItem/InvoiceItem";

const ItemsFieldset = () => {
  const { formData, setFormData } = useFormContext();
  const newItem: NumericItem = { name: "", price: 0, quantity: 0, total: 0 };
  const addNewItem = () => {
    setFormData({ ...formData, items: [...formData.items, newItem] });
  };
  return (
    <fieldset>
      <legend className="text-2xl mb-3">Item List</legend>
      {formData.items.map((item, index) => {
        return (
          <InvoiceItem
            key={index}
            item={item}
            formData={formData}
            setFormData={setFormData}
            index={index}
          />
        );
      })}

      <div className="mt-2">
        <Button
          text="+ Add New Item"
          bg_color="bg-secondary_light"
          text_color="text-text_dark"
          width="w-full"
          clickFunc={addNewItem}
        />
      </div>
    </fieldset>
  );
};

export default ItemsFieldset;
