import { createSlice } from "@reduxjs/toolkit";

interface IFilter {
  aboveRating: number;
  minPrice: number;
  maxPrice: number;
  sort: "price low to high" | "price high to low" | "rating";
}

const initialState: IFilter = {
  aboveRating: 0,
  minPrice: 0,
  maxPrice: 20000,
  sort: "price low to high",
};
const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setAboveRating: (state, action) => {
      state.aboveRating = action.payload;
      console.log("updated rating", state.aboveRating);
    },

    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },

    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },

    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setAboveRating, setMaxPrice, setMinPrice, setSort } =
  FilterSlice.actions;
export default FilterSlice.reducer;
