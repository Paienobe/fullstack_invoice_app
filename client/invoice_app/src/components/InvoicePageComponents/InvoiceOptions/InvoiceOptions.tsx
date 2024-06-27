import { useGlobalContext } from "../../../context/Global/GlobalContext";
import { FormData } from "../../../context/Global/types";
import Button from "../../UI/Button/Button";
import { InvoiceOptionsProps } from "./types";

const InvoiceOptions = ({ invoice, openModal }: InvoiceOptionsProps) => {
  const { setShowForm, setFormData, setIsEditMode, handleEdit } =
    useGlobalContext();

  const updateStatus = () => {
    const newStatus = invoice.status == "DRAFT" ? "PENDING" : "PAID";
    const updatedData = { ...invoice, status: newStatus };
    handleEdit(updatedData);
  };
  return (
    <div className="flex items-center gap-4 md:w-fit md:ml-auto">
      <Button
        text="Edit"
        bg_color="bg-gray dark:bg-light_purple"
        text_color="text-text_dark dark:text-white"
        clickFunc={() => {
          setFormData(invoice as unknown as FormData);
          setIsEditMode(true);
          setShowForm(true);
        }}
      />
      <Button
        text="Delete"
        bg_color="bg-red"
        text_color="text-white"
        clickFunc={openModal}
      />
      {(invoice.status == "PENDING" || invoice.status == "DRAFT") && (
        <Button
          text={invoice.status == "DRAFT" ? "Mark as Pending" : "Mark as Paid"}
          bg_color="bg-purple"
          text_color="text-white"
          clickFunc={updateStatus}
        />
      )}
    </div>
  );
};

export default InvoiceOptions;
