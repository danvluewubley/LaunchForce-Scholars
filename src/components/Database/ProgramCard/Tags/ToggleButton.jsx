import React from "react";

export const ToggleButton = ({ expanded, count, onClick }) => {
  if (expanded) {
    return (
      <button
        onClick={onClick}
        className="tag-item bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded hover:bg-blue-200 transition-colors ml-1"
      >
        Show less
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="tag-item bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded hover:bg-gray-300 transition-colors"
    >
      +{count} more...
    </button>
  );
};
