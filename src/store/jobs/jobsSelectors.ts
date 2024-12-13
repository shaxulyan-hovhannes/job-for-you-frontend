import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "././../index";

const selectJobsState = (state: RootState) => state.jobs;

const selectJobEntities = createSelector(
  selectJobsState,
  (jobsState) => jobsState.entities
);

const selectJobFilters = createSelector(
  selectJobsState,
  (jobsState) => jobsState.filters
);

const selectJobsLoading = createSelector(
  selectJobsState,
  (jobsState) => jobsState.isLoading
);

export { selectJobEntities, selectJobFilters, selectJobsLoading };
