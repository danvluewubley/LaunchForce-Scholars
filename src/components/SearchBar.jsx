import React from "react";

export const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-2 w-64 md:w-150 lg:w-256">
      <input
        type="text"
        placeholder="Search..."
        className="outline-none px-2 py-1 w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        type="submit"
        className="ml-2 px-4 py-1 bg-blue-500 text-white rounded-lg"
        onClick={handleSearchSubmit}
      >
        Search
      </button>
    </div>
  );
};
