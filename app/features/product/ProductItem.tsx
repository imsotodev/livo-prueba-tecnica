import CameraSVG from "~/common/components/svg/CameraSVG";

import type { Product } from "~/common/entity/product";
import ProductColors from "./ProductColors";
import ProductImages from "./ProductImages";
import { toast } from "sonner";
import useCartQuery from "~/common/hooks/useCartQuery";

interface props {
  product: Product;
}
function ProductItem({ product }: props) {
  const color1 = product.attributes[8]?.value_attribute_option_1 || null;
  const color2 = product.attributes[8]?.value_attribute_option_2 || null;
  const [name, color] = product.name.split(" - ");
  const price = product.price.toFixed(2);
  const partPrice = (product.price / 6).toFixed(2);

  const { addToCart } = useCartQuery();

  const handleAddToCart = () => {
    toast.promise(addToCart(product.sku), {
      loading: "Adicionando ao carrinho...",
      success: (res) => {
        console.log(res);
        return "Produto adicionado ao carrinho";
      },
      error: (err) => {
        console.log(err);
        return "Erro ao adicionar ao carrinho";
      },
    });
  };

  return (
    <div>
      <div className="relative bg-zinc-100 aspect-square p-5 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-1 items-center">
            <CameraSVG />
            <small className="font-light text-sm">Provador virtual</small>
          </div>
          <div className="border rounded-full text-sm px-1.5 p py-0.5 font-light">
            <span>30% Off</span>
          </div>
        </div>
        <div>
          <div className="grid place-content-center h-9">
            <span className="bg-primary rounded-full px-5 py-1.5 text-center text-white">
              Gratis, Comprando lentes LIVO
            </span>
          </div>
        </div>
        <div>
          <ProductImages images={product?.images} />
        </div>
        <ProductColors color1={color1} color2={color2} />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="uppercase">{name}</span>
          <span>R$ {price}</span>
        </div>
        <div className="flex items-center justify-between text-primary text-sm font-light">
          <span className="uppercase">{color}</span>
          <span>6x R$ {partPrice}</span>
        </div>
        <div className="grid place-content-center mt-5">
          <button
            onClick={handleAddToCart}
            className="px-5 py-1 rounded-full border border-primary text-primary bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
