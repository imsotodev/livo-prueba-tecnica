import { Outlet } from "react-router";

function ScreenLayout() {
  return (
    <div className="min-w-xs w-full mx-auto  max-w-md">
      <Outlet />
    </div>
  );
}

export default ScreenLayout;
