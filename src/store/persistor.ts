import { persistStore } from "redux-persist";
import store from "@store/store";

const persistor = persistStore(store);

export default persistor;
