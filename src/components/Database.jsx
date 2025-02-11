import React, { useState } from "react";
import { ProgramCard } from "./ProgramCard";
import { FilterPanel } from "./FilterPanel";

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
  });

  const [isFilterVisible, setIsFilterVisible] = useState(true);

  // Sample data for the programs
  const programs = [
    {
      name: "AI Research Internship",
      tags: ["Technology", "AI", "Machine Learning", "Python"],
      description:
        "A summer research internship focused on AI applications and data science.",
      deadline: "March 15, 2025",
      location: "Virtual",
      website: "https://official-website.com",
      season: "Summer", // Added season
      cost: "Low Cost", // Added cost
      type: "Internship", // Added type
      areaOfInterest: "STEM", // Added area of interest
      skills: ["Communication", "Machine Learning"], // Added skills
      grade: "Sophomore", // Added grade
      age: "18-22", // Added age
    },
    {
      name: "Data Science Internship",
      tags: ["Data Science", "Machine Learning", "Python", "Statistics"],
      description:
        "A hands-on internship program designed for students interested in data science.",
      deadline: "May 1, 2025",
      location: "New York, NY",
      website: "https://another-website.com",
      season: "Fall", // Added season
      cost: "Paid/Stipend", // Added cost
      type: "Internship", // Added type
      areaOfInterest: "STEM Research", // Added area of interest
      skills: ["Data Science", "Python", "Statistics"], // Added skills
      grade: "Junior", // Added grade
      age: "19-23", // Added age
    },
    // Add more programs as needed
  ];

  // Filter logic based on search query and filters
  const filteredPrograms = programs.filter((program) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const matchesSearch =
      program.name.toLowerCase().includes(lowerCaseQuery) ||
      program.description.toLowerCase().includes(lowerCaseQuery) ||
      program.tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery));

    const matchesSeason =
      filters.season.length === 0 || filters.season.includes(program.season);
    const matchesCost =
      filters.cost.length === 0 || filters.cost.includes(program.cost);
    const matchesLocation =
      filters.location.length === 0 ||
      filters.location.includes(program.location);
    const matchesType =
      filters.type.length === 0 || filters.type.includes(program.type);
    const matchesAreaOfInterest =
      filters.areaOfInterest.length === 0 ||
      filters.areaOfInterest.includes(program.areaOfInterest);
    const matchesSkills =
      filters.skills.length === 0 ||
      filters.skills.some((skill) =>
        program.skills.map((s) => s.toLowerCase()).includes(skill.toLowerCase())
      );
    const matchesAge =
      filters.age.length === 0 || filters.age.includes(program.age);
    const matchesGrade =
      filters.grade.length === 0 || filters.grade.includes(program.grade);

    return (
      matchesSearch &&
      matchesSeason &&
      matchesCost &&
      matchesLocation &&
      matchesType &&
      matchesAreaOfInterest &&
      matchesSkills &&
      matchesAge &&
      matchesGrade
    );
  });

  return (
    <div className="min-h-screen flex">
      {/* Program Cards Section */}
      <div className="flex-1 p-6 space-y-6 flex flex-col items-center">
        {/* Search bar */}
        <div className="flex items-center border border-gray-300 rounded-lg p-2 w-256">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none px-2 py-1 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update the search query state
          />
          <button className="ml-2 px-4 py-1 bg-blue-500 text-white rounded-lg">
            Search
          </button>
        </div>

        {/* Display the filtered program cards */}
        <div className="w-256 mt-6 flex justify-between">
          <div>
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program, index) => (
                <ProgramCard key={index} {...program} />
              ))
            ) : (
              <p>No programs found</p>
            )}
          </div>

          {/* Filter Panel */}
          {isFilterVisible && (
            <FilterPanel filters={filters} setFilters={setFilters} />
          )}
        </div>
      </div>
    </div>
  );
};
