import HomeHeader from "./components/header/HomeHeader";
import ProductFilter from "./components/product/ProductFilter";
import ProductList from "./components/product/ProductList";
import ProductPagination from "./components/product/ProductPagination";

function HomePage() {
  return (
    <main>
      <HomeHeader />
      <ProductFilter />
      <ProductList />
      <ProductPagination />
    </main>
  );
}

export default HomePage;
