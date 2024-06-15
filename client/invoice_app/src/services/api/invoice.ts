import { invoiceInstance } from "../../axios/instances";

export const getAllInvoices = async () => {
  try {
    const request = await invoiceInstance.get("/");
    return request.data;
  } catch (error) {
    console.error(error);
  }
};
