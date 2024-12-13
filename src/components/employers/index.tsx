"use client";

import { ReactNode, useEffect, useState } from "react";
import { useAppSelector } from "@/store";
import { selectFilterSide } from "@/store/storage/storageSelectors";

import { FILTER_SIDES } from "@/constants/storage";

interface EmployersClientComponentProps {
  filterComponent: ReactNode;
  listingComponent: ReactNode;
}

export default function EmployersClientComponent({
  filterComponent = null,
  listingComponent,
}: EmployersClientComponentProps) {
  const [localFilterSiteState, setLocalFilterSideState] = useState("");
  const filterSide = useAppSelector(selectFilterSide);

  useEffect(() => {
    setTimeout(() => {
      setLocalFilterSideState(filterSide);
    }, 0);
  }, [filterSide]);

  if (!localFilterSiteState) return null;

  return localFilterSiteState === FILTER_SIDES.left ? (
    <>
      {filterComponent}
      {listingComponent}
    </>
  ) : (
    <>
      {listingComponent}
      {filterComponent}
    </>
  );
}
