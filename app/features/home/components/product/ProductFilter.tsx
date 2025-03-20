import { useState } from "react";
import ArrowsSVG from "~/common/components/svg/ArrowsSVG";
import FilterSVG from "~/common/components/svg/FilterSVG";
import queryStore from "~/common/stores/productFilterStore";

function ProductFilter() {
  const orderBy: Record<number, string> = {
    1: "Relevancia",
    2: "Mais Vendidos",
    3: "Mais Recentes",
    4: "Descontos",
    5: "Maior Preco",
    6: "Menor Preco",
    7: "De A a Z",
    8: "De Z a A",
  };
  const { order, setOrder } = queryStore();
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  const setOrderNumber = (order: number) => {
    if (order !== 7 && order !== 8) return;
    setOrder(order);
    setShow(false);
  };

  return (
    <div className="flex flex-col gap-2 mt-3 px-3">
      <span className="font-bold text-2xl text-zinc-500">Armaçoes</span>
      <div className="flex items-center justify-between">
        <div
          onClick={toggleShow}
          className={`relative cursor-pointer rounded border transition-colors w-3/5 ${
            show ? "border-transparent bg-zinc-100" : "border-zinc-300 "
          }`}
        >
          <div className="flex items-center gap-2 h-10 px-2">
            <div className="w-5">
              <ArrowsSVG />
            </div>
            <span>Ordenar por {orderBy[order]}</span>
          </div>
          {show && (
            <div className="absolute top-10 z-10 bg-white w-full left-0">
              {Array.from(Object.entries(orderBy)).map(([key, value]) => (
                <div
                  key={key}
                  onClick={() => setOrderNumber(Number(key))}
                  className="cursor-pointer hover:bg-zinc-100 p-2"
                >
                  {value}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-2 text-zinc-500">
          <FilterSVG />
          <span>Filtrar</span>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
