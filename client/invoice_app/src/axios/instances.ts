import axios from "axios";
import { BASE_API } from "../config";
import QueryString from "qs";

export const invoiceInstance = axios.create({
  baseURL: `${BASE_API}/invoice`,
  withCredentials: true,
  paramsSerializer: (params) =>
    QueryString.stringify(params, { arrayFormat: "repeat" }),
});

export const authInstance = axios.create({
  baseURL: `${BASE_API}/auth`,
  withCredentials: true,
});
