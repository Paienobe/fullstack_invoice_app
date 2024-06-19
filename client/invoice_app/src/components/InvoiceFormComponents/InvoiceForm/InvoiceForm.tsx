import { useGlobalContext } from "../../../context/Global/GlobalContext";
import Button from "../../UI/Button/Button";
import InputField from "../../UI/InputField/InputField";
import DatePicker from "../DatePicker/DatePicker";
import InvoiceItem from "../InvoiceItem/InvoiceItem";
import TermsDropdown from "../TermsDropdown/TermsDropdown";
import { motion } from "framer-motion";

const InvoiceForm = () => {
  const { setShowForm } = useGlobalContext();
  return (
    <motion.div
      initial={{ x: "-100%" }} // Initial position off-screen to the left
      animate={{ x: 0 }} // Final position on-screen
      exit={{ opacity: 0 }} // Position when exiting off-screen to the left
      transition={{ duration: 1 }}
    >
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
              <DatePicker />
              <TermsDropdown />
            </div>
            <InputField label="Project Description" value="" />
          </fieldset>

          <fieldset>
            <legend className="text-2xl mb-3">Item List</legend>
            <InvoiceItem />

            <div className="mt-2">
              <Button
                text="+ Add New Item"
                bg_color="bg-secondary_light"
                text_color="text-text_dark"
                width="w-full"
                clickFunc={() => {}}
              />
            </div>
          </fieldset>

          <div className=" flex items-center justify-between mt-8">
            <Button
              text="Discard"
              bg_color="bg-secondary_light"
              text_color="text-primary_text_color"
              clickFunc={() => setShowForm(false)}
            />
            <div className="flex items-center gap-4">
              <Button
                text="Save as Draft"
                bg_color="bg-secondary_light"
                text_color="text-text_dark"
                clickFunc={() => {}}
              />
              <Button
                text="Save and Send"
                bg_color="bg-purple"
                text_color="text-white"
                clickFunc={() => {}}
              />
            </div>
          </div>
        </section>
      </form>
    </motion.div>
  );
};

export default InvoiceForm;
