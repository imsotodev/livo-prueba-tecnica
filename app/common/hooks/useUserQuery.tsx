import { useQuery } from "@tanstack/react-query";
import { userData } from "../api/user";

const useUserQuery = () => {
  const user = useQuery({
    queryKey: ["user"],
    queryFn: () => userData(),
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    data: user.data,
    isLoading: user.isLoading,
    isError: user.isError,
    error: user.error,
  };
};

export default useUserQuery;
