"use client";

import { useState, useContext } from "react";
import { JobItem } from "@/types/common";

import CompanyLogo from "@/assets/company_logo.svg";

import { IntlContext } from "@/components/core/intl-provider";

import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import UpdateIcon from "@mui/icons-material/Update";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

// interface JobListItemProps extends JobItem {}

export default function JobListItem({
  title = "",
  location = "",
  workFormat = "",
  employmentType = "",
  employerName = "",
  employerLogo = "",
  createdAt = "",
  deadline = "",
  workExperience,
}: JobItem) {
  const [showTags, setShowTags] = useState<boolean>(false);

  const intlContext = useContext(IntlContext);

  const handleOpenTags = () => setShowTags(true);

  const handleCloseTags = () => setShowTags(false);

  return (
    <div className="listing-section-list-item">
      <div className="listing-section-list-item-logo-block ">
        <img src={employerLogo || CompanyLogo.src} alt="Company logo" />
      </div>
      <div className="listing-section-list-item-main-info-block">
        <p className="employer-name">{employerName}</p>
        <p className="main-title">{title}</p>
        <div className="published_deadline_block">
          {showTags ? (
            <>
              <p className="job-location">
                <LocationOnIcon sx={{ fontSize: "1rem" }} />
                {intlContext?.translateData(location)}
              </p>
              <span className="invisible">-</span>
              <p>
                <BusinessCenterIcon sx={{ fontSize: "1rem" }} />
                {intlContext?.translateData(workExperience)}
              </p>
              <p>
                <BusinessCenterIcon sx={{ fontSize: "1rem" }} />
                {intlContext?.translateData(workFormat)}
              </p>
              <p>
                <BusinessCenterIcon sx={{ fontSize: "1rem" }} />
                {intlContext?.translateData(employmentType)}
              </p>
            </>
          ) : (
            <>
              <p title="Pulished at" className="job-published-at">
                <EventAvailableIcon sx={{ fontSize: "1rem" }} />
                {intlContext?.setLocaleDate(createdAt)}
              </p>
              -
              <p title="Deadline" className="job-deadline">
                <UpdateIcon sx={{ fontSize: "1rem" }} />
                {intlContext?.setLocaleDate(deadline)}
              </p>
            </>
          )}
        </div>
      </div>
      <div className="listing-section-list-item-actions-block">
        <div
          className="listing-section-list-item-actions-block-hover-tags"
          onMouseEnter={handleOpenTags}
          onMouseLeave={handleCloseTags}
        >
          <LocalOfferIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}
