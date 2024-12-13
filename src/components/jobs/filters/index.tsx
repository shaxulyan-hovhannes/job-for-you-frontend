"use client";

import React, { ChangeEvent, useMemo } from "react";

import Filters from "@/components/core/filters";
import CategoryFilter from "@/components/jobs/filters/category-filter";
import LocationFilter from "@/components/jobs/filters/location-filter";
import TitleFilter from "@/components/jobs/filters/title-filter";
import WorkFormatFilter from "./work-format-filter";
import EmploymentTypesFilter from "./employment-types-filter";
import WorkExperienceFilter from "./work-experience";

import { useAppSelector, useAppDispatch } from "@/store";
import { selectJobFilters } from "@/store/jobs/jobsSelectors";
import {
  setJobFilterTitle,
  setJobFilterCategory,
  setJobFiltersLocation,
  setJobFiltersWorkFormat,
  setJobFiltersEmploymentType,
  setJobFiltersWorkExperience,
  setJobsFilters,
} from "@/store/jobs/jobsSlice";

import { JOB_CATEGORIES, WORK_EXPERIENCE, WORK_FORMATS } from "@/constants/job";
import { LOCATIONS } from "@/constants/locations";
import { SelectOptionProps } from "@/types/common";

export default function JobsFilters() {
  const dispatch = useAppDispatch();

  const jobFilters = useAppSelector(selectJobFilters);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setJobFilterTitle(e.target.value));
  };

  const handleClearField = () => {
    dispatch(setJobFilterTitle(""));
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

    let categoryFilter = [...(jobFilters.category ?? [])];

    if (checked) {
      categoryFilter = handleChecked(
        checkboxEntityName,
        categoryFilter,
        JOB_CATEGORIES
      );
    } else {
      categoryFilter = handleUnchecked(checkboxEntityName, categoryFilter);
    }

    dispatch(setJobFilterCategory(categoryFilter));
  };

  const handleLocationFilterChange = (
    e: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const checkboxEntityName = e.target.name;

    let locationFilter = [...(jobFilters.location ?? [])];

    if (checked) {
      locationFilter = handleChecked(
        checkboxEntityName,
        locationFilter,
        LOCATIONS
      );
    } else {
      locationFilter = handleUnchecked(checkboxEntityName, locationFilter);
    }

    dispatch(setJobFiltersLocation(locationFilter));
  };

  const handleWorkExperienceFilterChange = (
    e: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const checkboxEntityName = e.target.name;

    let workExperienceFilter = [...(jobFilters.workExperience ?? [])];

    if (checked) {
      workExperienceFilter = handleChecked(
        checkboxEntityName,
        workExperienceFilter,
        WORK_EXPERIENCE
      );
    } else {
      workExperienceFilter = handleUnchecked(
        checkboxEntityName,
        workExperienceFilter
      );
    }

    dispatch(setJobFiltersWorkExperience(workExperienceFilter));
  };

  const handleWorkFormatFilterChange = (
    e: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const checkboxEntityName = e.target.name;

    let workFormatFilter = [...(jobFilters.workFormat ?? [])];

    if (checked) {
      workFormatFilter = handleChecked(
        checkboxEntityName,
        workFormatFilter,
        WORK_FORMATS
      );
    } else {
      workFormatFilter = handleUnchecked(checkboxEntityName, workFormatFilter);
    }

    dispatch(setJobFiltersWorkFormat(workFormatFilter));
  };

  const handleEmploymentTypeFilterChange = (
    e: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const checkboxEntityName = e.target.name;

    let employmentTypeFilter = [...(jobFilters.employmentType ?? [])];

    if (checked) {
      employmentTypeFilter = handleChecked(
        checkboxEntityName,
        employmentTypeFilter,
        WORK_FORMATS
      );
    } else {
      employmentTypeFilter = handleUnchecked(
        checkboxEntityName,
        employmentTypeFilter
      );
    }

    dispatch(setJobFiltersEmploymentType(employmentTypeFilter));
  };

  const handleResetFilers = () => {
    dispatch(
      setJobsFilters({
        title: "",
        category: [],
        location: [],
        workExperience: [],
        workFormat: [],
        employmentType: [],
      })
    );
  };

  const isFilterSelected = useMemo(() => {
    return (
      !!jobFilters.title?.trim() ||
      jobFilters.category?.length ||
      jobFilters.location?.length ||
      jobFilters.workExperience?.length ||
      jobFilters.workFormat?.length ||
      jobFilters.employmentType?.length
    );
  }, [jobFilters]);

  const jobsFilters = useMemo(
    () => [
      <TitleFilter
        title={String(jobFilters.title)}
        handleChange={handleTitleChange}
        onClearField={handleClearField}
        key={1}
      />,
      <CategoryFilter
        selectedOptions={jobFilters.category as string[]}
        handleChange={handleCategoryFilterChange}
        key={2}
      />,
      <LocationFilter
        selectedOptions={jobFilters.location as string[]}
        handleChange={handleLocationFilterChange}
        key={3}
      />,
      <WorkExperienceFilter
        selectedOptions={jobFilters.workExperience as string[]}
        handleChange={handleWorkExperienceFilterChange}
        key={4}
      />,
      <WorkFormatFilter
        selectedOptions={jobFilters.workFormat as string[]}
        handleChange={handleWorkFormatFilterChange}
        key={5}
      />,
      <EmploymentTypesFilter
        selectedOptions={jobFilters.employmentType as string[]}
        handleChange={handleEmploymentTypeFilterChange}
        key={6}
      />,
    ],
    [jobFilters]
  );

  return (
    <Filters
      filtersEntities={jobsFilters}
      showResetIcon={!!isFilterSelected}
      onResetFilters={handleResetFilers}
    />
  );
}
