import React from "react";

export const CheckboxFilter = ({
  label,
  options,
  selectedOptions,
  handleFilterChange,
}) => {
  return (
    <div className="space-y-2 mt-2">
      {options.map((option) => (
        <label key={option} className="flex items-center">
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={handleFilterChange}
            className="mr-2"
          />
          {option}
        </label>
      ))}
    </div>
  );
};
