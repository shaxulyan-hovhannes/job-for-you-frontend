import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  handleSignupCandidate,
  handleGetUserInfo,
  handleLogin,
} from "../actions";

import { User } from "@/types/common";

import { USER_ROLES } from "@/constants/users";

export interface UserState {
  loading: boolean;
  error: null | undefined | string;
  success: null | undefined | string;
  isAuthenticated: null | undefined | boolean;
  id: null | undefined | string;
  is_verified: boolean;
  role: keyof typeof USER_ROLES;
  _v: null | undefined | string;
}

function resetUserState(state: UserState) {
  state.isAuthenticated = null;
  state.id = null;
  state.is_verified = false;
  state.role = USER_ROLES.guest;
  state._v = null;
}

const initialState: UserState = {
  loading: false,
  error: null,
  success: null,

  isAuthenticated: null,
  id: null,
  is_verified: false,
  role: USER_ROLES.guest,
  _v: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetLoginedUser: (state) => {
      state.loading = false;
      state.error = null;
      state.success = null;

      resetUserState(state);
    },
    setIsUserAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(handleSignupCandidate.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;

        resetUserState(state);
      })
      .addCase(
        handleSignupCandidate.fulfilled,
        (
          state,
          action: PayloadAction<Omit<UserState, "loading" | "error">>
        ) => {
          const payload = action.payload;

          state.isAuthenticated = payload.isAuthenticated;
          state.id = payload.id;
          state.is_verified = payload.is_verified;
          state.role = payload.role;
          state._v = payload._v;
          state.success = payload.success;

          state.loading = false;
        }
      )
      .addCase(handleSignupCandidate.rejected, (state, action) => {
        resetUserState(state);

        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(handleGetUserInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;

        resetUserState(state);
      })
      .addCase(handleGetUserInfo.fulfilled, (state, action) => {
        const payload = action.payload;

        console.log("payload", payload);

        state.isAuthenticated = payload.isAuthenticated;
        state.id = payload.id;
        state.is_verified = payload.is_verified;
        state.role = payload.role;
        state._v = payload._v;
        state.success = payload.success;

        state.loading = false;
      })
      .addCase(handleGetUserInfo.rejected, (state, action) => {
        resetUserState(state);

        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(handleLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;

        resetUserState(state);
      })
      .addCase(handleLogin.fulfilled, (state, action) => {
        const payload = action.payload;

        state.isAuthenticated = payload.isAuthenticated;
        state.id = payload.id;
        state.is_verified = payload.is_verified;
        state.role = payload.role;
        state._v = payload._v;
        state.success = payload.success;

        state.loading = false;
      })
      .addCase(handleLogin.rejected, (state, action) => {
        resetUserState(state);

        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { resetLoginedUser, setIsUserAuthenticated } = UserSlice.actions;
export default UserSlice.reducer;
