import React, { useState } from "react";
import { CheckboxFilter } from "./CheckboxFilter";

export const FilterPanel = ({ filters, setFilters }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [openSections, setOpenSections] = useState({
    season: false,
    cost: false,
    location: false,
    type: false,
    areaOfInterest: false,
    skills: false,
    age: false,
    grade: false,
    eligibility: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const options = [
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
        "1+ Years",
        "<= 1 Month",
      ],
    },
    {
      label: "Cost",
      key: "cost",
      options: [
        "Paid/Stipend",
        "Free",
        "Aid Available",
        "No Aid Available",
        "$0-100",
        "$101-500",
        "$501-1000",
        "$1000+",
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
      options: [
        "Research",
        "STEM Research",
        "Non-STEM Research",
        "Mentored",
        "Lab Research",
        "Program",
        "Start-Up Creation",
      ],
    },
    {
      label: "Area of Interest",
      key: "areaOfInterest",
      options: [
        "Business",
        "Entrepreneurship",
        "Finance",
        "Accounting",
        "Marketing",
        "Science",
        "Technology",
        "Health",
        "Biology",
        "Chemistry",
        "Genetics",
        "Environmental",
        "Computer Science",
        "Biochemistry",
        "Social Advocacy",
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
    {
      label: "Eligility",
      key: "eligibility",
      options: ["Female", "Minority"],
    },
  ];

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
    <>
      <button
        className="sm:block md:hidden lg:hidden bg-blue-500 text-white py-2 px-4 rounded-2xl text-sm mb-4 h-8  flex justify-center items-center"
        onClick={() => setIsModalVisible(true)}
      >
        Show Filters
      </button>

      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <button
              className="absolute top-4 right-4 text-lg text-gray-500 hover:text-gray-800"
              onClick={() => setIsModalVisible(false)}
            >
              X
            </button>
            <h2 className="text-lg font-semibold mb-4">Filter Options</h2>

            {options.map(({ label, key, options }) => (
              <div key={key} className="space-y-2 mb-4">
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
        </div>
      )}

      <div className="hidden md:block lg:block space-y-4 w-60 lg:w-80 p-6 border-l border-gray-300 bg-white max-h-[80vh] overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Filter Options</h2>

        {options
          .map(({ label, key, options }) => ({
            label,
            key,
            options:
              label === "Area of Interest" || label === "Skills Learned"
                ? options.sort((a, b) => a.localeCompare(b)) // Sort only for Area of Interest and Skills Learned
                : options, // Leave other sections unsorted
          }))
          .map(({ label, key, options }) => (
            <div key={key} className="space-y-2 mb-4">
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

              {openSections[key] && (
                <div className="space-y-2">
                  {options.map((option) => (
                    <div key={option}>
                      <input
                        type="checkbox"
                        id={option}
                        value={option}
                        checked={filters[key]?.includes(option)}
                        onChange={(e) =>
                          setFilters((prev) => {
                            const newFilters = { ...prev };
                            if (e.target.checked) {
                              newFilters[key] = [
                                ...(newFilters[key] || []),
                                option,
                              ];
                            } else {
                              newFilters[key] = newFilters[key]?.filter(
                                (o) => o !== option
                              );
                            }
                            return newFilters;
                          })
                        }
                      />
                      <label htmlFor={option} className="ml-2">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
    </>
  );
};
