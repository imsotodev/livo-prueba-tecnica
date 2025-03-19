import { Navigate, Outlet } from "react-router";
import { useEffect, useState } from "react";
import useUserQuery from "~/common/hooks/useUserQuery";
import userStore from "~/common/stores/userStore";
import Spinner from "../ui/Spinner";

function AuthLayout() {
  const { isError, isLoading, data } = useUserQuery();
  const [token, setToken] = useState<string | null | undefined>(undefined);
  const { setUser } = userStore();

  useEffect(() => {
    const localToken = localStorage.getItem("access-token");
    setToken(localToken);
  }, []);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, setUser]);

  if (token === undefined || isLoading) {
    return (
      <div className="absolute inset-0 grid place-content-center">
        <Spinner />
      </div>
    );
  }

  if (token === null || isError) {
    localStorage.removeItem("access-token");
    return <Navigate to="/entrar?error=nao-autorizado" replace />;
  }

  return <Outlet />;
}

export default AuthLayout;
