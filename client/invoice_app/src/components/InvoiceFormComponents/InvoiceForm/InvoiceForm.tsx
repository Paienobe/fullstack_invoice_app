import { useState } from "react";
import { motion } from "framer-motion";
import { FormData } from "./types";
import { Address } from "../../../services/api_response_types/invoice";
import SenderFieldset from "../SenderFieldset/SenderFieldset";
import ClientFieldset from "../ClientFieldset/ClientFieldset";
import ItemsFieldset from "../ItemsFieldset/ItemsFieldset";
import ButtonsFieldset from "../ButtonsFieldset/ButtonsFieldset";
import { InvoiceData } from "./classes";

const InvoiceForm = () => {
  const [formData, setFormData] = useState(new InvoiceData());

  const updateFormData = (key: keyof FormData, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const updateNestedFormData = (
    outer_key: keyof FormData,
    inner_key: keyof Address,
    value: string
  ) => {
    setFormData({
      ...formData,
      [outer_key]: { ...(formData[outer_key] as Address), [inner_key]: value },
    });
  };

  const updateDate = (value: Date) => {
    setFormData({ ...formData, payment_due: value });
  };

  return (
    <motion.div
      key="invoice_form"
      initial={{ x: "-100%" }} // Initial position off-screen to the left
      animate={{ x: 0 }} // Final position on-screen
      exit={{ x: "-100%" }} // Position when exiting off-screen to the left
      transition={{ duration: 0.3 }}
    >
      <form className="w-1/2 h-screen overflow-auto bg-white">
        <section className="ml-[5.625rem] p-12">
          <h1 className="text-[2.5rem] font-medium tracking-wide text-text_dark">
            New Invoice
          </h1>

          <SenderFieldset
            formData={formData}
            updateNestedFormData={updateNestedFormData}
          />
          <ClientFieldset
            formData={formData}
            updateFormData={updateFormData}
            updateNestedFormData={updateNestedFormData}
            updateDate={updateDate}
          />
          <ItemsFieldset formData={formData} setFormData={setFormData} />
          <ButtonsFieldset />
        </section>
      </form>
    </motion.div>
  );
};

export default InvoiceForm;
