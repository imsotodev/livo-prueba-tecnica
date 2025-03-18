import type { Route } from "./+types/home";
import HomePage from "~/features/home/HomePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "LIVOCO App" },
    { name: "Esta é uma descrição", content: "Welcome to livoco!" },
  ];
}

export default function Home() {
  return <HomePage />;
}
