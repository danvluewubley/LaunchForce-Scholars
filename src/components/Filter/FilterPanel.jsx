import React, { useState } from "react";
import { FilterSection } from "./FilterSection";
import { filterOptions } from "../../configs/filterOptions";

export const FilterPanel = ({ filters, setFilters }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      <button
        className="sm:block md:hidden lg:hidden bg-blue-500 text-white py-2 px-4 rounded-2xl text-sm mb-4 h-8 flex justify-center items-center"
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

            {filterOptions.map(({ label, key, options }) => (
              <FilterSection
                key={key}
                label={label}
                filterKey={key}
                options={options}
                filters={filters}
                setFilters={setFilters}
                openSections={openSections}
                toggleSection={toggleSection}
              />
            ))}
          </div>
        </div>
      )}

      <div className="hidden md:block lg:block space-y-4 w-60 lg:w-80 p-6 border-l border-gray-300 bg-white max-h-[80vh] overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Filter Options</h2>

        {filterOptions.map(({ label, key, options }) => (
          <FilterSection
            key={key}
            label={label}
            filterKey={key}
            options={options}
            filters={filters}
            setFilters={setFilters}
            openSections={openSections}
            toggleSection={toggleSection}
          />
        ))}
      </div>
    </>
  );
};
