import { createContext, useContext, useEffect, useState } from "react";
import { Filters, GlobalContextProps, GlobalContextType } from "./types";
import { InvoiceResponse } from "../../services/api_response_types/invoice";
import { getAllInvoices } from "../../services/api/invoice";
const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider = ({ children }: GlobalContextProps) => {
  const [invoices, setInvoices] = useState<InvoiceResponse | null>(null);
  const [chosenFilter, setChosenFilter] = useState<Filters>({
    PAID: true,
    PENDING: true,
    DRAFT: true,
  });

  useEffect(() => {
    getAllInvoices().then((result) => {
      setInvoices(result);
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{ invoices, setInvoices, chosenFilter, setChosenFilter }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// eslint-disable-next-line
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
