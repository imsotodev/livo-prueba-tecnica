import type { CartResumeItem } from "~/common/entity/cart";
import { useState } from "react";
import useCartQuery from "~/common/hooks/useCartQuery";
import { toast } from "sonner";

interface Props {
  item: CartResumeItem;
}

function CartItem({ item }: Props) {
  const { delToCart } = useCartQuery();
  const [excluir, setExcluir] = useState(false);
  const toggleExcluir = () => setExcluir(!excluir);
  const handleDelete = () => {
    toast.promise(delToCart(item.item_id), {
      loading: "Excluindo...",
      success: (res) => {
        console.log(res);
        return "Excluido";
      },
      error: (err) => {
        console.log(err);
        return "Error";
      },
    });
  };
  return (
    <div className="relative w-full flex justify-end">
      <div
        onClick={toggleExcluir}
        className={`flex flex-1 bg-white cursor-pointer transition-transform  absolute w-full h-25 flex-col py-5 px-5 ${
          excluir ? "-translate-x-25" : ""
        }`}
      >
        <div className="flex items-center font-semibold text-sm justify-between">
          <span>{item.name}</span>
          <span>R$ {item.price}</span>
        </div>
        <span className="text-primary text-sm">SKU: {item.sku}</span>
        <span className="text-xs text-zinc-500">
          Quantitade: {item.qty.split(".")[0]}
        </span>
      </div>
      <button
        onClick={handleDelete}
        className="bg-rose-500 cursor-pointer text-white size-25 transition-all flex flex-col items-center justify-center"
      >
        <span>Excluir</span>
      </button>
    </div>
  );
}

export default CartItem;
