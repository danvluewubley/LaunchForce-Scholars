import React from "react";

export const CheckboxFilter = ({
  label,
  options,
  selectedOptions,
  handleFilterChange,
}) => {
  return (
    <div className="space-y-2 mb-4">
      <h3 className="font-semibold">{label}</h3>
      {options.map((option) => (
        <label key={option} className="flex items-center">
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={(e) => handleFilterChange(e, label.toLowerCase())}
            className="mr-2"
          />
          {option}
        </label>
      ))}
    </div>
  );
};
