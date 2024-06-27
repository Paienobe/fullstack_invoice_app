import StatusTile from "../../UI/StatusTile/StatusTile";
import { InvoiceBarProps } from "./types";
import rightArrow from "../../../assets/icon-arrow-right.svg";
import { Link } from "react-router-dom";

const InvoiceBar = ({ invoice }: InvoiceBarProps) => {
  return (
    <Link to={`/invoice/${invoice.id}`}>
      <div className="h-[5.125rem] lg:h-auto bg-white dark:bg-secondary_dark rounded-lg border-[1px] border-transparent hover:border-purple transition-colors duration-300 cursor-pointer py-4 px-6 grid grid-cols-custom items-center lg:items-start gap-8 shadow-sm lg:grid lg:grid-cols-2 lg:gap-0 md:text-[0.875rem] md:px-4">
        <div className="lg:mb-4">
          <p className="font-semibold text-text_dark dark:text-white">
            <span className="font-normal text-primary_text_color">#</span>
            {invoice.id}
          </p>
        </div>
        <div className="lg:row-start-2">
          <p>Due {String(invoice.payment_due)}</p>
        </div>
        <div className="lg:row-start-1 lg:col-start-2 lg:text-right">
          <p className="truncate">{invoice.client_name}</p>
        </div>
        <div className="font-bold text-text_dark dark:text-white text-right text-[1.25rem] lg:col-start-1 lg:text-left">
          <p>£{Number(invoice.total).toLocaleString()}</p>
        </div>
        <div className="flex items-center justify-center gap-4 lg:row-start-2 lg:row-end-4 lg:col-start-2 lg:col-end-2 lg:justify-normal lg:ml-auto">
          <StatusTile status={invoice.status} />
          <img className="lg:hidden" src={rightArrow} alt="" />
        </div>
      </div>
    </Link>
  );
};

export default InvoiceBar;
