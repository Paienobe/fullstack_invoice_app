import { useGlobalContext } from "../../../context/Global/GlobalContext";
import InvoiceBar from "../InvoiceBar/InvoiceBar";

const InvoiceBarsContainer = () => {
  const { invoices } = useGlobalContext();
  return (
    <section className="my-12 grid grid-cols-1 gap-6">
      {invoices?.results.map((invoice) => {
        return <InvoiceBar key={invoice.id} invoice={invoice} />;
      })}
    </section>
  );
};

export default InvoiceBarsContainer;
