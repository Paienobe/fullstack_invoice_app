import axios from "axios";
import { BASE_API } from "../config";

export const invoiceInstance = axios.create({
  baseURL: `${BASE_API}/invoice`,
});
