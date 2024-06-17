import Button from "../../UI/Button/Button";
import plus from "../../../assets/icon-plus.svg";
import { useGlobalContext } from "../../../context/Global/GlobalContext";
import StatusFilter from "../StatusFilter/StatusFilter";

const ListHeader = () => {
  const { invoices } = useGlobalContext();
  const invoiceCount = invoices?.count;
  return (
    <section className="flex item-center justify-between">
      <div>
        <h1 className="text-[2.5rem] tracking-wide text-black font-medium">
          Invoices
        </h1>
        <p>There are {invoiceCount || 0} total invoices</p>
      </div>
      <div className="flex items-center gap-10">
        <StatusFilter />

        <Button
          text="New Invoice"
          icon={plus}
          bg_color="bg-purple"
          text_color="text-white"
          clickFunc={() => {}}
        />
      </div>
    </section>
  );
};

export default ListHeader;
