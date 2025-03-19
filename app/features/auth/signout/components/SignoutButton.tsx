import { useNavigate } from "react-router";
import { toast } from "sonner";
import { signout } from "~/common/api/auth";

function SignoutButton() {
  const nav = useNavigate();
  const handleSignout = () => {
    toast.promise(signout, {
      loading: "Cerrando sesión...",
      success: () => {
        localStorage.removeItem("access-token");
        nav("/entrar");
        return "Sesión cerrada correctamente";
      },
      error: () => {
        nav("/entrar");
        return "Erro de autenticação";
      },
    });
  };
  return (
    <button onClick={handleSignout} className="w-full h-full text-zinc-500 hover:bg-zinc-200/50 cursor-pointer transition-colors ">
      Sair
    </button>
  );
}

export default SignoutButton;
