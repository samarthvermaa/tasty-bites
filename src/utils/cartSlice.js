import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    cleatCart: (state, action) => {
      state.items = [];
    },
  },
});

console.log("cartSlice--->", cartSlice);

export const { addItem, removeItem, cleatCart } = cartSlice.actions;
export default cartSlice.reducer;
