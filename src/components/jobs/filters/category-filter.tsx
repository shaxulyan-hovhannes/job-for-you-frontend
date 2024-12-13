"use client";

import React, { useState, useMemo, ChangeEvent, useContext } from "react";

import { IntlContext } from "@/components/core/intl-provider";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import Card from "@/components/core/ui/card";

import { JOB_CATEGORIES } from "@/constants/job";
import JOB_SUB_CATEGORIES from "@/constants/job-sub-categories";

import { SelectOptionProps } from "@/types/common";

interface CategoryFilterProps {
  selectedOptions: string[];
  handleChange: (e: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

export default function CategoryFilter({
  selectedOptions = [],
  handleChange = () => {},
}: CategoryFilterProps) {
  const [viewAll, setViewAll] = useState<boolean>(false);

  const intlContext = useContext(IntlContext);

  const jobCategoriesData: SelectOptionProps[] = useMemo(() => {
    const jobCategories = viewAll
      ? [...JOB_CATEGORIES.slice(1)]
      : [...JOB_CATEGORIES.slice(1, 8)];

    return jobCategories.map((category) => {
      const categoryValue = category.value;

      if (categoryValue === "all_categories") return { ...category };

      const subCategories = JOB_SUB_CATEGORIES[categoryValue];

      return {
        ...category,
        title: `${subCategories.join(", ")}, etc.`,
      };
    });
  }, [viewAll]);

  const handleToggleViewAll = () => setViewAll(!viewAll);

  return (
    <Card title={intlContext?.translateData("job_categories")}>
      <FormGroup>
        {jobCategoriesData.map((category) => (
          <FormControlLabel
            key={category.id}
            control={
              <Checkbox
                onChange={handleChange}
                checked={selectedOptions.includes(category.value)}
                name={String(category.value)}
              />
            }
            label={intlContext?.translateData(category.value) ?? category.label}
            title={category?.title}
            sx={{ userSelect: "none" }}
          />
        ))}
      </FormGroup>
      <div className="flex justify-center">
        <Button
          className="!text-[1rem] !text-black"
          onClick={handleToggleViewAll}
        >
          {intlContext?.translateData(viewAll ? "view_less" : "view_more")}
        </Button>
      </div>
    </Card>
  );
}
