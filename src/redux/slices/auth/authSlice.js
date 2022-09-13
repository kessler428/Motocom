import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    Access: null,
  },
  reducers: {
    setLoginAuth:(state, action) => {
      state.Access = action.payload
    },
    setLogout: (state, action) => {
      state.Access = action.payload
    }
  },
});

export const { setLoginAuth, setLogout } = authSlice.actions;
