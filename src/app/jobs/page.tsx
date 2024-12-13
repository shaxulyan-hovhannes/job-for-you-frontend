import JobsClientComponent from "@/components/jobs";
import JobsFilters from "@/components/jobs/filters";

import JobListingHeader from "@/components/jobs/listing/listing-header";
import JobListing from "@/components/jobs/listing";

export default function Jobs() {
  return (
    <main>
      <JobsClientComponent
        filterComponent={
          <div className="filters-section">
            <JobsFilters />
          </div>
        }
        listingComponent={
          <div className="listing-section">
            <JobListingHeader />
            <JobListing />
          </div>
        }
      />
    </main>
  );
}
