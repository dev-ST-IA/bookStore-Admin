import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import { bookStoreApi } from "../services/bookStoreApi";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [bookStoreApi.reducerPath]: bookStoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookStoreApi.middleware),
});
