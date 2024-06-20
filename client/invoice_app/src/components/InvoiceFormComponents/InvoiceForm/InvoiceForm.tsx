import { motion } from "framer-motion";
import SenderFieldset from "../SenderFieldset/SenderFieldset";
import ClientFieldset from "../ClientFieldset/ClientFieldset";
import ItemsFieldset from "../ItemsFieldset/ItemsFieldset";
import ButtonsFieldset from "../ButtonsFieldset/ButtonsFieldset";
import { FormContextProvider } from "../../../context/Form/FormContext";

const InvoiceForm = () => {
  return (
    <motion.div
      key="invoice_form"
      initial={{ x: "-100%" }} // Initial position off-screen to the left
      animate={{ x: 0 }} // Final position on-screen
      exit={{ x: "-100%" }} // Position when exiting off-screen to the left
      transition={{ duration: 0.3 }}
    >
      <form className="w-1/2 h-screen overflow-auto bg-white">
        <FormContextProvider>
          <section className="ml-[5.625rem] p-12">
            <h1 className="text-[2.5rem] font-medium tracking-wide text-text_dark">
              New Invoice
            </h1>

            <SenderFieldset />
            <ClientFieldset />
            <ItemsFieldset />
            <ButtonsFieldset />
          </section>
        </FormContextProvider>
      </form>
    </motion.div>
  );
};

export default InvoiceForm;
