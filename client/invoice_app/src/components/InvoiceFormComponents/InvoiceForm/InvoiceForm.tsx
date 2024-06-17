import InputField from "../../UI/InputField/InputField";
import TermsDropdown from "../TermsDropdown/TermsDropdown";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const InvoiceForm = () => {
  return (
    <form className="w-1/2 h-screen overflow-auto bg-white">
      <section className="ml-[5.625rem] p-12">
        <h1 className="text-[2.5rem] font-medium tracking-wide text-text_dark">
          New Invoice
        </h1>
        <fieldset className="my-8 font-medium">
          <legend className="text-purple mb-4">Bill From</legend>
          <InputField label="Street Address" value="" />
          <div className="grid grid-cols-3 gap-4">
            <InputField label="City" value="" />
            <InputField label="Post Code" value="" />
            <InputField label="Country" value="" />
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-purple mb-4">Bill To</legend>
          <InputField label="Client's Name" value="" />
          <InputField label="Client's Email" value="" />
          <InputField label="Street Address" value="" />
          <div className="grid grid-cols-3 gap-4 mt-4">
            <InputField label="City" value="" />
            <InputField label="Post Code" value="" />
            <InputField label="Country" value="" />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <button
                className="h-[3.25rem] border border-light_border w-full flex items-center justify-between p-4"
                type="button"
              >
                17-06-2024
              </button>
              <div className="bg-white shadow-md absolute top-[-23rem]">
                <DayPicker mode="single" />
              </div>
            </div>
            <TermsDropdown />
          </div>
          <InputField label="Project Description" value="" />
        </fieldset>
      </section>
    </form>
  );
};

export default InvoiceForm;
