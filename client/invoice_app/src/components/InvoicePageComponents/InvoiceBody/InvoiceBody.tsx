import InvoiceItemsContainer from "../InvoiceItemsContainer/InvoiceItemsContainer";
import { InvoiceBodyProps } from "./types";

const InvoiceBody = ({ invoice }: InvoiceBodyProps) => {
  return (
    <section className="px-[2.5rem] py-[3rem] bg-white rounded-lg shadow-sm font-light">
      <section className="grid grid-cols-4 text-[0.938rem] gap-y-4">
        <div className="col-span-3">
          <p className="text-text_dark text-[1.25rem] font-medium leading-5">
            <span className="text-primary_text_color font-normal">#</span>
            {invoice.id}
          </p>
          <p>{invoice.description}</p>
        </div>

        <div className="text-right">
          <p>{invoice.sender_address.street}</p>
          <p>{invoice.sender_address.city}</p>
          <p>{invoice.sender_address.post_code}</p>
          <p>{invoice.sender_address.country}</p>
        </div>

        <div>
          <div className="mb-8">
            <p>Invoice Date</p>
            <p className="text-text_dark text-[1.25rem] font-medium my-2">
              {String(invoice.created_at)}
            </p>
          </div>
          <div>
            <p>Payment Due</p>
            <p className="text-text_dark text-[1.25rem] font-medium my-2">
              {String(invoice.payment_due)}
            </p>
          </div>
        </div>

        <div>
          <p>Bill To</p>
          <p className="text-text_dark text-[1.25rem] font-medium my-2">
            {invoice.client_name}
          </p>
          <p>{invoice.client_address.street}</p>
          <p>{invoice.client_address.city}</p>
          <p>{invoice.client_address.post_code}</p>
          <p>{invoice.client_address.country}</p>
        </div>

        <div>
          <p>Sent To</p>
          <p className="text-text_dark text-[1.25rem] font-medium my-2">
            {invoice.client_email}
          </p>
        </div>
      </section>
      <InvoiceItemsContainer
        items={invoice.items}
        invoice_total={invoice.total}
      />
    </section>
  );
};

export default InvoiceBody;
