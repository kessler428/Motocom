import { createSlice } from "@reduxjs/toolkit";

export const asistenceSlice = createSlice({
  name: "Asistence",
  initialState: {
    listAsistence: [],
    paginationAsistence: {},
  },
  reducers: {
    setListAsistence: (state, action) => {
      state.listAsistence = action.payload;
    },
    setPaginationAsistence: (state, action) => {
      state.paginationAsistence = action.payload;
    },
  },
});

export const { setListAsistence, setPaginationAsistence } = asistenceSlice.actions;
