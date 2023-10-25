import { RootState } from "../../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { usersApi } from "../../app/api/users";
import { IUser } from "../../interfaces/IUser";

export interface IUserInitalState {
  users: IUser[];
}

const initialState: IUserInitalState = {
  users: [],
};

const slice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      usersApi.endpoints.getAllUsers.matchFulfilled,
      (state, action) => {
        state.users = action.payload;
      }
    );
  },
});

export default slice.reducer;

export const selectPosts = (state: RootState) => state.users;