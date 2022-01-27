import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { createStore, Store } from "redux";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store: Store<CardsState, CardAction> & {
  dispatch: DispatchType;
} = createStore(persistedReducer);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
