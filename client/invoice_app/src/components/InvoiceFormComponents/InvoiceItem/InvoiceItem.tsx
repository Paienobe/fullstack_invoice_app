import InputField from "../../UI/InputField/InputField";
import trash from "../../../assets/icon-delete.svg";

const InvoiceItem = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <InputField label="Item Name" value="" />
      </div>
      <div className="col-span-2">
        <InputField label="Qty." value="" />
      </div>
      <div className="col-span-3">
        <InputField label="Price" value="" />
      </div>
      <div className="col-span-3 mb-4">
        <label className="font-light">Total</label>
        <div className="flex items-center justify-between h-[3.25rem]">
          £ 0
          <img src={trash} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InvoiceItem;
