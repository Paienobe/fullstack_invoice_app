import { useGlobalContext } from "../../../context/Global/GlobalContext";
import { FormData } from "../../../context/Global/types";
import Button from "../../UI/Button/Button";
import StatusTile from "../../UI/StatusTile/StatusTile";
import { StatusBarProps } from "./types";

const StatusBar = ({ invoice, openModal }: StatusBarProps) => {
  const { setShowForm, setFormData, setIsEditMode, handleEdit } =
    useGlobalContext();

  const gg = () => {
    const newStatus = invoice.status == "DRAFT" ? "PENDING" : "PAID";
    const updatedData = { ...invoice, status: newStatus };
    handleEdit(updatedData);
  };

  return (
    <section className="h-[6.25rem] bg-white my-6 rounded-lg p-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4 font-light">
        Status
        <StatusTile status={invoice.status} />
      </div>

      <div className="flex items-center gap-4">
        <Button
          text="Edit"
          bg_color="bg-gray"
          text_color="text-text_dark"
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
            text={
              invoice.status == "DRAFT" ? "Mark as Pending" : "Mark as Paid"
            }
            bg_color="bg-purple"
            text_color="text-white"
            clickFunc={gg}
          />
        )}
      </div>
    </section>
  );
};

export default StatusBar;
