import React, { useState } from "react";
import { CheckboxFilter } from "./CheckboxFilter";

export const FilterPanel = ({ filters, setFilters }) => {
  // State to track which filter sections are open
  const [openSections, setOpenSections] = useState({
    season: false,
    cost: false,
    location: false,
    type: false,
    areaOfInterest: false,
    skills: false,
    age: false,
    grade: false,
  });

  // Toggle the dropdown for a specific section
  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

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

  return (
    <div className="w-80 p-6 border-l border-gray-300 bg-white">
      <h2 className="text-lg font-semibold mb-4">Filter Options</h2>

      {/* Reusable Dropdown Filters */}
      {[
        {
          label: "Season",
          key: "season",
          options: [
            "Summer",
            "Fall",
            "Winter",
            "Spring",
            "Year Round",
            "Long Term",
          ],
        },
        {
          label: "Cost",
          key: "cost",
          options: [
            "Paid/Stipend",
            "Free",
            "Low Cost",
            "Aid Available",
            "High Cost",
            "No Aid Available",
          ],
        },
        {
          label: "Location",
          key: "location",
          options: ["NYC", "USA (residential)", "Virtual", "Hybrid"],
        },
        {
          label: "Type",
          key: "type",
          options: ["Competition", "Scholarship"],
        },
        {
          label: "Area of Interest",
          key: "areaOfInterest",
          options: [
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
          ],
        },
        {
          label: "Skills Learned",
          key: "skills",
          options: [
            "Communication",
            "Machine Learning",
            "Data Science",
            "Python",
            "Statistics",
          ],
        },
        {
          label: "Age",
          key: "age",
          options: ["13", "14", "15", "16", "17", "18", "19"],
        },
        {
          label: "Grade",
          key: "grade",
          options: ["Freshman", "Sophomore", "Junior", "Senior"],
        },
      ].map(({ label, key, options }) => (
        <div key={key} className="space-y-2 mb-4">
          {/* Dropdown Header */}
          <h3
            className="font-semibold cursor-pointer flex justify-between items-center"
            onClick={() => toggleSection(key)}
          >
            {label}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${
                openSections[key] ? "rotate-180" : "rotate-0"
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

          {/* Checkbox Options (Dropdown Content) */}
          {openSections[key] && (
            <CheckboxFilter
              label={label}
              options={options}
              selectedOptions={filters[key]}
              handleFilterChange={(e) => handleFilterChange(e, key)}
            />
          )}
        </div>
      ))}
    </div>
  );
};
