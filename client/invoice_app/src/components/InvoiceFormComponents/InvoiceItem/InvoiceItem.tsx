import InputField from "../../UI/InputField/InputField";
import trash from "../../../assets/icon-delete.svg";
import { InvoiceItemProps } from "./types";
import { Item } from "../../../services/api_response_types/invoice";

const InvoiceItem = ({
  item,
  formData,
  setFormData,
  index,
}: InvoiceItemProps) => {
  const { name, price, quantity, total } = item;

  const updateItem = (key: keyof Item, value: string) => {
    const itemsList = formData.items.map((item, idx) => {
      if (idx === index) {
        return { ...item, [key]: value };
      } else return item;
    });
    setFormData({ ...formData, items: itemsList });
  };

  const deleteItem = () => {
    const itemsList = formData.items.filter((_, idx) => {
      return index !== idx;
    });
    if (itemsList.length == 1) {
      setFormData({
        ...formData,
        items: [{ name: "", price: "", quantity: 0, total: "" }],
      });
    } else {
      setFormData({ ...formData, items: itemsList });
    }
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <InputField
          label="Item Name"
          value={name}
          onChangeFunc={(e) => updateItem("name", e.target.value)}
        />
      </div>
      <div className="col-span-2">
        <InputField
          label="Qty."
          type="number"
          value={quantity > 0 ? quantity : ""}
          onChangeFunc={(e) => updateItem("quantity", e.target.value)}
        />
      </div>
      <div className="col-span-3">
        <InputField
          label="Price"
          type="number"
          value={Number(price) > 0 ? price : ""}
          onChangeFunc={(e) => updateItem("price", e.target.value)}
        />
      </div>
      <div className="col-span-3 mb-4">
        <label className="font-light">Total</label>
        <div className="flex items-center justify-between h-[3.25rem]">
          £ {total}
          <button onClick={deleteItem} type="button">
            <img src={trash} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceItem;
