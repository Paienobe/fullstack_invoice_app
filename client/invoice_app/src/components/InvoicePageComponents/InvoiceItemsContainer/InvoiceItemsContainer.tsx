import { InvoiceItemsContainerProps } from "./types";

const InvoiceItemsContainer = ({
  items,
  invoice_total,
}: InvoiceItemsContainerProps) => {
  return (
    <section className="mt-12 rounded-lg overflow-hidden">
      <div className="p-6 bg-light_bg dark:bg-light_purple">
        <div className="grid grid-cols-5 items-center md:hidden">
          <p className="col-span-2">Item Name</p>
          <p className="text-right">QTY.</p>
          <p className="text-right">Price</p>
          <p className="text-right">Total</p>
        </div>
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="grid grid-cols-5 items-center mt-2 md:grid-cols-2 md:text-base"
            >
              <p className="col-span-2 text-text_dark dark:text-white font-medium md:col-span-1">
                {item.name} <br className="hidden md:block" />
                <span className="hidden md:block text-primary_text_color">
                  {item.quantity} x £{item.price}
                </span>
              </p>
              <p className="text-right md:hidden">{item.quantity}</p>
              <p className="text-right md:hidden">
                £{Number(item.price).toLocaleString()}
              </p>
              <p className="text-right text-text_dark dark:text-white font-medium md:col-span-1">
                £{Number(item.total).toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
      <div className="p-6 bg-dark_bg text-white flex items-center justify-between">
        <p>Amount Due</p>
        <p className="text-3xl font-bold">
          £{Number(invoice_total).toLocaleString()}
        </p>
      </div>
    </section>
  );
};

export default InvoiceItemsContainer;
