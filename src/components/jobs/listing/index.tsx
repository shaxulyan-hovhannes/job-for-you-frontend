"use client";

import { useAppSelector } from "@/store";

import { JOBS } from "@/constants/mocks";
import { LISTING_VIEW_MODES } from "@/constants/storage";

import JobListItem from "./list-item";
import JobGridItem from "./grid-item";

import { selectListingViewMode } from "@/store/storage/storageSelectors";

export default function JobListing() {
  const listingViewMode = useAppSelector(selectListingViewMode);
  return (
    <div
      className={
        listingViewMode === LISTING_VIEW_MODES.list
          ? "listing-section-block"
          : "listing-section-grid-block"
      }
    >
      {JOBS.map((job) =>
        listingViewMode === LISTING_VIEW_MODES.list ? (
          <JobListItem key={job.id} {...job} />
        ) : (
          <JobGridItem key={job.id} {...job} />
        )
      )}
    </div>
  );
}
