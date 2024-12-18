import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { handleFetchEmployers } from "../actions";

import { EmployerItem } from "@/types/common";

interface EmployersFilters {
  title?: string;
  category?: string[];
  location?: string[];
}

export interface EmployerState {
  isLoading: boolean;
  error: string | null | undefined;
  entities: EmployerItem[];
  filters: EmployersFilters;
}

const initialState: EmployerState = {
  isLoading: false,
  error: null,
  entities: [],
  filters: {
    title: "",
    category: [],
    location: [],
  },
};

const EmployerSlice = createSlice({
  name: "employers",
  initialState,
  reducers: {
    setEmployersFilters: (state, action: PayloadAction<EmployersFilters>) => {
      state.filters = action.payload;
    },
    setEmployersFilterTitle: (state, action: PayloadAction<string>) => {
      state.filters.title = action.payload;
    },
    setEmployersFilterCategory: (state, action: PayloadAction<string[]>) => {
      state.filters.category = action.payload;
    },
    setEmployersFiltersLocation: (state, action: PayloadAction<string[]>) => {
      state.filters.location = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(handleFetchEmployers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(handleFetchEmployers.fulfilled, (state) => {
        state.isLoading = false;
        // state.entities = action.payload;
      })
      .addCase(handleFetchEmployers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setEmployersFilters,
  setEmployersFilterTitle,
  setEmployersFilterCategory,
  setEmployersFiltersLocation,
} = EmployerSlice.actions;
export default EmployerSlice.reducer;
