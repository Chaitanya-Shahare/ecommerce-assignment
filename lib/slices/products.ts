import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    // initializeProducts: async (state, action) => {
    //   state.status = "loading";
    // },
  },
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
