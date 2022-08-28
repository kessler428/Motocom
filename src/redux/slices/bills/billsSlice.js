import { createSlice } from "@reduxjs/toolkit";

export const billSlice = createSlice({
  name: "Bills",
  initialState: {
    typeOfStock: []
  },
  reducers: {
    setTypeOfStock: (state, action) => {
      state.typeOfStock = action.payload;
    },
  },
});

export const { setTypeOfStock } = billSlice.actions;
