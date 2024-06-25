import { v4 as uuid } from "uuid";
import { FormData, NumericItem } from "../context/Global/types";
import { Address } from "../services/api_response_types/invoice";

export const parseDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const makeNewItem = () => {
  return {
    id: uuid(),
    name: "",
    price: 0,
    quantity: 0,
    total: 0,
  };
};

export const parseDataForNewInvoice = (data: FormData) => {
  const removeAddressId = (address: Address) => {
    const { street, post_code, city, country } = address;
    return { street, post_code, city, country } as Address;
  };

  const removeItemId = (item: NumericItem) => {
    const { name, price, quantity, total } = item;
    return { name, price, quantity, total } as NumericItem;
  };

  const updatedItems = data.items.map((item) => {
    return removeItemId(item);
  });

  return {
    ...data,
    client_address: removeAddressId(data.client_address),
    sender_address: removeAddressId(data.sender_address),
    items: updatedItems,
  } as FormData;
};
