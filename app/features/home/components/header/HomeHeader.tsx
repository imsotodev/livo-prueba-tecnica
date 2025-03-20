import LogoSVG from "~/common/components/svg/LogoSVG";
import HomeHeaderUserInfo from "./HomeHeaderUserInfo";

function HomeHeader() {
  return (
    <section className="flex items-center justify-between z-20 bg-white pt-10 pb-5 px-2 sticky top-0">
      <LogoSVG />
      <HomeHeaderUserInfo />
    </section>
  );
}

export default HomeHeader;
