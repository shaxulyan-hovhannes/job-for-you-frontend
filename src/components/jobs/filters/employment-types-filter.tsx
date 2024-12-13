"use client";

import React, { ChangeEvent, useContext } from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Card from "@/components/core/ui/card";

import { IntlContext } from "@/components/core/intl-provider";

import { EMPLOYMENT_TYPES } from "@/constants/job";

interface WorkFormatFilterProps {
  selectedOptions: string[];
  handleChange: (e: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

export default function EmploymentTypesFilter({
  selectedOptions = [],
  handleChange = () => {},
}: WorkFormatFilterProps) {
  const intlContext = useContext(IntlContext);

  return (
    <Card title={intlContext?.translateData("employment_types")}>
      <FormGroup>
        {EMPLOYMENT_TYPES.slice(1).map((type) => (
          <FormControlLabel
            key={type.id}
            control={
              <Checkbox
                onChange={handleChange}
                checked={selectedOptions.includes(type.value)}
                name={type.value}
              />
            }
            label={intlContext?.translateData(type.value) ?? type.label}
            sx={{ userSelect: "none" }}
          />
        ))}
      </FormGroup>
    </Card>
  );
}
