import { createContext, useContext, useEffect, useState } from "react";
import { InvoicePageContextProps, InvoicePageContextType } from "./types";
import { useParams } from "react-router-dom";
import { getSingleInvoice } from "../../services/api/invoice";
import { useGlobalContext } from "../Global/GlobalContext";

const InvoicePageContext = createContext({} as InvoicePageContextType);

export const InvoicePageProvider = ({ children }: InvoicePageContextProps) => {
  const { id } = useParams();
  const { setSingleInvoice } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getSingleInvoice(id!)
      .then((result) => {
        setSingleInvoice(result);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <InvoicePageContext.Provider
      value={{
        isLoading,
        setIsLoading,
        showDeleteModal,
        setShowDeleteModal,
      }}
    >
      {children}
    </InvoicePageContext.Provider>
  );
};

export const useInvoicePageContext = () => {
  return useContext(InvoicePageContext);
};
