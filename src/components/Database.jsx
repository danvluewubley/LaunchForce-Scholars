import React, { useEffect, useState } from "react";
import { ProgramCard } from "./ProgramCard/ProgramCard";
import { FilterPanel } from "./FilterPanel";
import { fetchOpportunities } from "../utils/fetchOpportunities";
import { Pagination } from "./Pagination";
import { SearchBar } from "./SearchBar";

export const Database = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    season: [],
    cost: [],
    location: [],
    type: [],
    areaOfInterest: [],
    age: [],
    grade: [],
    eligibility: [],
  });
  const [opportunitiesList, setOpportunitiesList] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  useEffect(() => {
    fetchOpportunities(setOpportunitiesList, searchQuery, filters);
  }, [filters, searchQuery]);

  const paginatedPrograms = opportunitiesList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(opportunitiesList.length / itemsPerPage);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 p-6 space-y-6 flex flex-col items-center">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="w-64 md:w-150 lg:w-256 mt-6 flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0 lg:w-3/4">
            {paginatedPrograms.length > 0 ? (
              paginatedPrograms.map((program, index) => (
                <div key={index} className="mb-4">
                  <ProgramCard {...program} />
                </div>
              ))
            ) : (
              <p>No programs found</p>
            )}
          </div>
          {isFilterVisible && (
            <div className="w-full sm:w-128 md:w-[240px] lg:w-80 lg:h-[80vh] mt-0 order-first md:order-last">
              <FilterPanel filters={filters} setFilters={setFilters} />
            </div>
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};
