"use client";

import React, { ChangeEvent, useContext } from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Card from "@/components/core/ui/card";

import { IntlContext } from "@/components/core/intl-provider";

import { WORK_EXPERIENCE } from "@/constants/job";

interface WorkFormatFilterProps {
  selectedOptions: string[];
  handleChange: (e: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

export default function WorkExperienceFilter({
  selectedOptions = [],
  handleChange = () => {},
}: WorkFormatFilterProps) {
  const intlContext = useContext(IntlContext);

  return (
    <Card title={intlContext?.translateData("work_experience")}>
      <FormGroup>
        {WORK_EXPERIENCE.slice(1).map((format) => (
          <FormControlLabel
            key={format.id}
            control={
              <Checkbox
                onChange={handleChange}
                checked={selectedOptions.includes(format.value)}
                name={format.value}
              />
            }
            label={intlContext?.translateData(format.value) ?? format.label}
            sx={{ userSelect: "none" }}
          />
        ))}
      </FormGroup>
    </Card>
  );
}
