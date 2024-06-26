import axios from "axios";
import { invoiceInstance } from "../../axios/instances";
import { FormData } from "../../context/Global/types";
import { getUserDataCookie } from "../../utils";

export const getAllInvoices = async (params: { status: string[] }) => {
  try {
    const request = await invoiceInstance.get("/", { params });
    return request.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSingleInvoice = async (invoice_id: string) => {
  try {
    const request = await invoiceInstance.get(`/${invoice_id}`);
    return request.data;
  } catch (error) {
    console.error(error);
  }
};

export const createInvoice = async (data: FormData) => {
  try {
    const request = await invoiceInstance.post("/", data);
    return request.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteInvoice = async (id: string) => {
  try {
    const request = await invoiceInstance.delete(`/${id}/delete`);
    return request.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateInvoice = async (id: string, data: FormData) => {
  try {
    const request = await invoiceInstance.put(`/${id}/edit/`, data);
    return request.data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};

export const getNextInvoices = async (url: string) => {
  try {
    const bearerToken = getUserDataCookie("user_data")?.access;
    const request = await axios.get(url, {
      headers: { Authorization: `Bearer ${bearerToken}` },
    });
    return request.data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
