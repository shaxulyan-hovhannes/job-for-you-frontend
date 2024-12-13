"use client";

import { useAppSelector } from "@/store";

import { EMPLOYERS } from "@/constants/mocks";
import { LISTING_VIEW_MODES } from "@/constants/storage";

import EmployersListItem from "./list-item";
import EmployersGridItem from "./grid-item";

import { selectListingViewMode } from "@/store/storage/storageSelectors";

export default function EmployersListing() {
  const listingViewMode = useAppSelector(selectListingViewMode);
  return (
    <div
      className={
        listingViewMode === LISTING_VIEW_MODES.list
          ? "listing-section-block"
          : "listing-section-grid-block"
      }
    >
      {EMPLOYERS.map((job) =>
        listingViewMode === LISTING_VIEW_MODES.list ? (
          <EmployersListItem key={job.id} {...job} />
        ) : (
          <EmployersGridItem key={job.id} {...job} />
        )
      )}
    </div>
  );
}
