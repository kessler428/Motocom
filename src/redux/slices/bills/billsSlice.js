import { createSlice } from "@reduxjs/toolkit";

export const billSlice = createSlice({
  name: "Bills",
  initialState: {
    typeOfStock: [],
    historyOfBills: [],
    oneBill: {},
  },
  reducers: {
    setTypeOfStock: (state, action) => {
      state.typeOfStock = action.payload;
    },
    setHistoryOfBills: (state, action) => {
      state.historyOfBills = action.payload;
    },
    setOneBill: (state, action) => {
      state.oneBill = action.payload;
    }
  },
});

export const { setTypeOfStock, setHistoryOfBills, setOneBill } = billSlice.actions;
