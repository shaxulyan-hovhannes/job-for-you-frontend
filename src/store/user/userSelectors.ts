import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "././../index";

const selectUserState = (state: RootState) => state.user;

const selectUserLoading = createSelector(
  selectUserState,
  (userState) => userState.loading
);

export { selectUserState, selectUserLoading };
