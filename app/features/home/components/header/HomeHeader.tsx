import LogoSVG from "~/common/components/svg/LogoSVG";
import HomeHeaderUserInfo from "./HomeHeaderUserInfo";

function HomeHeader() {
  return (
    <section className="flex items-center justify-between z-10 bg-white pt-10 sticky top-0">
      <LogoSVG />
      <HomeHeaderUserInfo />
    </section>
  );
}

export default HomeHeader;
