import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
  name: "Inventory",
  initialState: {
    listInventory: [],
  },
  reducers: {
    setListInventory: (state, action) => {
      state.listInventory = action.payload;
    }
  },
});

export const { setListInventory } = inventorySlice.actions;
