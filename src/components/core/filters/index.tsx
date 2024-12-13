import { ReactNode } from "react";
import FiltersHeader from "./filters-header";

interface FiltersProps {
  filtersEntities: ReactNode[];
  showResetIcon: boolean;
  onResetFilters: () => void;
}

export default function Filters({
  filtersEntities = [],
  showResetIcon = false,
  onResetFilters = () => {},
}: FiltersProps) {
  return (
    <div>
      <FiltersHeader
        showResetIcon={showResetIcon}
        onResetFilters={onResetFilters}
      />
      <div className="filters-section-main">
        {filtersEntities.map((filter) => filter)}
      </div>
    </div>
  );
}
