import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
  name: "Clients",
  initialState: {
    listClients: [],
  },
  reducers: {
    setListClients: (state, action) => {
      state.listClients = action.payload;
    },
  },
});

export const { setListClients } = clientSlice.actions;
