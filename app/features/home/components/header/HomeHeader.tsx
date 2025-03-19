import LogoSVG from "~/common/components/svg/LogoSVG";
import HomeHeaderUserInfo from "./HomeHeaderUserInfo";

function HomeHeader() {
  return (
    <section className="flex items-center justify-between mt-10">
      <LogoSVG />
      <HomeHeaderUserInfo />
    </section>
  );
}

export default HomeHeader;
