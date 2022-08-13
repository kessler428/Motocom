import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
  name: "Inventory",
  initialState: {
    listInventory: [],
    pagination: {},
  },
  reducers: {
    setListInventory: (state, action) => {
      state.listInventory = action.payload;
    },
    setPaginationInventory: (state, action) => {
      state.pagination = action.payload;
    },
  },
});

export const { setListInventory, setPaginationInventory } = inventorySlice.actions;
