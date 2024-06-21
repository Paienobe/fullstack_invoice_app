import { createContext, useContext, useEffect } from "react";
import { FormContextProps, FormContextType, FormData } from "./types";
import { Address, Invoice } from "../../services/api_response_types/invoice";
import { createInvoice, updateInvoice } from "../../services/api/invoice";
import { useGlobalContext } from "../Global/GlobalContext";
import { InvoiceData } from "../../components/InvoiceFormComponents/InvoiceForm/classes";

const FormContext = createContext({} as FormContextType);

export const FormContextProvider = ({ children }: FormContextProps) => {
  const {
    setShowForm,
    invoices,
    setInvoices,
    formData,
    setFormData,
    setSingleInvoice,
  } = useGlobalContext();

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

  const handleEdit = () => {
    updateInvoice((formData as unknown as Invoice).id!, formData)
      .then(() => {
        setSingleInvoice(formData as unknown as Invoice);
      })
      .finally(() => {
        setFormData(new InvoiceData());
        setShowForm(false);
      });
  };

  return (
    <FormContext.Provider
      value={{
        updateFormData,
        updateNestedFormData,
        updateDate,
        updateTerms,
        handleSubmit,
        handleEdit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
