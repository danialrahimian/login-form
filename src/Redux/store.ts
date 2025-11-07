import { configureStore, Tuple } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import { addUserMiddleware } from "./middlewares/addUserMiddleware";
import { getUserMiddleware } from "./middlewares/getUserMiddleware";
export const store = configureStore({
  devTools: true,
  reducer: userReducer,
  middleware: () =>
    new Tuple(getUserMiddleware, addUserMiddleware ),
});
