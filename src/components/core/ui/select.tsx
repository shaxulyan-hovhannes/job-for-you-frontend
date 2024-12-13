"use client";

import React, { ReactNode, isValidElement } from "react";
import {
  Select,
  MenuItem,
  SelectProps,
  SelectChangeEvent,
  SxProps,
  Theme,
} from "@mui/material";

import { SelectOptionProps } from "@/types/common";

type MuiSelectProps = SelectProps & {
  options: SelectOptionProps[];
  multiple?: boolean;
  sxProps?: SxProps<Theme>;
  onHandleChange?: null | ((value: string[]) => void);
  allProp?: string;
  value: string[] | undefined;
};

export default function MuiSelect({
  options,
  multiple = false,
  onHandleChange = null,
  sxProps = {},
  allProp = "all",
  value = [],
  ...rest
}: MuiSelectProps) {
  const handleAllOption = (
    value: unknown,
    options: { value: string | number }[]
  ) => {
    if (
      value === allProp ||
      (Array.isArray(value) && value.includes(allProp))
    ) {
      return options.map((option) => String(option.value));
    }
    return [];
  };

  const handlePartialSelection = (
    selectedValues: string[],
    options: { value: string | number }[]
  ) => {
    if (selectedValues.includes(allProp)) {
      return selectedValues.filter((value) => value !== allProp);
    }
    if (selectedValues.length === options.length - 1) {
      selectedValues.push(allProp);
    }
    return selectedValues;
  };

  const handleChange = (
    event: SelectChangeEvent<unknown>,
    child: ReactNode
  ) => {
    const { value } = event.target;

    const elementPropsValue = isValidElement(child)
      ? child.props.value
      : undefined;

    let selectedValues = Array.isArray(value)
      ? (value as (string | number)[]).map(String)
      : (value as string).split(",");

    if (multiple) {
      if (elementPropsValue === allProp) {
        selectedValues = handleAllOption(value, options);
      } else {
        selectedValues = handlePartialSelection(selectedValues, options);
      }
    }

    onHandleChange?.(selectedValues);
  };

  return (
    <Select
      onChange={handleChange}
      fullWidth
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
      sx={{ height: "100%", ...sxProps }}
      classes={{ root: "mui-select-root" }}
      multiple={multiple}
      value={value && value?.length > 0 ? value : [options[0].value]}
      {...rest}
    >
      {options.map((option) => (
        <MenuItem
          key={option.id ?? option.value}
          value={option.value}
          title={option.title}
        >
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
}
