"use client";

import { useContext } from "react";
import { IntlContext } from "@/components/core/intl-provider";
import { useAppDispatch, useAppSelector } from "@/store";

import { selectListingViewMode } from "@/store/storage/storageSelectors";
import { setListingViewMode } from "@/store/storage/storageSlice";

import {
  LISTING_VIEW_MODES,
  LISTING_VIEW_MODE_STORAGE_KEY,
} from "@/constants/storage";

import ListAltIcon from "@mui/icons-material/ListAlt";
import WindowIcon from "@mui/icons-material/Window";

export default function EmployersListingHeader() {
  const intlContext = useContext(IntlContext);

  const dispatch = useAppDispatch();

  const listingViewMode = useAppSelector(selectListingViewMode);

  const handleSetViewModeList = () => {
    localStorage.setItem(
      LISTING_VIEW_MODE_STORAGE_KEY,
      LISTING_VIEW_MODES.list
    );
    dispatch(setListingViewMode(LISTING_VIEW_MODES.list));
  };

  const handleSetViewModeGrid = () => {
    localStorage.setItem(
      LISTING_VIEW_MODE_STORAGE_KEY,
      LISTING_VIEW_MODES.grid
    );
    dispatch(setListingViewMode(LISTING_VIEW_MODES.grid));
  };

  return (
    <div className="listing-section-header">
      <p>{intlContext?.translateData("employers")}</p>
      <div className="view-mode-block">
        <p
          className={`view-mode-block-item ${
            listingViewMode === LISTING_VIEW_MODES.list
              ? "view-mode-block-item--selected"
              : ""
          }`}
          onClick={handleSetViewModeList}
        >
          <ListAltIcon />
        </p>
        <p
          className={`view-mode-block-item ${
            listingViewMode === LISTING_VIEW_MODES.grid
              ? "view-mode-block-item--selected"
              : ""
          }`}
          onClick={handleSetViewModeGrid}
        >
          <WindowIcon />
        </p>
      </div>
    </div>
  );
}
