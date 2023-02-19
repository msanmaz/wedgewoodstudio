import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { id, title, price } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({ id, title, price, quantity: 1 });
      }
      state.total += price;
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        state.total += item.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
        state.total -= item.price;
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.total -= item.price * item.quantity;
      }
    },
  },
});

export const { addItem, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
