import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { handleSignupCandidate, handleGetUserInfo } from "../actions";

import { User } from "@/types/common";

import { CryptoJsService } from "@/utils/crypto-js-service";

export interface EmployerState {
  loading: boolean;
  error: string | null | undefined;
  loginedUser: null | User;
  accessToken: null | string;
}

const initialState: EmployerState = {
  loading: false,
  error: null,
  loginedUser: null,
  accessToken: null,
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
        state.accessToken = null;
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(handleGetUserInfo.pending, (state) => {
        state.error = null;
        state.loginedUser = null;
        state.loading = true;
      })
      .addCase(handleGetUserInfo.fulfilled, (state, action) => {
        const encryptedAccessToken = action.payload?._v;

        if (encryptedAccessToken) {
          const decodedAccessToken =
            CryptoJsService.decrypt(encryptedAccessToken);
          state.accessToken = decodedAccessToken;
        }

        state.loginedUser = action.payload;
        state.loading = false;
      })
      .addCase(handleGetUserInfo.rejected, (state, action) => {
        state.loginedUser = null;
        state.accessToken = null;
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { resetLoginedUser } = UserSlice.actions;
export default UserSlice.reducer;
