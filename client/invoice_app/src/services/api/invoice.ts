import { invoiceInstance } from "../../axios/instances";

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
