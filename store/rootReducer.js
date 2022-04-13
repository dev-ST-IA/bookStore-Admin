import { combineReducers } from "redux";
import authSlice from "./authSlice";
import modelSlice from "./modelSlice";
import { bookStoreApi } from "../services/bookStoreApi";

export const reducer = combineReducers({
  auth: authSlice,
  model: modelSlice,
  [bookStoreApi.reducerPath]: bookStoreApi.reducer,
});
