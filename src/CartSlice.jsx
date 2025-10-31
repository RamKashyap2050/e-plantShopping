import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // array of cart items
  },
  reducers: {
    // ✅ Add item to cart (or increase quantity)
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // ✅ convert "$15" → 15 for math operations
        const numericCost = parseFloat(cost.replace("$", ""));
        state.items.push({ name, image, cost: numericCost, quantity: 1 });
      }
    },

    // ✅ Remove item from cart
    removeItem: (state, action) => {
      const name = action.payload;
      state.items = state.items.filter((i) => i.name !== name);
    },

    // ✅ Update item quantity
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find((i) => i.name === name);

      if (existingItem && quantity > 0) {
        existingItem.quantity = quantity;
      } else if (existingItem && quantity === 0) {
        state.items = state.items.filter((i) => i.name !== name);
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
