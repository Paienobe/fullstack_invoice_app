import { InvoiceItemsContainerProps } from "./types";

const InvoiceItemsContainer = ({
  items,
  invoice_total,
}: InvoiceItemsContainerProps) => {
  return (
    <section className="mt-12 rounded-lg overflow-hidden">
      <div className="p-6 bg-light_bg">
        <div className="grid grid-cols-5 items-center">
          <p className="col-span-2">Item Name</p>
          <p className="text-right">QTY.</p>
          <p className="text-right">Price</p>
          <p className="text-right">Total</p>
        </div>
        {items.map((item) => {
          return (
            <div key={item.name} className="grid grid-cols-5 items-center mt-2">
              <p className="col-span-2 text-text_dark font-medium">
                {item.name}
              </p>
              <p className="text-right">{item.quantity}</p>
              <p className="text-right">
                £{Number(item.price).toLocaleString()}
              </p>
              <p className="text-right text-text_dark font-medium">
                £{Number(item.total).toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
      <div className="p-6 bg-dark_blue text-white flex items-center justify-between">
        <p>Amount Due</p>
        <p className="text-3xl font-bold">
          £{Number(invoice_total).toLocaleString()}
        </p>
      </div>
    </section>
  );
};

export default InvoiceItemsContainer;
