import CameraSVG from "~/common/components/svg/CAmeraSVG";
import LivoGlassesFront from "~/assets/livo-glasses-front.png";
import { addToCart } from "~/common/api/cart";

function ProductItem() {
  const handleAddToCart = () => {
    addToCart({
      id: 1,
      name: "Livo",
      price: 599,
      quantity: 1,
    });
  };
  return (
    <div>
      <div className="relative bg-zinc-100 aspect-square p-5 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <CameraSVG />
            <small className="font-light text-sm">Provador virtual</small>
          </div>
          <div className="border rounded-full text-sm px-1.5 p py-0.5 font-light">
            <span>30% Off</span>
          </div>
        </div>
        <div>
          <div className="grid place-content-center">
            <span className="bg-primary rounded-full px-5 py-1.5 text-center text-white">
              Gratis, Comprando lentes LIVO
            </span>
          </div>
        </div>
        <div>
          <img src={LivoGlassesFront} alt="" />
        </div>
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="bg-zinc-300 rounded-full size-10"></div>
          ))}
          <div className="bg-white grid place-content-center text-xl rounded-full size-10">
            +1
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <span>ART</span>
          <span>R$ 599,00</span>
        </div>
        <div className="flex items-center justify-between text-primary text-sm font-light">
          <span>CARAMELO</span>
          <span>6x R$ 99,83</span>
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
