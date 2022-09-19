import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "auth",
  initialState: {
    index: {}
  },
  reducers: {
    setIndex:(state, action) => {
      state.index = action.payload
    }
  },
});

export const { setIndex } = adminSlice.actions;
