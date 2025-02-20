import { getDocs, collection } from "firebase/firestore";
import { db } from "../configs/firebase";

/**
 * Fetches and filters opportunities from Firestore based on search query and filters
 *
 * @param {Function} setOpportunitiesList - State setter function to update the opportunities list
 * @param {string} searchQuery - Text to search for in opportunity name, description, and tags
 * @param {Object} filters - Filter criteria for opportunities
 * @param {string[]} [filters.season] - Array of season filters
 * @param {string[]} [filters.cost] - Array of cost filters
 * @param {string[]} [filters.location] - Array of location filters
 * @param {string[]} [filters.type] - Array of type filters
 * @param {string[]} [filters.areaOfInterest] - Array of area of interest filters
 * @param {string[]} [filters.age] - Array of age filters
 * @param {string[]} [filters.grade] - Array of grade filters
 * @param {string[]} [filters.eligibility] - Array of eligibility filters
 *
 * @throws {Error} Logs error to console if Firestore query fails
 *
 * @example
 * // Basic usage
 * fetchOpportunities(setOpportunities, "research", { location: ["NYC"] });
 *
 * @example
 * // Multiple filters
 * fetchOpportunities(setOpportunities, "science", {
 *   type: ["Research", "STEM Research"],
 *   grade: ["Junior", "Senior"]
 * });
 */
export const fetchOpportunities = async (
  setOpportunitiesList,
  searchQuery,
  filters
) => {
  try {
    // Fetch all opportunities from Firestore
    const opportunitiesRef = collection(db, "opportunities");
    const data = await getDocs(opportunitiesRef);
    const fetchedData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const lowerCaseQuery = searchQuery.toLowerCase();

    // Filter programs based on search query and filter criteria
    const filteredPrograms = fetchedData.filter((program) => {
      // Check if program matches search query in name, description, or tags
      const matchesSearch =
        program.name.toLowerCase().includes(lowerCaseQuery) ||
        program.description.toLowerCase().includes(lowerCaseQuery) ||
        (Array.isArray(program.tags) &&
          program.tags.some((tag) =>
            tag.toLowerCase().includes(lowerCaseQuery)
          ));

      // Check if program matches all selected filters
      const matchesFilters = Object.keys(filters).every(
        (key) =>
          filters[key].length === 0 || // Skip filter if no options are selected
          filters[key].some((filterValue) =>
            program[key]?.includes(filterValue)
          )
      );

      return matchesSearch && matchesFilters;
    });

    setOpportunitiesList(filteredPrograms);
  } catch (err) {
    console.error("Error fetching opportunities list:", err);
  }
};
