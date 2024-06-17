import { useGlobalContext } from "../../../context/Global/GlobalContext";
import InvoiceBar from "../InvoiceBar/InvoiceBar";
import emptyIllustration from "../../../assets/illustration-empty.svg";

const InvoiceBarsContainer = () => {
  const { invoices } = useGlobalContext();
  const isEmpty = invoices?.results.length == 0;
  return (
    <section className="my-12 grid grid-cols-1 gap-6">
      {invoices?.results.map((invoice) => {
        return <InvoiceBar key={invoice.id} invoice={invoice} />;
      })}

      {isEmpty && (
        <div className="flex flex-col items-center justify-center w-1/3 mx-auto mt-12 text-center">
          <img src={emptyIllustration} alt="" className="mb-12" />
          <p className="text-text_dark text-xl font-semibold">
            There is nothing here
          </p>
          <p className="text-sm font-light mt-4">
            Create an invoice by clicking the <br />
            <strong className="font-semibold">New Invoice</strong> button and
            get started
          </p>
        </div>
      )}
    </section>
  );
};

export default InvoiceBarsContainer;
