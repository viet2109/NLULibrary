import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
    },
    isFetching: null,
    error: null,
    success:null
  },
  reducers: {
    loginStart: (state) => {
      
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.login.currentUser = action.payload;
      state.error = false;
      state.success = true;
    },
    loginFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.success = false;
    },

    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state,action) => {
      state.isFetching = false;
      state.login.currentUser = action.payload
      state.error = false;
      state.success = true;
    },
    registerFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.success = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  registerStart,
  registerSuccess,
  registerFailed,
} = authSlice.actions;

export default authSlice.reducer;
