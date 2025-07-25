import { ROUTES_PATH } from "@enums/routesPath.enum";
import type { RootState } from "@store/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const NotAuthenticatedRoute = () => {
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.authentication
  );
  if (isAuthenticated) return <Navigate to={`/${ROUTES_PATH.HOME}`} />;
  return <Outlet />;
};

export default NotAuthenticatedRoute;
