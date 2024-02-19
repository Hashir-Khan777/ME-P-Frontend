import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "./reducers";

export default configureStore({
  reducer: combineReducers,
  devTools: false,
});
