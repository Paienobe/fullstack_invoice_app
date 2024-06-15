import { StatusTileProps, StatusTypes } from "./types";
import clsx from "clsx";
import { GoDotFill } from "react-icons/go";

const StatusTile = ({ status }: StatusTileProps) => {
  const statusOption: StatusTypes = {
    PAID: { color: "text-green", bgColor: "bg-light_green_bg", text: "Paid" },
    PENDING: {
      color: "text-orange_yellow",
      bgColor: "bg-light_orange_yellow",
      text: "Pending",
    },
    DRAFT: { color: "text-text_dark", bgColor: "bg-gray", text: "Draft" },
  };
  return (
    <div
      className={clsx(
        "h-[3.125rem] w-[8rem] rounded-lg flex items-center justify-center gap-2 font-medium",
        statusOption[status].color,
        statusOption[status].bgColor
      )}
    >
      <GoDotFill />
      {statusOption[status].text}
    </div>
  );
};

export default StatusTile;
