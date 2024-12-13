import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "././../index";

const selectEmployersState = (state: RootState) => state.employers;

const selectEmployersEntities = createSelector(
  selectEmployersState,
  (employersState) => employersState.entities
);

const selectEmployersFilters = createSelector(
  selectEmployersState,
  (employersState) => employersState.filters
);

const selectEmployersLoading = createSelector(
  selectEmployersState,
  (employersState) => employersState.isLoading
);

export {
  selectEmployersEntities,
  selectEmployersFilters,
  selectEmployersLoading,
};
