import { createSlice, createAction } from "@reduxjs/toolkit";
import type { User } from "@/Types/userType";
import type { PayloadAction } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "users",
  initialState: [] as User[],
  reducers: {
    removeUser(state: User[], action: PayloadAction<User>) {
      return state.filter((user: User) => user.id !== action.payload.id);
    },
    editUser(state: User[], action: PayloadAction<User>) {
      state.map((user: User) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
          };
        }
      });
    },
  },
});
export const addUser = createAction("addUser", (user: User) => ({
  payload: user,
}));
export const getUsers = createAction("getUsers", (user: User[]) => ({
  payload: user,
}));
export const { removeUser, editUser } = userReducer.actions;
export default userReducer.reducer;
