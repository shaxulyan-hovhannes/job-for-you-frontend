import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "././../index";

const selectUserState = (state: RootState) => state.user;

const selectLoginedUser = createSelector(
  selectUserState,
  (jobsState) => jobsState.loginedUser
);

const selectSignupCandidateLoading = createSelector(
  selectUserState,
  (userState) => userState.loading
);

export { selectUserState, selectLoginedUser, selectSignupCandidateLoading };
