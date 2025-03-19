import { useEffect } from "react";
import { Outlet, useSearchParams } from "react-router";
import { toast, Toaster } from "sonner";

function ScreenLayout() {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.get("error") === "nao-autorizado") {
      toast.error("Você não está autorizado, Conecte-se.");
    }
  }, [searchParams]);

  return (
    <div className="min-w-xs w-full mx-auto  max-w-md">
      <Outlet />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default ScreenLayout;
