import { Outlet } from "react-router";
import { Toaster } from "sonner";

function ScreenLayout() {
  return (
    <div className="min-w-xs w-full mx-auto  max-w-md">
      <Outlet />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default ScreenLayout;
