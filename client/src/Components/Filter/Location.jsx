import React from "react";
import { CountryDropdown } from "react-country-region-selector";

function Location({ onChange, value }) {
  return (
    <div>
      <h1 className="text-lg font-medium leading-7 text-primary">Location</h1>
      <CountryDropdown
        classes="w-full"
        name="location"
        value={value.location}
        onChange={(_, e) => onChange(e)}
        defaultOptionLabel="Any"
      />
    </div>
  );
}

export default Location;
