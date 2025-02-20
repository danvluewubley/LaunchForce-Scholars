import React from "react";
import { CheckboxFilter } from "./CheckBoxFilter";

export const FilterSection = ({
  label,
  filterKey,
  options,
  filters,
  setFilters,
  openSections,
  toggleSection,
}) => {
  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (checked) {
        newFilters[filterKey] = [...(newFilters[filterKey] || []), value];
      } else {
        newFilters[filterKey] = newFilters[filterKey]?.filter(
          (item) => item !== value
        );
      }
      return newFilters;
    });
  };

  return (
    <div className="space-y-2 mb-4">
      <h3
        className="font-semibold cursor-pointer flex justify-between items-center"
        onClick={() => toggleSection(filterKey)}
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${
            openSections[filterKey] ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </h3>

      {openSections[filterKey] && (
        <CheckboxFilter
          label={label}
          options={options}
          selectedOptions={filters[filterKey] || []}
          handleFilterChange={handleFilterChange}
        />
      )}
    </div>
  );
};
