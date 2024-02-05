import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: { cart: cartReducer, user: userReducer },
});

export const StoreProvider = ({ children }) => {
  return <Provider store={appStore}>{children}</Provider>;
};

export default appStore;
