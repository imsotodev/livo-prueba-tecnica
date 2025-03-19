import Glasses from "~/assets/livo-glasses.png";
function SigninGlasses() {
  return (
    <div className="relative h-full">
      <img
        src={Glasses}
        alt="glasses"
        className="w-100 scale-150 rotate-30 top-0 mt-10 -translate-x-10"
      />
    </div>
  );
}

export default SigninGlasses;
