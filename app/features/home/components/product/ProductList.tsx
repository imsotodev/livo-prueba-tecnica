import useProductQuery from "~/common/hooks/useProductQuery";
import ProductSkeleton from "./ProductSkeleton";
import ProductItem from "./ProductItem";
import queryStore from "~/common/stores/productFilterStore";

function ProductList() {
  const { products, isLoading } = useProductQuery();
  const { order } = queryStore();
  if (isLoading || !products) return <ProductSkeleton />;

  const orderProducts = products.sort((a, b) => {
    const AtoZ = a.name.localeCompare(b.name);
    const ZtoA = b.name.localeCompare(a.name);
    return order === 7 ? AtoZ : ZtoA;
  });

  return (
    <div>
      <ul className="px-5 pt-10 pb-40">
        {orderProducts.map((product) => (
          <ProductItem key={product.sku} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
