import { createContext, useContext, useState } from "react";
import { FormContextProps, FormContextType, FormData } from "./types";
import { InvoiceData } from "../../components/InvoiceFormComponents/InvoiceForm/classes";
import { Address } from "../../services/api_response_types/invoice";

const FormContext = createContext({} as FormContextType);

export const FormContextProvider = ({ children }: FormContextProps) => {
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

  const updateTerms = (term: number) => {
    setFormData({ ...formData, payment_terms: term });
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
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
