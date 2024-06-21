import { ReactNode } from "react";

export type InvoicePageContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  showDeleteModal: boolean;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type InvoicePageContextProps = {
  children: ReactNode;
};
