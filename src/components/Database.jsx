import React, { useEffect, useState } from "react";
import { ProgramCard } from "./ProgramCard";
import { FilterPanel } from "./FilterPanel";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../configs/firebase";

export const Database = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    season: [],
    cost: [],
    location: [],
    type: [],
    areaOfInterest: [],
    skills: [],
    age: [],
    grade: [],
    eligibility: [],
  });
  const [opportunitiesList, setOpportunitiesList] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Keep track of the current page
  const [itemsPerPage] = useState(20); // Number of items per page

  const opportunitiesRef = collection(db, "opportunities");

  const getOpportunitiesList = async () => {
    try {
      const data = await getDocs(opportunitiesRef);
      const fetchedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const lowerCaseQuery = searchQuery.toLowerCase();

      const filteredPrograms = fetchedData.filter((program) => {
        const matchesSearch =
          program.name.toLowerCase().includes(lowerCaseQuery) ||
          program.description.toLowerCase().includes(lowerCaseQuery) ||
          (Array.isArray(program.tags) &&
            program.tags.some((tag) =>
              tag.toLowerCase().includes(lowerCaseQuery)
            ));

        const matchesSeason =
          filters.season.length === 0 ||
          filters.season.includes(program.season);
        const matchesCost =
          filters.cost.length === 0 || filters.cost.includes(program.cost);
        const matchesLocation =
          filters.location.length === 0 ||
          filters.location.includes(program.location);
        const matchesType =
          filters.type.length === 0 || filters.type.includes(program.type);
        const matchesAreaOfInterest =
          filters.areaOfInterest.length === 0 ||
          filters.areaOfInterest.some((areaOfInterest) =>
            program.areaOfInterest.includes(areaOfInterest)
          );
        const matchesSkills =
          filters.skills.length === 0 ||
          filters.skills.some((filterSkill) =>
            program.skills.some(
              (programSkill) =>
                programSkill.toLowerCase() === filterSkill.toLowerCase()
            )
          );

        const matchesAge =
          filters.age.length === 0 ||
          filters.age.some((age) => program.age.includes(age));

        const matchesGrade =
          filters.grade.length === 0 ||
          filters.grade.some((grade) => program.grade.includes(grade));

        const matchesEligibility =
          filters.eligibility.length === 0 ||
          filters.eligibility.includes(program.eligibility);

        return (
          matchesSearch &&
          matchesSeason &&
          matchesCost &&
          matchesLocation &&
          matchesType &&
          matchesAreaOfInterest &&
          matchesSkills &&
          matchesAge &&
          matchesGrade &&
          matchesEligibility
        );
      });

      setOpportunitiesList(filteredPrograms);
    } catch (err) {
      console.error("Error fetching opportunities list:", err);
    }
  };

  useEffect(() => {
    getOpportunitiesList();
  }, [filters, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    getOpportunitiesList();
  };

  // Paginate the results
  const paginatedPrograms = opportunitiesList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Calculate total pages
  const totalPages = Math.ceil(opportunitiesList.length / itemsPerPage);

  // Handle pagination button clicks
  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Program Cards Section */}
      <div className="flex-1 p-6 space-y-6 flex flex-col items-center">
        {/* Search bar */}
        <div className="flex items-center border border-gray-300 rounded-lg p-2 w-64 md:w-150 lg:w-256">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none px-2 py-1 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update the search query state
          />
          <button
            type="submit"
            className="ml-2 px-4 py-1 bg-blue-500 text-white rounded-lg"
            onClick={handleSearchSubmit}
          >
            Search
          </button>
        </div>

        {/* Display the filtered program cards */}
        <div className="w-64 md:w-150 lg:w-256 mt-6 flex flex-col md:flex-row justify-between">
          {/* Program Cards */}
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

          {/* Filter Panel */}
          {isFilterVisible && (
            <div className="w-full sm:w-128 md:w-[240px] lg:w-80 lg:h-[80vh] mt-0 order-first md:order-last">
              <FilterPanel filters={filters} setFilters={setFilters} />
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="mt-6 flex justify-center space-x-4 items-center">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded-lg"
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
