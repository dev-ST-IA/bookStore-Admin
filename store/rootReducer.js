import { combineReducers } from "redux";
import authSlice from "./authSlice";
import modelSlice from "./modelSlice";
import { bookStoreApi } from "../services/bookStoreApi";
import themeModeSlice from "./themeModeSlice";
import booksQuerySlice from "./booksQuerySlice";
import ordersQuerySlice from "./orderQuerySlice";
import customersQuerySlice from "./customersQuerySlice";
import toasterSlice from "./toasterSlice";
import salesQuerySlice from "./salesQuerySlice";

export const reducer = combineReducers({
  auth: authSlice,
  model: modelSlice,
  themeMode: themeModeSlice,
  booksQuery: booksQuerySlice,
  ordersQuery: ordersQuerySlice,
  customersQuery: customersQuerySlice,
  toaster: toasterSlice,
  salesQuery: salesQuerySlice,
  [bookStoreApi.reducerPath]: bookStoreApi.reducer,
});
