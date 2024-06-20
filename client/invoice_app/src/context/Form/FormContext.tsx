import { createContext, useContext, useEffect, useState } from "react";
import { FormContextProps, FormContextType, FormData } from "./types";
import { InvoiceData } from "../../components/InvoiceFormComponents/InvoiceForm/classes";
import { Address } from "../../services/api_response_types/invoice";
import { createInvoice } from "../../services/api/invoice";
import { useGlobalContext } from "../Global/GlobalContext";

const FormContext = createContext({} as FormContextType);

export const FormContextProvider = ({ children }: FormContextProps) => {
  const { setShowForm, invoices, setInvoices } = useGlobalContext();
  const [formData, setFormData] = useState(new InvoiceData());

  useEffect(() => {
    let total = 0;
    formData.items.forEach((item) => {
      total += item.total;
    });
    setFormData({ ...formData, total });
  }, [formData.items]);

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

  const updateTerms = (term: number) => {
    setFormData({ ...formData, payment_terms: term });
  };

  const handleSubmit = () => {
    createInvoice(formData)
      .then((result) => {
        if (invoices) {
          setInvoices({ ...invoices, results: [...invoices.results, result] });
        }
      })
      .finally(() => setShowForm(false));
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        updateFormData,
        updateNestedFormData,
        updateDate,
        updateTerms,
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
