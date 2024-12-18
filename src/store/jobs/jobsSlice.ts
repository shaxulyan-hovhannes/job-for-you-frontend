import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { handleFetchJobs } from "../actions";

import { JobItem } from "@/types/common";

interface JobFilters {
  title?: string;
  category?: string[];
  location?: string[];
  workExperience: string[];
  workFormat?: string[];
  employmentType?: string[];
}

export interface JobsState {
  isLoading: boolean;
  error: string | null | undefined;
  entities: JobItem[];
  filters: JobFilters;
}

const initialState: JobsState = {
  isLoading: false,
  error: null,
  entities: [],
  filters: {
    title: "",
    category: [],
    location: [],
    workExperience: [],
    workFormat: [],
    employmentType: [],
  },
};

const JobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobsFilters: (state, action: PayloadAction<JobFilters>) => {
      state.filters = action.payload;
    },
    setJobFilterTitle: (state, action: PayloadAction<string>) => {
      state.filters.title = action.payload;
    },
    setJobFilterCategory: (state, action: PayloadAction<string[]>) => {
      state.filters.category = action.payload;
    },
    setJobFiltersLocation: (state, action: PayloadAction<string[]>) => {
      state.filters.location = action.payload;
    },
    setJobFiltersWorkExperience: (state, action: PayloadAction<string[]>) => {
      state.filters.workExperience = action.payload;
    },
    setJobFiltersWorkFormat: (state, action: PayloadAction<string[]>) => {
      state.filters.workFormat = action.payload;
    },
    setJobFiltersEmploymentType: (state, action: PayloadAction<string[]>) => {
      state.filters.employmentType = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(handleFetchJobs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(handleFetchJobs.fulfilled, (state) => {
        state.isLoading = false;
        // state.entities = action.payload;
      })
      .addCase(handleFetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setJobsFilters,
  setJobFilterTitle,
  setJobFilterCategory,
  setJobFiltersLocation,
  setJobFiltersWorkExperience,
  setJobFiltersWorkFormat,
  setJobFiltersEmploymentType,
} = JobsSlice.actions;
export default JobsSlice.reducer;
