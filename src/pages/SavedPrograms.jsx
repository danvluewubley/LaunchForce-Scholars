import React, { useState, useEffect } from "react";
import { db, auth } from "../configs/firebase";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { ProgramCard } from "../components/ProgramCard";
import { useNavigate } from "react-router-dom";

export const SavedPrograms = () => {
  const [favoritedPrograms, setFavoritedPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); // Store the logged-in user
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 18; // Set the number of items per page
  const navigate = useNavigate();

  useEffect(() => {
    // This will listen for changes in the user's auth state
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Set the user state when login state changes
    });

    return () => unsubscribe(); // Cleanup listener when component unmounts
  }, []);

  useEffect(() => {
    const fetchFavoritedPrograms = async () => {
      if (!user) {
        console.log("No authenticated user.");
        setLoading(false);
        return;
      }

      console.log("Current User:", user);
      setLoading(true);

      const userId = user.uid;
      const favoritesQuery = query(
        collection(db, "favorites"),
        where("userId", "==", userId)
      );
      const favoriteDocs = await getDocs(favoritesQuery);

      if (favoriteDocs.empty) {
        console.log("No favorite programs found.");
        setLoading(false);
        return;
      }

      const programIds = favoriteDocs.docs.map(
        (doc) => doc.data().opportunityId
      );

      // Fetch the program details from 'SavedPrograms' collection
      const programPromises = programIds.map(async (programId) => {
        const programRef = doc(db, "opportunities", programId);
        try {
          const programSnap = await getDoc(programRef);
          return programSnap.exists()
            ? { id: programId, ...programSnap.data() }
            : null;
        } catch (error) {
          console.error(`Error fetching program with ID ${programId}:`, error);
          return null;
        }
      });

      const programs = (await Promise.all(programPromises)).filter(
        (program) => program !== null
      );

      setFavoritedPrograms(programs);
      setLoading(false);
    };

    fetchFavoritedPrograms();
  }, [user]);

  // Pagination logic
  const indexOfLastProgram = currentPage * itemsPerPage;
  const indexOfFirstProgram = indexOfLastProgram - itemsPerPage;
  const currentPrograms = favoritedPrograms.slice(
    indexOfFirstProgram,
    indexOfLastProgram
  );

  const totalPages = Math.ceil(favoritedPrograms.length / itemsPerPage);

  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 pt-10 pb-5 md:pb-0">
      <h1 className="text-2xl font-bold mb-4">Favorited Programs</h1>
      {loading ? (
        <p>Loading...</p>
      ) : favoritedPrograms.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentPrograms.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
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
        </>
      ) : (
        <p>No favorited programs yet.</p>
      )}
    </div>
  );
};
