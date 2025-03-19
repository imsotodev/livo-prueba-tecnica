import type { ProductAPIResponse } from "../entity/product";
import type { queryProps } from "../stores/productFilterStore";
import http from "./config";

export const getAllProducts = async (query: queryProps) => {
  const { category = 1, page = 1, limit = 10 } = query || {};
  const { data } = await http.get<ProductAPIResponse>(
    "/product_catalog/products/",
    {
      params: {
        category,
        page,
        limit,
      },
    }
  );
  return data;
};
