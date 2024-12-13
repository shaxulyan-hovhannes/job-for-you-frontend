import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FILTER_SIDES, LISTING_VIEW_MODES } from "@/constants/storage";

export type filterType = keyof typeof FILTER_SIDES;
export type listingViewModeType = keyof typeof LISTING_VIEW_MODES;

export interface StorageState {
  filterSide: filterType;
  listingViewMode: listingViewModeType;
}

const initialState: StorageState = {
  filterSide: FILTER_SIDES.right,
  listingViewMode: LISTING_VIEW_MODES.list,
};

const StorageSlice = createSlice({
  name: "storage",
  initialState,
  reducers: {
    setFilterSide: (state, action: PayloadAction<filterType>) => {
      state.filterSide = action.payload;
    },
    setListingViewMode: (state, action: PayloadAction<listingViewModeType>) => {
      state.listingViewMode = action.payload;
    },
  },
});

export const { setFilterSide, setListingViewMode } = StorageSlice.actions;

export default StorageSlice.reducer;
