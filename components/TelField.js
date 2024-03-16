// Your component file (e.g., CountryFlagsDropdown.js)
import React from 'react';
import ReactFlagsSelect from 'react-flags-select';

function CountryFlagsDropdown() {
  return (
    <div>
      <ReactFlagsSelect
        countries={['US', 'GB', 'FR', 'DE', 'IT', 'NG', 'PK', 'IN']} // Specify the countries you want to display
        // Optional: blacklistCountries to exclude specific countries
        // Example: blacklistCountries={true}
      />
    </div>
  );
}

export default CountryFlagsDropdown;
