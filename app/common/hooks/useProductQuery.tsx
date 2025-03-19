import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api/product";
import queryStore from "../stores/productFilterStore";

function useProductQuery() {
  const { limit, category, page } = queryStore();

  const res = useQuery({
    queryKey: ["products", category, limit, page],
    queryFn: () => getAllProducts({ category, limit, page }),
    refetchOnWindowFocus: false,
    cacheTime: 1000 * 60 * 10, 
    staleTime: 1000 * 60 * 5,
  });

  return {
    products: res.data?.data,
    isLoading: res.isLoading,
    pagination: res.data?.pagination,
  };
}

export default useProductQuery;
