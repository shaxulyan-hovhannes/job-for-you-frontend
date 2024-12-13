"use client";

import React, { ChangeEvent, useMemo } from "react";

import Filters from "@/components/core/filters";

import CategoryFilter from "./category-filter";
import LocationFilter from "./location-filter";
import TitleFilter from "./title-filter";

import { useAppSelector, useAppDispatch } from "@/store";

import { selectEmployersFilters } from "@/store/employers/employersSelectors";

import {
  setEmployersFilterTitle,
  setEmployersFilterCategory,
  setEmployersFiltersLocation,
  setEmployersFilters,
} from "@/store/employers/employersSlice";

import { JOB_CATEGORIES } from "@/constants/job";
import { LOCATIONS } from "@/constants/locations";
import { SelectOptionProps } from "@/types/common";

export default function EmployersFilters() {
  const dispatch = useAppDispatch();

  const employerFilters = useAppSelector(selectEmployersFilters);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmployersFilterTitle(e.target.value));
  };

  const handleClearField = () => {
    dispatch(setEmployersFilterTitle(""));
  };

  const handleChecked = (
    checkboxEntityName: string,
    filterItem: string[],
    allEntities: SelectOptionProps[]
  ) => {
    if (checkboxEntityName === "all") {
      return allEntities.map((category) => category.value);
    }

    const isOneStepFromAll = filterItem.length === allEntities.length - 2;

    return isOneStepFromAll
      ? [...filterItem, checkboxEntityName, "all"]
      : [...filterItem, checkboxEntityName];
  };

  const handleUnchecked = (
    checkboxEntityName: string,
    filterItem: string[]
  ) => {
    if (checkboxEntityName === "all") {
      return [];
    }

    return filterItem.filter(
      (item) => item !== checkboxEntityName && item !== "all"
    );
  };

  const handleCategoryFilterChange = (
    e: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const checkboxEntityName = e.target.name;

    let categoryFilter = [...(employerFilters.category ?? [])];

    if (checked) {
      categoryFilter = handleChecked(
        checkboxEntityName,
        categoryFilter,
        JOB_CATEGORIES
      );
    } else {
      categoryFilter = handleUnchecked(checkboxEntityName, categoryFilter);
    }

    dispatch(setEmployersFilterCategory(categoryFilter));
  };

  const handleLocationFilterChange = (
    e: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const checkboxEntityName = e.target.name;

    let locationFilter = [...(employerFilters.location ?? [])];

    if (checked) {
      locationFilter = handleChecked(
        checkboxEntityName,
        locationFilter,
        LOCATIONS
      );
    } else {
      locationFilter = handleUnchecked(checkboxEntityName, locationFilter);
    }

    dispatch(setEmployersFiltersLocation(locationFilter));
  };

  const handleResetFilers = () => {
    dispatch(
      setEmployersFilters({
        title: "",
        category: [],
        location: [],
      })
    );
  };

  const isFilterSelected = useMemo(() => {
    return (
      !!employerFilters.title?.trim() ||
      employerFilters.category?.length ||
      employerFilters.location?.length
    );
  }, [employerFilters]);

  /* eslint-disable react-hooks/exhaustive-deps */
  const employersFilters = useMemo(
    () => [
      <TitleFilter
        title={String(employerFilters.title)}
        handleChange={handleTitleChange}
        onClearField={handleClearField}
        key={1}
      />,
      <CategoryFilter
        selectedOptions={employerFilters.category as string[]}
        handleChange={handleCategoryFilterChange}
        key={2}
      />,
      <LocationFilter
        selectedOptions={employerFilters.location as string[]}
        handleChange={handleLocationFilterChange}
        key={3}
      />,
    ],
    [employerFilters]
  );

  return (
    <Filters
      filtersEntities={employersFilters}
      showResetIcon={!!isFilterSelected}
      onResetFilters={handleResetFilers}
    />
  );
}
