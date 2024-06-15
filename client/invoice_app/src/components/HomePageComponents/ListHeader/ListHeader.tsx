import Button from "../../UI/Button/Button";
import plus from "../../../assets/icon-plus.svg";
import { useGlobalContext } from "../../../context/Global/GlobalContext";

const ListHeader = () => {
  const { invoices } = useGlobalContext();
  const invoiceCount = invoices?.count;
  return (
    <section className="flex item-center justify-between">
      <div>
        <h1 className="text-[2rem] text-black font-semibold">Invoices</h1>
        <p>There are {invoiceCount || 0} total invoices</p>
      </div>
      <div>
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
