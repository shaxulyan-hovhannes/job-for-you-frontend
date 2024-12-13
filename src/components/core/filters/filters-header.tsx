"use client";

import React, { ChangeEvent, useContext } from "react";
import { useAppDispatch, useAppSelector } from "@/store";

import { IntlContext } from "../intl-provider";

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import TuneIcon from "@mui/icons-material/Tune";

import { FILTER_SIDE_STORAGE_KEY, FILTER_SIDES } from "@/constants/storage";

import { selectFilterSide } from "@/store/storage/storageSelectors";
import { setFilterSide } from "@/store/storage/storageSlice";

interface FiltersHeaderProps {
  showResetIcon: boolean;
  onResetFilters: () => void;
}

export default function FiltersHeader({
  showResetIcon = false,
  onResetFilters = () => {},
}: FiltersHeaderProps) {
  const intlContext = useContext(IntlContext);

  const dispatch = useAppDispatch();

  const filterSide = useAppSelector(selectFilterSide);

  const handleSwitchFilterSide = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;

    const filterSide = checked ? FILTER_SIDES.right : FILTER_SIDES.left;

    localStorage.setItem(FILTER_SIDE_STORAGE_KEY, filterSide);
    dispatch(setFilterSide(filterSide));
  };

  return (
    <div className="filters-section-header">
      <div className="filter-icon-block">
        <TuneIcon />
        {intlContext?.translateData("filters")}
      </div>
      <FormControlLabel
        sx={{ marginLeft: "2px" }}
        control={
          <Switch
            size="small"
            checked={filterSide === FILTER_SIDES.right}
            onChange={handleSwitchFilterSide}
          />
        }
        label={filterSide === FILTER_SIDES.left ? "On Left" : "On Right"}
      />
      {showResetIcon ? (
        <div className="reset" onClick={onResetFilters}>
          {intlContext?.translateData("reset_filters")} x
        </div>
      ) : null}
    </div>
  );
}
