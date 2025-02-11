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
  });

  const [opportunitiesList, setOpportunitiesList] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(true);

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
          program.tags.some((tag) =>
            tag.toLowerCase().includes(lowerCaseQuery)
          );

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

      setOpportunitiesList(filteredPrograms);
    } catch (err) {
      console.error("Error fetching opportunities list:", err);
    }
  };

  useEffect(() => {
    getOpportunitiesList();
  }, [filters, searchQuery]);

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 p-6 space-y-6 flex flex-col items-center">
        <div className="flex items-center border border-gray-300 rounded-lg p-2 w-64 md:w-150 lg:w-256">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none px-2 py-1 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <button className="ml-2 px-4 py-1 bg-blue-500 text-white rounded-lg">
            Search
          </button>
        </div>

        <div className="w-64 md:w-150 lg:w-256 mt-6 flex justify-between">
          <div>
            {opportunitiesList.length > 0 ? (
              opportunitiesList.map((program, index) => (
                <div key={index}>
                  <ProgramCard {...program} />
                </div>
              ))
            ) : (
              <p>No programs found</p>
            )}
          </div>

          {isFilterVisible && (
            <FilterPanel filters={filters} setFilters={setFilters} />
          )}
        </div>
      </div>
    </div>
  );
};

