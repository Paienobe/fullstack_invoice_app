import { createContext, useContext, useEffect, useState } from "react";
import { Filters, GlobalContextProps, GlobalContextType } from "./types";
import { InvoiceResponse } from "../../services/api_response_types/invoice";
import { getAllInvoices } from "../../services/api/invoice";
import { InvoiceData } from "../../components/InvoiceFormComponents/InvoiceForm/classes";
const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider = ({ children }: GlobalContextProps) => {
  const [invoices, setInvoices] = useState<InvoiceResponse | null>(null);
  const [chosenFilter, setChosenFilter] = useState<Filters>({
    DRAFT: true,
    PENDING: true,
    PAID: true,
  });
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(new InvoiceData());
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const params = { status: ["PAID", "PENDING", "DRAFT"] };
    getAllInvoices(params).then((result) => {
      setInvoices(result);
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        invoices,
        setInvoices,
        chosenFilter,
        setChosenFilter,
        showForm,
        setShowForm,
        formData,
        setFormData,
        isEditMode,
        setIsEditMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// eslint-disable-next-line
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
