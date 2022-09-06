import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
  name: "Inventory",
  initialState: {
    listInventory: [],
    oneProduct : [],
    typeOfStock: [],
    buttonState: false,
  },
  reducers: {
    setListInventory: (state, action) => {
      state.listInventory = action.payload;
    },
    setOneProduct: (state, action) => {
      state.oneProduct = action.payload;
    },
    setTypeOfStock: (state, action) => {
      state.typeOfStock = action.payload;
    },
    setButtonState: (state, action) => {
      state.buttonState = action.payload;
    }
  },
});

export const { setListInventory, setOneProduct, setTypeOfStock, setButtonState } = inventorySlice.actions;
