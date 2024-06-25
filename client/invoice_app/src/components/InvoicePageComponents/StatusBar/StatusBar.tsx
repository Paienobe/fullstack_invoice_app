import { useIsMobile } from "../../../hooks/useIsMobile";
import StatusTile from "../../UI/StatusTile/StatusTile";
import InvoiceOptions from "../InvoiceOptions/InvoiceOptions";
import { StatusBarProps } from "./types";

const StatusBar = ({ invoice, openModal }: StatusBarProps) => {
  const isMobile = useIsMobile();
  return (
    <section className="h-[6.25rem] bg-white my-6 rounded-lg p-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4 font-light md:w-full md:justify-between">
        Status
        <StatusTile status={invoice.status} />
      </div>

      {!isMobile && <InvoiceOptions invoice={invoice} openModal={openModal} />}
    </section>
  );
};

export default StatusBar;
