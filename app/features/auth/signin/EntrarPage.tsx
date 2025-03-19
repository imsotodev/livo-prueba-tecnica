import SigninForm from "./components/SigninForm";
import SigninGlasses from "./components/SigninGlasses";
import SigninHeader from "./components/SigninHeader";
import SigninHero from "./components/SigninHero";

function EntrarPage() {
  return (
    <main className="flex gap-10 flex-col overflow-hidden relative h-screen">
      <SigninHeader />
      <SigninHero />
      <SigninForm />
      <SigninGlasses />
    </main>
  );
}

export default EntrarPage;
