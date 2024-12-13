"use client";

import { useContext } from "react";

import { IntlContext } from "@/components/core/intl-provider";

import CompanyLogo from "@/assets/company_logo.svg";

import { EmployerItem } from "@/types/common";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

// interface EmployerGridItemProps extends EmployerItem {}

export default function EmployersGridItem({
  name = "",
  logo,
  activeJobs = 0,
}: EmployerItem) {
  const intlContext = useContext(IntlContext);

  return (
    <div className="listing-section-grid-item">
      <div className="listing-section-grid-item-logo-block">
        <img src={logo || CompanyLogo.src} alt="Company logo" />
      </div>
      <div className="listing-section-grid-item-main-info-block">
        <p className="main-title">{name}</p>
        <div className="listing-section-grid-item-other-tags-block">
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
