import StatusTile from "../../UI/StatusTile/StatusTile";
import { InvoiceBarProps } from "./types";

const InvoiceBar = ({ invoice }: InvoiceBarProps) => {
  return (
    <div className="h-[5.125rem] bg-white rounded-lg border-[1px] border-transparent hover:border-purple transition-colors duration-300 cursor-pointer py-4 px-6 grid grid-cols-5 items-center font-light gap-8">
      <div>
        <p className="font-semibold text-text_dark">
          <span className="font-normal text-primary_text_color">#</span>
          {invoice.id}
        </p>
      </div>
      <div>
        <p>Due {String(invoice.payment_due)}</p>
      </div>
      <div>
        <p className="truncate">{invoice.client_name}</p>
      </div>
      <div className="font-bold text-text_dark text-[1.125rem]">
        <p>£{invoice.total}</p>
      </div>
      <div className="flex items-center justify-center">
        <StatusTile status={invoice.status} />
      </div>
    </div>
  );
};

export default InvoiceBar;
