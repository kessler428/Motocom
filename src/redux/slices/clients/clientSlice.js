import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
  name: "Clients",
  initialState: {
    listClients: [],
    oneClient: {},
  },
  reducers: {
    setListClients: (state, action) => {
      state.listClients = action.payload;
    },
    setOneClient: (state, action) => {
      state.oneClient = action.payload;
    }
  },
});

export const { setListClients, setOneClient } = clientSlice.actions;
