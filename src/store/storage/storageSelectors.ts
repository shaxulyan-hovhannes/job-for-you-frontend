import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "././../index";

const selectStorageState = (state: RootState) => state.storage;

const selectFilterSide = createSelector(
  selectStorageState,
  (storageState) => storageState.filterSide
);

const selectListingViewMode = createSelector(
  selectStorageState,
  (storageState) => storageState.listingViewMode
);

export { selectStorageState, selectFilterSide, selectListingViewMode };
