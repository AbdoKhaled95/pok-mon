import "./i18n";
import { AppRouter } from "@routes/AppRouter";
import "./App.scss";
import LazyMotionProvider from "@libraries/framerMotion/lazyMotionProvider/LazyMotionProvider";
const App = () => {
  return (
    <LazyMotionProvider>
      <AppRouter />
    </LazyMotionProvider>
  );
};

export default App;
