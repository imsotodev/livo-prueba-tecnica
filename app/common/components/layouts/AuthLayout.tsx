import { Navigate, Outlet } from "react-router";
import useUserQuery from "~/common/hooks/useUserQuery";
import Spinner from "../ui/Spinner";

function AuthLayout() {
  const { isLoading, isError } = useUserQuery();
  if (isLoading)
    return (
      <div className="absolute inset-0 grid place-content-center">
        <Spinner />
      </div>
    );
  if (isError) return <Navigate to="/entrar?error=nao-autorizado" replace />;
  return <Outlet />;
}

export default AuthLayout;
