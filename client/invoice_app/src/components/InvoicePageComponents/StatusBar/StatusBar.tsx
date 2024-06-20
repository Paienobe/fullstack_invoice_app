import Button from "../../UI/Button/Button";
import StatusTile from "../../UI/StatusTile/StatusTile";
import { StatusBarProps } from "./types";

const StatusBar = ({ status, openModal }: StatusBarProps) => {
  return (
    <section className="h-[6.25rem] bg-white my-6 rounded-lg p-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4 font-light">
        Status
        <StatusTile status={status} />
      </div>

      <div className="flex items-center gap-4">
        <Button
          text="Edit"
          bg_color="bg-gray"
          text_color="text-text_dark"
          clickFunc={() => {}}
        />
        <Button
          text="Delete"
          bg_color="bg-red"
          text_color="text-white"
          clickFunc={openModal}
        />
        {(status == "PENDING" || status == "DRAFT") && (
          <Button
            text={status == "DRAFT" ? "Mark as Pending" : "Mark as Paid"}
            bg_color="bg-purple"
            text_color="text-white"
            clickFunc={() => {}}
          />
        )}
      </div>
    </section>
  );
};

export default StatusBar;
