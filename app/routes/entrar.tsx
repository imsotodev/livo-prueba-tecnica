import type { Route } from "./+types/home";
import SigninPage from "~/features/auth/signin/EntrarPage";

export function meta({}: Route.MetaArgs) {
  return [{ title: "signin" }, { name: "signin", content: "entrar ao livoco" }];
}

export default function () {
  return <SigninPage />;
}
