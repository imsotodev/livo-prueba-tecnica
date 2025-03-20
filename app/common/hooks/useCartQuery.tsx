import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addToCart, cartInfo, createCart, delToCart } from "../api/cart";
import { useEffect } from "react";
import { toast } from "sonner";
import userStore from "../stores/userStore";

function useCartQuery() {
  const qc = useQueryClient();
  const { user } = userStore();

  // Traer informacion del carrito
  const cart = useQuery({
    queryKey: ["cart", user?.user_id], // agregamos el id del usuario para que sepa que debe actualizar la data por usuario y no cahee lo de la primera llamada
    queryFn: cartInfo,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10,
  });

  // agregar al carrito, esto genera una mutacion que invalida la peticion
  // de arriba por lo que actualiza la data
  const addMutation = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      qc.invalidateQueries(["cart"]);
    },
  });

  // aqui crea un carrito vacio igualmente invalida la primera peticion
  // para que se actualice
  const cartMutation = useMutation({
    mutationFn: createCart,
    onSuccess: () => {
      toast.success("Carrinho criado:");
      qc.invalidateQueries(["cart"]);
    },
    onError: (error) => {
      console.error("Error al crear carrito:", error);
    },
  });

  // aqui eliminamos el item e invalidamos nuevamente
  const delItemCart = useMutation({
    mutationFn: delToCart,
    onSuccess: () => {
      qc.invalidateQueries(["cart"]);
    },
  });

  // aqui validamos si hay error al traer por primera vez el carrito
  // para que en su defecto lo cree
  useEffect(() => {
    if (cart.isError && cart.isFetched) {
      toast.warning("Não há carrinho, criando...");
      cartMutation.mutate();
    }
  }, [cart.isError, cart.isFetched]);

  return {
    data: cart.data,
    isLoading: cart.isLoading,
    isError: cart.isError,
    error: cart.error,

    addToCart: addMutation.mutateAsync,
    isAdding: addMutation.isLoading,
    isAddingError: addMutation.isError,
    isAddingSuccess: addMutation.isSuccess,

    delToCart: delItemCart.mutateAsync,
    isDeleting: delItemCart.isLoading,
    isDeletingError: delItemCart.isError,
    isDeletingSuccess: delItemCart.isSuccess,
  };
}

export default useCartQuery;
