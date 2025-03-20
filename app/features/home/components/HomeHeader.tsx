import LogoSVG from "~/common/components/svg/LogoSVG";
import HomeHeaderUserInfo from "./HomeHeaderUserInfo";
import Cart from "~/features/cart/Cart";

function HomeHeader() {
  return (
    <section className="flex items-center justify-between z-20 bg-white pt-10 pb-5 px-2 sticky top-0">
      <LogoSVG />
      <div className="flex items-center gap-1">
        <HomeHeaderUserInfo />
        <Cart />
      </div>
    </section>
  );
}

export default HomeHeader;
