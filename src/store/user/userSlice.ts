import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  handleSignupCandidate,
  handleGetUserInfo,
  handleLogin,
} from "../actions";

import { User } from "@/types/common";

export interface EmployerState {
  loading: boolean;
  error: string | null | undefined;
  loginedUser: null | User;
}

const initialState: EmployerState = {
  loading: false,
  error: null,
  loginedUser: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetLoginedUser: (state) => {
      state.loading = false;
      state.error = null;
      state.loginedUser = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(handleSignupCandidate.pending, (state) => {
        state.error = null;
        state.loginedUser = null;
        state.loading = true;
      })
      .addCase(
        handleSignupCandidate.fulfilled,
        (state, action: PayloadAction<{ user: User }>) => {
          state.loginedUser = action.payload.user;
          state.loading = false;
        }
      )
      .addCase(handleSignupCandidate.rejected, (state, action) => {
        state.loginedUser = null;
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(handleGetUserInfo.pending, (state) => {
        state.error = null;
        state.loginedUser = null;
        state.loading = true;
      })
      .addCase(handleGetUserInfo.fulfilled, (state, action) => {
        state.loginedUser = action.payload;
        state.loading = false;
      })
      .addCase(handleGetUserInfo.rejected, (state, action) => {
        state.loginedUser = null;
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(handleLogin.pending, (state) => {
        state.error = null;
        state.loginedUser = null;
        state.loading = true;
      })
      .addCase(handleLogin.fulfilled, (state, action) => {
        state.loginedUser = action.payload;
        state.loading = false;
      })
      .addCase(handleLogin.rejected, (state, action) => {
        state.loginedUser = null;
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { resetLoginedUser } = UserSlice.actions;
export default UserSlice.reducer;
