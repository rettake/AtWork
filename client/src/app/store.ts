import users from "../features/users/usersSlice";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { api } from "./api/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    users,
  },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare().concat(api.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
