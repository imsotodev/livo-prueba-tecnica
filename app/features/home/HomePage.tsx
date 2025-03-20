import ProductFilter from "../product/ProductFilter";
import ProductList from "../product/ProductList";
import ProductPagination from "../product/ProductPagination";
import HomeHeader from "./components/HomeHeader";

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
