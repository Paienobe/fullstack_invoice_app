import Button from "../../UI/Button/Button";
import plus from "../../../assets/icon-plus.svg";
import { useGlobalContext } from "../../../context/Global/GlobalContext";
import StatusFilter from "../StatusFilter/StatusFilter";
import { InvoiceData } from "../../InvoiceFormComponents/InvoiceForm/classes";
import { useIsMobile } from "../../../hooks/useIsMobile";

const ListHeader = () => {
  const { invoices, setShowForm, setFormData } = useGlobalContext();
  const invoiceCount = invoices?.count;
  const isMobile = useIsMobile();
  return (
    <section className="flex item-center justify-between">
      <div>
        <h1 className="text-[2.5rem] md:text-[1.125rem] tracking-wide text-black dark:text-white font-medium">
          Invoices
        </h1>
        <p className="md:text-[0.875rem]">
          There are {invoiceCount || 0} total invoices
        </p>
      </div>
      <div className="flex items-center gap-10 md:gap-4">
        <StatusFilter />

        <Button
          text={isMobile ? "New" : "New Invoice"}
          icon={plus}
          bg_color="bg-purple"
          text_color="text-white"
          clickFunc={() => {
            setShowForm(true);
            setFormData(new InvoiceData());
          }}
        />
      </div>
    </section>
  );
};

export default ListHeader;
