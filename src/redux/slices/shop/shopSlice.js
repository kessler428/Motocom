import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "auth",
  initialState: {
    index: [],
  },
  reducers: {
    setIndex:(state, action) => {
      state.index = action.payload
    }
  },
});

export const { setIndex } = shopSlice.actions;
