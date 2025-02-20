import { getDocs, collection } from "firebase/firestore";
import { db } from "../configs/firebase";

export const fetchOpportunities = async (
  setOpportunitiesList,
  searchQuery,
  filters
) => {
  try {
    const opportunitiesRef = collection(db, "opportunities");
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

      const matchesFilters = Object.keys(filters).every(
        (key) =>
          filters[key].length === 0 ||
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
