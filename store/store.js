import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import { bookStoreApi } from "../services/bookStoreApi";
import modelSlice from "./modelSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    model: modelSlice,
    [bookStoreApi.reducerPath]: bookStoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookStoreApi.middleware),
});
