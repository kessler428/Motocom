import { createSlice } from "@reduxjs/toolkit";

export const creditsSlice = createSlice({
  name: "Credits",
  initialState: {
    listCredits: [],
    closedCreditsList: []
  },
  reducers: {
    setListCredits: (state, action) => {
      state.listCredits = action.payload;
    },
    setClosedCreditsList: (state, action) => {
      state.closedCreditsList = action.payload;
    },
  },
});

export const { setListCredits, setClosedCreditsList } = creditsSlice.actions;
