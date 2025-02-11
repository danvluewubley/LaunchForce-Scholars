import React from "react";
import { CheckboxFilter } from "./CheckBoxFilter";
import { AutocompleteFilter } from "./AutocompleteFilter"; // Import the AutocompleteFilter component

export const FilterPanel = ({ filters, setFilters }) => {
  // Handle changes to the filters
  const handleFilterChange = (e, filterType) => {
    const { value, checked } = e.target;
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (checked) {
        newFilters[filterType].push(value);
      } else {
        newFilters[filterType] = newFilters[filterType].filter(
          (item) => item !== value
        );
      }
      return newFilters;
    });
  };

  // Area of Interest and Skills Learned options
  const areaOfInterestOptions = [
    "STEM",
    "Chemistry",
    "Biology",
    "Physics",
    "Astronomy",
    "Neuroscience",
    "Healthcare / Medicine",
    "STEM Research",
    "Research Mentorship",
    "Self-Research",
    "Non-STEM Research",
  ];

  const skillsOptions = [
    "Communication",
    "Machine Learning",
    "Data Science",
    "Python",
    "Statistics",
    "Problem Solving",
    "Leadership",
    "Teamwork",
    "Research",
    "Programming",
  ];

  return (
    <div className="w-80 p-6 border-l border-gray-300 bg-white">
      <h2 className="text-lg font-semibold mb-4">Filter Options</h2>

      {/* Filter by Season */}
      <CheckboxFilter
        label="Season"
        options={[
          "Summer",
          "Fall",
          "Winter",
          "Spring",
          "Year Round",
          "Long Term",
        ]}
        selectedOptions={filters.season}
        handleFilterChange={handleFilterChange}
      />

      {/* Filter by Cost */}
      <CheckboxFilter
        label="Cost"
        options={[
          "Paid/Stipend",
          "Free",
          "Low Cost",
          "Aid Available",
          "High Cost",
          "No Aid Available",
        ]}
        selectedOptions={filters.cost}
        handleFilterChange={handleFilterChange}
      />

      {/* Filter by Location */}
      <CheckboxFilter
        label="Location"
        options={["NYC", "USA (residential)", "Virtual", "Hybrid"]}
        selectedOptions={filters.location}
        handleFilterChange={handleFilterChange}
      />

      {/* Filter by Type */}
      <CheckboxFilter
        label="Type"
        options={["Competition", "Scholarship"]}
        selectedOptions={filters.type}
        handleFilterChange={handleFilterChange}
      />

      {/* Filter by Area of Interest */}
      <AutocompleteFilter
        label="Area of Interest"
        options={areaOfInterestOptions}
        filters={filters}
        setFilters={setFilters}
        filterKey="areaOfInterest" // Key for the area of interest filter
      />

      {/* Filter by Skills Learned */}
      <AutocompleteFilter
        label="Skills Learned"
        options={skillsOptions}
        filters={filters}
        setFilters={setFilters}
        filterKey="skills" // Key for the skills filter
      />

      {/* Filter by Age */}
      <CheckboxFilter
        label="Age"
        options={["13", "14", "15", "16", "17", "18", "19"]}
        selectedOptions={filters.age}
        handleFilterChange={handleFilterChange}
      />

      {/* Filter by Grade */}
      <CheckboxFilter
        label="Grade"
        options={["Freshman", "Sophomore", "Junior", "Senior"]}
        selectedOptions={filters.grade}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};
