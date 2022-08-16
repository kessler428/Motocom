import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "Ui",
  initialState: {
    isLoading: false
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = uiSlice.actions;
