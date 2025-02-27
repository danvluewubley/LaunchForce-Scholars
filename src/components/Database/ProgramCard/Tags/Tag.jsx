import React from "react";

export const Tag = ({ text, type }) => {
  // Get tag class based on type
  const getTagClassName = (tagType) => {
    switch (tagType) {
      case "eligibility":
        return "bg-[#FFD700] text-[#333333]";
      case "areaOfInterest":
        return "bg-[#4169E1] text-white";
      case "cost":
        return "bg-[#D1ECF1] text-[#0C5460]";
      case "type":
        return "bg-green-100 text-green-600";
      case "season":
        return "bg-[#FFA500] text-[#2C3E50]";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <span
      className={`tag-item ${getTagClassName(type)} text-xs font-medium px-2 py-1 rounded`}
    >
      {text}
    </span>
  );
};