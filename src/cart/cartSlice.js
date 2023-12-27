import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   cart:[]
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: "mmmmmmmmmm",
  //     quantity: 4,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++, (item.totalPrice = item.unitPrice * item.quantity);
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--, ( item.totalPrice = item.unitPrice * item.quantity );
      if(item.quantity===0)cartSlice.caseReducers.deleteItem(state,action)
    },
    deleteItem(state, action) {
      const index = state.cart.find((item) => item.pizzaId === action.payload);
      state.cart.splice(index, 1);
    },
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
export const {
  addItem,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  deleteItem,
} = cartSlice.actions;
export default cartSlice.reducer;
