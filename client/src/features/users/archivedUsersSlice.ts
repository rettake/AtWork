import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "./../../interfaces/IUser";
import { RootState } from "../../app/store";

interface IInitialState {
  archivedUsers: IUser[];
}

const initialState: IInitialState = {
  archivedUsers: [],
};

const archivedUsersSlice = createSlice({
  name: "archivedUsers",
  initialState: initialState,
  reducers: {
    addToArchived: (state, action: PayloadAction<IUser>) => {
      state.archivedUsers.push(action.payload);
    },
    removeFromArchived: (state, action: PayloadAction<number>) => {
      state.archivedUsers = state.archivedUsers.filter(
        (user) => user.id !== action.payload
      );
    },
  },
  extraReducers: {},
});

export default archivedUsersSlice.reducer;

export const { addToArchived, removeFromArchived } = archivedUsersSlice.actions;

export const selectArchivedUsers = (state: RootState) => state.archivedUsers;
