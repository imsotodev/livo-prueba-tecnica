import { useState } from "react";
import CartModal from "./CartModal";
import CartSVG from "~/common/components/svg/CartSVG";
import useScroll from "~/common/hooks/useScroll";
import Spinner from "~/common/components/ui/Spinner";
import useCartQuery from "~/common/hooks/useCartQuery";

function Cart() {
  const { toggleScroll } = useScroll();
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
    toggleScroll();
  };
  const { isLoading, data, isError } = useCartQuery();
  if (isLoading) return <Spinner />;
  if (isError || !data) return <div>Erro carrinho</div>;
  return (
    <>
      <div className="p-1">
        <button className="w-8 cursor-pointer" onClick={toggle}>
          <CartSVG />
        </button>
      </div>
      <CartModal data={data} visible={show} closeModal={toggle} />
    </>
  );
}

export default Cart;
