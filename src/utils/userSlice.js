import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { name: "", age: "" },
  reducers: {
    addUser: (state, action) => {
      return { name: action.payload.name, age: action.payload.age };
    },
    removeUser: () => {
      return { name: "", age: "" };
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
