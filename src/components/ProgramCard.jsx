import React, { useState, useEffect } from "react";
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

export const ProgramCard = ({
  name,
  skills,
  description,
  deadline,
  location,
  link,
  season,
  cost,
  type,
  grade,
  age,
  areaOfInterest,
  id,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  // Check if program is already favorited when component mounts
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

  const toggleCard = (e) => {
    if (
      !e.target.closest(".favorite-btn") &&
      !e.target.closest(".website-link")
    ) {
      setIsExpanded((prev) => !prev);
    }
  };

  const toggleFavorite = async (e) => {
    e.stopPropagation();
    if (!auth.currentUser) return;

    if (isFavorited) {
      // If already favorited, delete the document
      const q = query(
        collection(db, "favorites"),
        where("userId", "==", auth.currentUser.uid),
        where("opportunityId", "==", id)
      );

      const querySnapshot = await getDocs(q);
      const docId = querySnapshot.docs[0]?.id; // Get the document ID

      if (docId) {
        await deleteDoc(doc(db, "favorites", docId)); // Delete the favorite document
      }
    } else {
      // If not favorited, add the document
      await addDoc(collection(db, "favorites"), {
        opportunityId: id,
        userId: auth.currentUser.uid,
      });
    }

    setIsFavorited((prev) => !prev); // Toggle the favorite status
  };

  return (
    <div
      onClick={toggleCard}
      className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xs lg:max-w-md border border-gray-200 cursor-pointer"
    >
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          {name}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="website-link ml-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500 hover:text-blue-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M12.293 3.707a1 1 0 010 1.414L9.414 8H15a1 1 0 110 2H9.414l2.879 2.879a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
              </svg>
            </a>
          )}
        </h2>

        {/* Favorite Button */}
        <button
          onClick={toggleFavorite} // Update favorite state
          className="favorite-btn text-gray-400 hover:text-[#A780C0]"
        >
          {isFavorited ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#A780C0]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 4.828a4 4 0 015.656 0L10 6.293l1.172-1.465a4 4 0 015.656 5.656l-6.36 6.36a1 1 0 01-1.415 0l-6.36-6.36a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 4.828a4 4 0 015.656 0L10 6.293l1.172-1.465a4 4 0 015.656 5.656l-6.36 6.36a1 1 0 01-1.415 0l-6.36-6.36a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Tags Section */}
      <div className="flex flex-wrap gap-2 mt-2">
        {areaOfInterest && (
          <span className="bg-yellow-100 text-yellow-600 text-xs font-medium px-2 py-1 rounded">
            {areaOfInterest}
          </span>
        )}
        {skills &&
          skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded"
            >
              {skill}
            </span>
          ))}
        {season && (
          <span className="bg-yellow-100 text-yellow-600 text-xs font-medium px-2 py-1 rounded">
            {season}
          </span>
        )}
        {type && (
          <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded">
            {type}
          </span>
        )}
      </div>

      {/* Description Section */}
      <p
        className={`text-gray-600 mt-3 text-sm ${
          isExpanded ? "" : "line-clamp-2"
        }`}
      >
        {description}
      </p>

      {/* Cost Section */}
      {cost && (
        <div className="mt-2 text-gray-700">
          <span className="font-medium">Cost: </span>
          {cost === "Low Cost" ? "$" : cost === "High Cost" ? "$$" : ""}
        </div>
      )}

      {/* Footer Section */}
      <div className="mt-4 flex justify-between text-sm text-gray-700">
        <span className="font-medium">📅 Deadline: {deadline}</span>
        <span className="font-medium">📍 {location}</span>
      </div>

      {/* Show Full Description Button */}
      {isExpanded && (
        <div className="mt-4 flex justify-between">
          <div className="text-sm text-gray-700">
            {grade && (
              <div>
                <span className="font-medium">Grade: </span>
                {grade[0] === grade[grade.length - 1]
                  ? grade[0]
                  : `${grade[0]} - ${grade[grade.length - 1]}`}
              </div>
            )}

            {age && (
              <div>
                <span className="font-medium">Age: </span>
                {age[0] === age[age.length - 1]
                  ? age[0]
                  : `${age[0]} - ${age[age.length - 1]}`}
              </div>
            )}
          </div>
          <button
            onClick={toggleCard}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};
