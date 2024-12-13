"use client";

import { useContext } from "react";

import { IntlContext } from "@/components/core/intl-provider";

import CompanyLogo from "@/assets/company_logo.svg";

import { JobItem } from "@/types/common";

import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import UpdateIcon from "@mui/icons-material/Update";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

// interface JobGridItemProps extends JobItem {}

export default function JobGridItem({
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
  const intlContext = useContext(IntlContext);

  return (
    <div className="listing-section-grid-item">
      <div className="listing-section-grid-item-logo-block">
        <img src={employerLogo || CompanyLogo.src} alt="Company logo" />
      </div>
      <div className="listing-section-grid-item-main-info-block">
        <p className="employer-name">{employerName}</p>
        <p className="main-title">{title}</p>
        <div className="published_deadline_block">
          <p title="Pulished at" className="job-published-at">
            <EventAvailableIcon sx={{ fontSize: "1rem" }} />
            {intlContext?.setLocaleDate(createdAt)}
          </p>
          -
          <p title="Deadline" className="job-deadline">
            <UpdateIcon sx={{ fontSize: "1rem" }} />
            {intlContext?.setLocaleDate(deadline)}
          </p>
        </div>
      </div>
      <div className="listing-section-grid-item-other-tags-block">
        <p className="job-location">
          <LocationOnIcon sx={{ fontSize: "1rem" }} />
          {intlContext?.translateData(location)}
        </p>
        <span className="invisible">-</span>
        <p>
          <BusinessCenterIcon sx={{ fontSize: "1rem" }} />
          {intlContext?.translateData(workExperience)}
        </p>
      </div>
      <div className="listing-section-grid-item-other-tags-block">
        <p>
          <BusinessCenterIcon sx={{ fontSize: "1rem" }} />
          {intlContext?.translateData(workFormat)}
        </p>
        <p>
          <BusinessCenterIcon sx={{ fontSize: "1rem" }} />
          {intlContext?.translateData(employmentType)}
        </p>
      </div>
    </div>
  );
}
