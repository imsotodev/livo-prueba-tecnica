import type { CartAPIResponse } from "../entity/cart";
import http from "./config";

export const cartInfo = async () => {
  const { data } = await http.post<CartAPIResponse>("/orders/minicart/");
  return data;
};

export const createCart = async () => {
  const { data } = await http.post("/orders/createEmptyCart/");
  return data;
};

export const addToCart = async (sku: string) => {
  const { data } = await http.post("/orders/addItemCart/", {
    cartItem: {
      sku,
      qty: 1,
    },
  });
  return data;
};

export const delToCart = async (itemID: number) => {
  const { data } = await http.delete(`/orders/remove_item/${itemID}/`);
  return data;
};
