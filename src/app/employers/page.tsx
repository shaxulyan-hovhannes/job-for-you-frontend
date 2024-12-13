import EmployersClientComponent from "@/components/employers";
import EmployersFilters from "@/components/employers/filters";
import EmployersListingHeader from "@/components/employers/listing/listing-header";
import EmployersListing from "@/components/employers/listing";

export default function Employers() {
  return (
    <main>
      <EmployersClientComponent
        filterComponent={
          <div className="filters-section">
            <EmployersFilters />
          </div>
        }
        listingComponent={
          <div className="listing-section">
            <EmployersListingHeader />
            <EmployersListing />
          </div>
        }
      />
    </main>
  );
}
