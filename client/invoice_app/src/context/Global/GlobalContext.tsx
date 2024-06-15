import { createContext, useContext, useEffect, useState } from "react";
import { GlobalContextProps, GlobalContextType } from "./types";
import { InvoiceResponse } from "../../services/api_response_types/invoice";
import { getAllInvoices } from "../../services/api/invoice";
const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider = ({ children }: GlobalContextProps) => {
  const [invoices, setInvoices] = useState<InvoiceResponse | null>(null);

  useEffect(() => {
    getAllInvoices().then((result) => {
      setInvoices(result);
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ invoices, setInvoices }}>
      {children}
    </GlobalContext.Provider>
  );
};

// eslint-disable-next-line
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
