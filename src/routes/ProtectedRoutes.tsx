import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES_PATH } from "@enums/routesPath.enum";
import type { RootState } from "@store/store";

export const ProtectedRoutes = () => {
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.authentication
  );
  if (isAuthenticated) return <Outlet />;
  return <Navigate to={`/${ROUTES_PATH.LOGIN}`} />;
};
