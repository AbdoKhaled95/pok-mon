import { Outlet } from "react-router-dom";
import "./Layout.scss";

import { Suspense } from "react";
import RouteLoader from "@components/loaders/routeLoader/RouteLoader";

const Layout = () => {
  return (
    <div id="layout" className="layout">
      <main id="main" className={`layout-main`}>
        <Suspense fallback={<RouteLoader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
