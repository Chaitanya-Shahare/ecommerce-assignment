import { IProduct } from "@/app/page";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IItem {
  productId: number;
  quantity: number;
  product: IProduct;
}

const initialState: { items: IItem[] } = {
  items: [],
  // items: [
  //   {
  //     productId: 1,
  //     quantity: 1,
  //     product: {
  //       id: 1,
  //       title: "iPhone 13 Pro",
  //       description: "Apple iPhone 13 Pro",
  //       price: 999,
  //       rating: 4,
  //       category: "smartphones",
  //       image: "/images/iphone-13-pro.png",
  //       __v: 0,
  //     },
  //   },
  //   {
  //     productId: 2,
  //     quantity: 2,
  //     product: {
  //       id: 2,
  //       title: "MacBook Pro",
  //       description: "Apple MacBook Pro",
  //       price: 1999,
  //       rating: 5,
  //       category: "laptops",
  //       image: "/images/macbook-pro.png",
  //       __v: 0,
  //     },
  //   },
  // ],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IItem>) => {
      const item = state.items.find(
        (item: IItem) => item.productId === action.payload.productId,
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      console.log(state.items);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item: IItem) => item.productId !== action.payload.productId,
      );
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(
        (item: IItem) => item.productId === action.payload.productId,
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
