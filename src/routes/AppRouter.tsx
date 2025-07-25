import { ROUTES_PATH } from "@enums/routesPath.enum";
import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { lazy, Suspense } from "react";
import Layout from "@components/layouts/layout/Layout";
import RouteLoader from "@components/loaders/routeLoader/RouteLoader";

const PokémonsPage = lazy(
  () => import("@modules/pokémon/pages/pokémonsPage/PokémonsPage")
);
const PokémonPage = lazy(
  () => import("@modules/pokémon/pages/pokémonPage/PokémonPage")
);
const NoPageFound = lazy(() => import("@components/noPageFound/NoPageFound"));
const Forbidden = lazy(() => import("@components/forbidden/Forbidden"));

export const AppRouter = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Suspense fallback={<RouteLoader />}>
          <Routes location={location}>
            <Route element={<Layout />}>
              <Route index element={<PokémonsPage />} />
              <Route
                path={`/${ROUTES_PATH.POKEMON}`}
                element={<PokémonsPage />}
              />
              <Route
                path={`/${ROUTES_PATH.POKEMON}/:id`}
                element={<PokémonPage />}
              />
            </Route>

            <Route
              path="*"
              element={<Navigate to={`/${ROUTES_PATH.NOT_FOUND}`} />}
            />
            <Route
              path={`/${ROUTES_PATH.NOT_FOUND}`}
              element={<NoPageFound />}
            />
            <Route path={`/${ROUTES_PATH.FORBIDDEN}`} element={<Forbidden />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
};
