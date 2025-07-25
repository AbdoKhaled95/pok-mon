import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import store from "@store/store";
import persistor from "@store/persistor";
import { Provider } from "react-redux";
import AppLoader from "@components/loaders/appLoader/AppLoader";
import MuiThemeProvider from "@libraries/mui/ThemeProvider.mui";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({});
const App = lazy(() => import("./App"));
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<AppLoader />}>
        <MuiThemeProvider>
          <BrowserRouter>
            <Suspense fallback={<AppLoader />}>
              <QueryClientProvider client={queryClient}>
                <App />
              </QueryClientProvider>
            </Suspense>
          </BrowserRouter>
        </MuiThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
