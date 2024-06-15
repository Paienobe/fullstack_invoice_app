import { invoiceInstance } from "../../axios/instances";

export const getAllInvoices = async () => {
  try {
    const request = await invoiceInstance.get("/");
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
