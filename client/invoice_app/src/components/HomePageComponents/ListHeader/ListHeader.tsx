import Button from "../../UI/Button/Button";
import plus from "../../../assets/icon-plus.svg";

const ListHeader = () => {
  return (
    <section className="flex item-center justify-between">
      <div>
        <h1 className="text-[2rem] text-black font-semibold">Invoices</h1>
        <p>There are 7 total invoices</p>
      </div>
      <div>
        <Button
          text="New Invoice"
          icon={plus}
          bg_color="purple"
          text_color="red-500"
          clickFunc={() => {}}
        />
      </div>
    </section>
  );
};

export default ListHeader;
