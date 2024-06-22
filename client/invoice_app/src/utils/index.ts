export const parseDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const makeNewItem = () => {
  return {
    id: new Date().getTime(),
    name: "",
    price: 0,
    quantity: 0,
    total: 0,
  };
};
