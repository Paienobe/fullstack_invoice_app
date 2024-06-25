import { useGlobalContext } from "../../../context/Global/GlobalContext";
import { NumericItem } from "../../../context/Global/types";
import { makeNewItem } from "../../../utils";
import Button from "../../UI/Button/Button";
import InvoiceItem from "../InvoiceItem/InvoiceItem";

const ItemsFieldset = () => {
  const { formData, setFormData } = useGlobalContext();
  const newItem: NumericItem = makeNewItem();
  const addNewItem = () => {
    setFormData({ ...formData, items: [...formData.items, newItem] });
  };
  return (
    <fieldset>
      <legend className="text-2xl mb-3">Item List</legend>
      {formData.items.map((item) => {
        return (
          <InvoiceItem
            key={item.id}
            item={item}
            formData={formData}
            setFormData={setFormData}
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
