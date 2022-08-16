import { createSlice } from "@reduxjs/toolkit";

export const reportsSlice = createSlice({
  name: "Reports",
  initialState: {
    listReports: [],
  },
  reducers: {
    setListReports: (state, action) => {
      state.listReports = action.payload;
    },
  },
});

export const { setListReports } = reportsSlice.actions;
