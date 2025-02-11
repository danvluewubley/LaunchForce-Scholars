import React, { useState } from "react";

export const AutocompleteFilter = ({
  label,
  options,
  filters,
  setFilters,
  filterKey,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the options based on the search query
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle the change in search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle the selection of an option
  const handleSelect = (option) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      newFilters[filterKey] = [...newFilters[filterKey], option]; // Add to the corresponding filter array
      setSearchQuery(""); // Clear the input field after selection
      return newFilters;
    });
  };

  return (
    <div className="space-y-2 mb-4">
      <h3 className="font-semibold">{label}</h3>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder={`Search ${label}...`}
        className="p-2 border border-gray-300 rounded-lg w-full"
      />
      {searchQuery && (
        <ul className="mt-2 max-h-40 overflow-auto border border-gray-300 rounded-lg p-2">
          {filteredOptions.map((option) => (
            <li
              key={option}
              className="cursor-pointer hover:bg-gray-200 p-1"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
