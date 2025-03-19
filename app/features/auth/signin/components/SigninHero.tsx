import UserSVG from "~/common/components/svg/UserSVG";

function SigninHero() {
  return (
    <section className="flex items-center justify-center gap-5 py-4">
      <UserSVG />
      <span className="text-xl">Olá, identifique-se</span>
    </section>
  );
}

export default SigninHero;
