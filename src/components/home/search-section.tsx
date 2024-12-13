"use client";

import React, { useMemo, ChangeEvent, useEffect, useContext } from "react";
import Link from "next/link";
// import debounce from "lodash.debounce";

import { IntlContext } from "../core/intl-provider";

import Grid from "@mui/material/Grid2";

import MuiTextField from "../core/ui/textfield";
import MuiSelect from "../core/ui/select";
import MuiButton from "../core/ui/button";

import { JOB_CATEGORIES } from "@/constants/job";
import { LOCATIONS } from "@/constants/locations";
import JOB_SUB_CATEGORIES from "@/constants/job-sub-categories";

import { useAppSelector, useAppDispatch } from "@/store";
import { selectJobFilters } from "@/store/jobs/jobsSelectors";
import {
  setJobFilterTitle,
  setJobFilterCategory,
  setJobFiltersLocation,
} from "@/store/jobs/jobsSlice";
import paths from "@/constants/paths";

export default function SearchSection() {
  const intlContext = useContext(IntlContext);

  const dispatch = useAppDispatch();

  const jobFilters = useAppSelector(selectJobFilters);

  const jobCategoriesOptionData = useMemo(
    () =>
      JOB_CATEGORIES.map((category) => {
        const categoryValue = category.value;

        if (categoryValue === "all_categories") return { ...category };

        const subCategories = JOB_SUB_CATEGORIES[categoryValue];

        return {
          ...category,
          title: `${subCategories.join(", ")}, etc.`,
        };
      }),
    []
  );
  const onLocationSelectChange = (value: string[]) => {
    dispatch(setJobFiltersLocation(value));
  };

  const onJobCategorySelectChange = (value: string[]) => {
    dispatch(setJobFilterCategory(value));
  };

  // const debouncedSetJobTitle = useRef(
  //   debounce((value: string) => {
  //     dispatch(
  //       setJobsFilters({
  //         title: value,
  //       })
  //     );
  //   }, 100)
  // ).current;

  const onJobTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setJobFilterTitle(e.target.value));
  };

  const handleClearField = () => {
    dispatch(setJobFilterTitle(""));
  };

  useEffect(() => {
    dispatch(setJobFilterTitle(""));

    dispatch(setJobFilterCategory([JOB_CATEGORIES[0].value]));

    dispatch(setJobFiltersLocation([LOCATIONS[0].value]));

    return () => {
      dispatch(setJobFilterCategory([]));

      dispatch(setJobFiltersLocation([]));
    };
  }, []);

  return (
    <div className="home-search-section-wrapper">
      <Grid
        container
        className={"home-search-section-grid-block"}
        spacing={2}
        flexWrap={"wrap"}
      >
        <Grid size={{ lg: 3, md: 6, sm: 6, xs: 12 }}>
          <MuiSelect
            options={LOCATIONS}
            onHandleChange={onLocationSelectChange}
            value={jobFilters.location}
          />
        </Grid>
        <Grid size={{ lg: 3, md: 6, sm: 6, xs: 12 }}>
          <MuiSelect
            options={jobCategoriesOptionData}
            onHandleChange={onJobCategorySelectChange}
            value={jobFilters.category}
          />
        </Grid>
        <Grid size={{ lg: 3, md: 6, sm: 6, xs: 12 }}>
          <MuiTextField
            placeholder={intlContext?.translateData("job_title")}
            onChange={onJobTitleChange}
            value={jobFilters.title ?? ""}
            onClearField={handleClearField}
          />
        </Grid>
        <Grid size={{ lg: 3, md: 6, sm: 6, xs: 12 }}>
          <Link href={paths.jobs}>
            <MuiButton>{intlContext?.translateData("apply")}</MuiButton>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
