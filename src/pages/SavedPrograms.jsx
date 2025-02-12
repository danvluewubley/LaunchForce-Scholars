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
  const navigate = useNavigate()

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
        navigate('/')
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

      console.log(
        "Favorite Docs:",
        favoriteDocs.docs.map((doc) => doc.data())
      );

      const programIds = favoriteDocs.docs.map(
        (doc) => doc.data().opportunityId
      );
      console.log("Program IDs:", programIds);

      // Fetch the program details from 'SavedPrograms' collection
      const programPromises = programIds.map(async (programId) => {
        console.log(`Fetching program with ID: ${programId}`); // Log each programId

        const programRef = doc(db, "opportunities", programId);
        try {
          const programSnap = await getDoc(programRef);
          console.log(
            `Fetched Program with ID ${programId}:`,
            programSnap.exists() ? programSnap.data() : "Not found"
          );

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
      console.log("Programs fetched:", programs);

      setFavoritedPrograms(programs);
      setLoading(false);
    };

    fetchFavoritedPrograms();
  }, [user]); // Fetch programs only when 'user' state changes

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Favorited Programs</h1>
      {loading ? (
        <p>Loading...</p>
      ) : favoritedPrograms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoritedPrograms.map((program) => (
            <ProgramCard key={program.id} {...program} />
          ))}
        </div>
      ) : (
        <p>No favorited programs yet.</p>
      )}
    </div>
  );
};
