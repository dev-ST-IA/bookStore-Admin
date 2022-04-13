import { combineReducers } from "redux";
import authSlice from "./authSlice";
import modelSlice from "./modelSlice";
import { bookStoreApi } from "../services/bookStoreApi";
import  themeModeSlice  from './themeModeSlice'

export const reducer = combineReducers({
  auth: authSlice,
  model: modelSlice,
  themeMode: themeModeSlice,
  [bookStoreApi.reducerPath]: bookStoreApi.reducer,
});
