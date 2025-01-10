import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aboveRating: 0,
};
const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setAboveRating: (state, action) => {
      state.aboveRating = action.payload;
      console.log("updated rating", state.aboveRating);
    },
  },
});

export const { setAboveRating } = FilterSlice.actions;
export default FilterSlice.reducer;
