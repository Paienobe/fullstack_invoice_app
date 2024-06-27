import { createContext, useContext, useEffect, useState } from "react";
import {
  Filters,
  FormData,
  GlobalContextProps,
  GlobalContextType,
  LoginResponse,
} from "./types";
import {
  Address,
  Invoice,
  InvoiceResponse,
} from "../../services/api_response_types/invoice";
import { createInvoice, updateInvoice } from "../../services/api/invoice";
import { InvoiceData } from "../../components/InvoiceFormComponents/InvoiceForm/classes";
import {
  getUserDataCookie,
  parseDataForNewInvoice,
  setUserDataCookie,
  updateBearerToken,
} from "../../utils";
import { toast } from "react-toastify";
import { invoiceInstance } from "../../axios/instances";
import { refreshToken } from "../../services/api/auth";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider = ({ children }: GlobalContextProps) => {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState<InvoiceResponse | null>(null);
  const [chosenFilter, setChosenFilter] = useState<Filters>({
    DRAFT: true,
    PENDING: true,
    PAID: true,
  });
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(new InvoiceData());
  const [isEditMode, setIsEditMode] = useState(false);
  const [singleInvoice, setSingleInvoice] = useState<Invoice | null>(null);
  const [loginResponse, setLoginResponse] = useState<LoginResponse | null>(
    getUserDataCookie("user-data")
  );

  useEffect(() => {
    if (!loginResponse || !loginResponse.access) {
      navigate("/login");
    }
  }, [loginResponse]);

  useEffect(() => {
    if (loginResponse) {
      updateBearerToken(invoiceInstance, loginResponse.access);
      setUserDataCookie("user-data", loginResponse);
    }
  }, [loginResponse]);

  useEffect(() => {
    const handleRefresh = () => {
      refreshToken()
        .then((result) => {
          if (loginResponse) {
            setLoginResponse({ ...loginResponse, access: result.access });
          }
        })
        .finally(() => {
          setTimeout(() => {
            handleRefresh();
          }, 5000);
        });
    };
    // if (loginResponse) {
    handleRefresh();
    // }
  }, []);

  useEffect(() => {
    let total = 0;
    formData.items.forEach((item) => {
      total += Number(item.total);
      total = Number(total.toFixed(2));
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
    createInvoice(parseDataForNewInvoice(formData))
      .then((result) => {
        if (invoices) {
          setInvoices({ ...invoices, results: [...invoices.results, result] });
        }
      })
      .finally(() => setShowForm(false));
  };

  const handleEdit = (updatedInvoice?: Invoice) => {
    const data = !updatedInvoice ? formData : updatedInvoice;
    updateInvoice((data as unknown as Invoice).id!, data as FormData)
      .then(() => {
        setSingleInvoice(data as unknown as Invoice);
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setFormData(new InvoiceData());
        setShowForm(false);
      });
  };

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
        singleInvoice,
        setSingleInvoice,
        updateFormData,
        updateNestedFormData,
        updateDate,
        updateTerms,
        handleSubmit,
        handleEdit,
        loginResponse,
        setLoginResponse,
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
