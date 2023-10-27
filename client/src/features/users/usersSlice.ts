import { RootState } from "../../app/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
  reducers: {
    removeUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    // addUserToArchived: {},
    // removeUserFromArchived: {}
  },
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

export const { removeUser } = slice.actions;

export const selectUsers = (state: RootState) => state.users;
