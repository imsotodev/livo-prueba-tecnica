import useProductQuery from "~/common/hooks/useProductQuery";
import ProductSkeleton from "./ProductSkeleton";
import ProductItem from "./ProductItem";

function ProductList() {
  const { products, isLoading } = useProductQuery();
  if (isLoading || !products) return <ProductSkeleton />;

  return (
    <div>
      <ul className="px-5 py-10">
        {products.map((product) => (
          <ProductItem key={product.sku} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
