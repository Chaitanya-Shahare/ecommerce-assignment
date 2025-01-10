import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart";
import counterReducer from "./slices/counter";
import filterReducer from "./slices/filter";

export const makeStore = () => {
  return configureStore({
    devTools: true,
    reducer: {
      counter: counterReducer,
      filter: filterReducer,
      cart: cartReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
