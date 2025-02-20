import { useState, useEffect } from "react";
import { db, auth } from "../../../configs/firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const useFavorite = (id) => {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
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

  const toggleFavorite = async (e) => {
    e.stopPropagation();
    if (!auth.currentUser) return;

    if (isFavorited) {
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
      await addDoc(collection(db, "favorites"), {
        opportunityId: id,
        userId: auth.currentUser.uid,
      });
    }

    setIsFavorited((prev) => !prev);
  };

  return { isFavorited, toggleFavorite };
};
