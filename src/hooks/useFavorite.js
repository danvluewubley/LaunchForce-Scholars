/**
 * @fileoverview Custom hook for managing favorite status of opportunities in Firebase
 */

import { useState, useEffect } from "react";
import { db, auth } from "../configs/firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";

/**
 * Custom hook to manage the favorite status of an opportunity for the current user.
 * Handles checking, toggling, and persisting favorite status in Firebase.
 *
 * @param {string} id - The unique identifier of the opportunity
 * @returns {Object} An object containing:
 *   - isFavorited: boolean indicating if the opportunity is favorited
 *   - toggleFavorite: function to toggle the favorite status
 *
 * @example
 * const { isFavorited, toggleFavorite } = useFavorite("opportunity-123");
 *
 * // Check if favorited
 * console.log(isFavorited); // true/false
 *
 * // Toggle favorite status
 * <button onClick={toggleFavorite}>Toggle Favorite</button>
 */
export const useFavorite = (id) => {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    /**
     * Checks if the current opportunity is favorited by the authenticated user.
     * Updates the isFavorited state based on the query result.
     *
     * @async
     * @returns {void}
     */
    const checkIfFavorited = async () => {
      if (!auth.currentUser) return;

      const q = query(
        collection(db, "favorites"),
        where("userId", "==", auth.currentUser.uid),
        where("opportunityId", "==", id)
      );

      const querySnapshot = await getDocs(q);
      setIsFavorited(!querySnapshot.empty);
    };

    checkIfFavorited();
  }, [id]);

  /**
   * Toggles the favorite status of the opportunity for the current user.
   * If currently favorited, removes the favorite document.
   * If not favorited, creates a new favorite document.
   *
   * @async
   * @param {Event} e - The event object from the click handler
   * @returns {void}
   * @throws {Error} If Firebase operations fail
   */
  const toggleFavorite = async (e) => {
    e.stopPropagation();
    if (!auth.currentUser) return;

    if (isFavorited) {
      // Find and delete existing favorite document
      const q = query(
        collection(db, "favorites"),
        where("userId", "==", auth.currentUser.uid),
        where("opportunityId", "==", id)
      );

      const querySnapshot = await getDocs(q);
      const docId = querySnapshot.docs[0]?.id;

      if (docId) {
        await deleteDoc(doc(db, "favorites", docId));
      }
    } else {
      // Create new favorite document
      await addDoc(collection(db, "favorites"), {
        opportunityId: id,
        userId: auth.currentUser.uid,
      });
    }

    setIsFavorited((prev) => !prev);
  };

  return { isFavorited, toggleFavorite };
};
