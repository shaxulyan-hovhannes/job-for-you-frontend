import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { handleSignupCandidate } from "../actions";

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
        state.loading = true;
        state.error = null;
        state.loginedUser = null;
      })
      .addCase(
        handleSignupCandidate.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.loginedUser = action.payload.user;
        }
      )
      .addCase(handleSignupCandidate.rejected, (state, action) => {
        state.loading = false;
        state.loginedUser = null;
        state.error = action.error.message;
      });
  },
});

export const { resetLoginedUser } = UserSlice.actions;
export default UserSlice.reducer;
