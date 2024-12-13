"use client";

import { useContext } from "react";
import { EmployerItem } from "@/types/common";

import CompanyLogo from "@/assets/company_logo.svg";

import { IntlContext } from "@/components/core/intl-provider";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

// interface EmployerListItemProps extends EmployerItem {}

export default function EmployersListItem({
  name = "",
  logo,
  activeJobs = 0,
}: EmployerItem) {
  const intlContext = useContext(IntlContext);

  return (
    <div className="listing-section-list-item">
      <div className="listing-section-list-item-logo-block ">
        <img src={logo || CompanyLogo.src} alt="Company logo" />
      </div>
      <div className="listing-section-list-item-main-info-block">
        <p className="main-title">{name}</p>
        <div className="listing-section-list-item-main-info-block-other-tags-block">
          <p className="employers-active-jobs">
            <BusinessCenterIcon sx={{ fontSize: "1rem" }} />
            {intlContext?.translateData("active_jobs")} -
            <span>{activeJobs}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
