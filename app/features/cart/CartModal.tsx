import CartSVG from "~/common/components/svg/CartSVG";
import CartList from "./CartList";
import SaleSVG from "~/common/components/svg/SaleSVG";
import MarkSVG from "~/common/components/svg/MarkSVG";
import type { ModalCartData } from "~/common/entity/cart";

interface Props {
  closeModal: () => void;
  visible: boolean;
  data: ModalCartData;
}

function CartModal({ closeModal, visible, data }: Props) {
  return (
    <div className={`modal overflow-y-auto ${!visible && "hidde"}`}>
      <div className="flex items-center justify-between z-20 bg-white pt-10 pb-5 px-2 sticky top-0 border-b">
        <div className="flex items-center gap-3">
          <div className="w-7">
            <CartSVG />
          </div>
          <span>Carinho de compras</span>
        </div>
        <button
          className="font-bold text-2xl size-8 grid place-content-center cursor-pointer"
          onClick={closeModal}
        >
          <MarkSVG />
        </button>
      </div>
      <div>
        <div className="bg-primary/15 px-5 py-3 mt-10">
          <span className="font-bold text-xl text-zinc-800">Produtos</span>
        </div>
        <CartList items={data?.items} />
        <div className="bg-primary/15 px-5 py-3 mt-10 flex items-center justify-between">
          <span className="text-zinc-800">Data de entrega</span>
          <span className="font-bold text-zinc-800">fecha</span>
        </div>
        <div className="bg-primary/15 px-5 py-3 mt-10">
          <span className="font-bold text-xl text-zinc-800">
            Cupom de desconto
          </span>
        </div>
        <div>
          <div className="flex items-center border border-primary/25 rounded m-5">
            <div className="bg-primary/15 p-2">
              <SaleSVG />
            </div>
            <input
              type="text"
              placeholder="Escreva a cupom"
              className="flex-1 p-2 outline-none"
            />
            <button className="px-3 text-primary cursor-pointer">
              Aplicar
            </button>
          </div>
        </div>
        <div className="border-t border-primary/50 pt-5 pb-10 px-5 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span>R$ {data?.subtotal}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Total</span>
            <span className="font-bold">R$ {data?.total.toFixed(2)}</span>
          </div>
          <button className="btn">Continuar comprando</button>
          <button className="btn">Fechar Compra</button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
