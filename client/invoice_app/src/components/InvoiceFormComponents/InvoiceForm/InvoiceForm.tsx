import { motion } from "framer-motion";
import SenderFieldset from "../SenderFieldset/SenderFieldset";
import ClientFieldset from "../ClientFieldset/ClientFieldset";
import ItemsFieldset from "../ItemsFieldset/ItemsFieldset";
import ButtonsFieldset from "../ButtonsFieldset/ButtonsFieldset";
import { useGlobalContext } from "../../../context/Global/GlobalContext";

const InvoiceForm = () => {
  const { isEditMode, handleSubmit, handleEdit } = useGlobalContext();
  return (
    <motion.div
      key="invoice_form"
      initial={{ x: "-100%" }} // Initial position off-screen to the left
      animate={{ x: 0 }} // Final position on-screen
      exit={{ x: "-100%" }} // Position when exiting off-screen to the left
      transition={{ duration: 0.3 }}
    >
      <form
        className="w-1/2 h-screen overflow-auto bg-white dark:bg-dark_bg lg:w-3/4 md:w-full"
        onSubmit={(e) => {
          e.preventDefault();
          !isEditMode ? handleSubmit() : handleEdit();
        }}
      >
        <section className="ml-[5.625rem] p-12 lg:ml-0 md:px-4 md:py-6 md:mt-[5.625rem]">
          <h1 className="text-[2.5rem] font-medium tracking-wide text-text_dark md:text-[1.5rem]">
            New Invoice
          </h1>

          <SenderFieldset />
          <ClientFieldset />
          <ItemsFieldset />
          <ButtonsFieldset />
        </section>
      </form>
    </motion.div>
  );
};

export default InvoiceForm;
