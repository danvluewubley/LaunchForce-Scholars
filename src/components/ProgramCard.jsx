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
  eligibility,
  isRollingDeadline,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
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

  return (
    <div
      onClick={toggleCard}
      className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xs lg:max-w-md border border-gray-200 cursor-pointer"
    >
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center w-[80%]">
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
          className="favorite-btn text-gray-400 hover:text-[#A780C0] cursor-pointer"
        >
          {isFavorited ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#A780C0] transition duration-300"
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
        {eligibility && eligibility !== "None" && (
          <span
            className={`${
              eligibility === "Minority"
                ? "bg-purple-100 text-purple-600"
                : eligibility === "Female"
                ? "bg-pink-100 text-pink-600"
                : "bg-yellow-100 text-yellow-600"
            } text-xs font-medium px-2 py-1 rounded`}
          >
            {eligibility}
          </span>
        )}

        {areaOfInterest && (
          <div className="flex flex-wrap gap-2">
            {(Array.isArray(areaOfInterest)
              ? areaOfInterest
              : areaOfInterest.split(",")
            ).map((interest, index) => (
              <span
                key={index}
                className={`${
                  interest.trim() === "Business"
                    ? "bg-blue-100 text-blue-600"
                    : interest.trim() === "Entrepreneurship"
                    ? "bg-teal-100 text-teal-600"
                    : interest.trim() === "Finance"
                    ? "bg-green-100 text-green-600"
                    : interest.trim() === "Accounting"
                    ? "bg-gray-100 text-gray-600"
                    : interest.trim() === "Marketing"
                    ? "bg-red-100 text-red-600"
                    : interest.trim() === "Science"
                    ? "bg-yellow-100 text-yellow-600"
                    : interest.trim() === "Technology"
                    ? "bg-indigo-100 text-indigo-600"
                    : interest.trim() === "Health"
                    ? "bg-pink-100 text-pink-600"
                    : interest.trim() === "Biology"
                    ? "bg-green-100 text-green-600"
                    : interest.trim() === "Chemistry"
                    ? "bg-blue-100 text-blue-600"
                    : interest.trim() === "Genetics"
                    ? "bg-purple-100 text-purple-600"
                    : interest.trim() === "Environmental"
                    ? "bg-lime-100 text-lime-600"
                    : interest.trim() === "Computer Science"
                    ? "bg-teal-100 text-teal-600"
                    : interest.trim() === "Biochemistry"
                    ? "bg-pink-100 text-pink-600"
                    : interest.trim() === "Social Advocacy"
                    ? "bg-orange-100 text-orange-600"
                    : "bg-black text-white"
                } text-xs font-medium px-2 py-1 rounded`}
              >
                {interest.trim()}
              </span>
            ))}
          </div>
        )}

        {skills &&
          skills[0] != "TBA" &&
          skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded"
            >
              {skill}
            </span>
          ))}
        {season && (
          <div className="flex flex-wrap gap-2">
            {(Array.isArray(season) ? season : season.split(",")).map(
              (s, index) => (
                <span
                  key={index}
                  className={`${
                    s.trim() === "Summer"
                      ? "bg-yellow-100 text-yellow-600"
                      : s.trim() === "Fall"
                      ? "bg-orange-100 text-orange-600"
                      : s.trim() === "Winter"
                      ? "bg-blue-100 text-blue-600"
                      : s.trim() === "Spring"
                      ? "bg-green-100 text-green-600"
                      : s.trim() === "Year Round"
                      ? "bg-gray-100 text-gray-600"
                      : s.trim() === "Long Term"
                      ? "bg-indigo-100 text-indigo-600"
                      : s.trim() === "1+ Years"
                      ? "bg-teal-100 text-teal-600"
                      : s.trim() === "<= 1 Month"
                      ? "bg-red-100 text-red-600"
                      : "bg-black text-white"
                  } text-xs font-medium px-2 py-1 rounded`}
                >
                  {s.trim()}
                </span>
              )
            )}
          </div>
        )}

        {(cost === "Paid/Stipend" ||
          cost === "Aid Available" ||
          cost === "No Aid Available") && (
          <span
            className={`${
              cost === "Paid/Stipend"
                ? "bg-green-100 text-green-600" // Green for Paid/Stipend
                : cost === "Aid Available"
                ? "bg-teal-100 text-teal-600" // Teal for Aid Available
                : cost === "No Aid Available"
                ? "bg-red-100 text-red-600" // Red for No Aid Available
                : ""
            } text-xs font-medium px-2 py-1 rounded`}
          >
            {cost === "Paid/Stipend"
              ? "Paid/Stipend"
              : cost === "Free"
              ? "Free"
              : cost === "Aid Available"
              ? "Aid Available"
              : cost === "No Aid Available"
              ? "No Aid Available"
              : ""}
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
          {cost === "Free"
            ? "Free"
            : cost === "$1-100"
            ? "$"
            : cost === "$101-500"
            ? "$$"
            : cost === "$501-1000"
            ? "$$$"
            : cost === "$1000+"
            ? "$$$$"
            : ""}
        </div>
      )}

      {/* Footer Section */}
      <div className="mt-4 flex justify-between text-sm text-gray-700">
        <span className="font-medium">
          📅 Deadline:{" "}
          {deadline && !isNaN(new Date(deadline))
            ? new Date(deadline).toLocaleDateString()
            : isRollingDeadline
            ? "Rolling"
            : ""}
          {deadline && isRollingDeadline && !isNaN(new Date(deadline))
            ? " (Rolling)"
            : ""}
        </span>

        <span className="font-medium">📍 {location}</span>
      </div>

      {/* Show Full Description Button */}
      {isExpanded && (
        <div className="mt-4 flex justify-between">
          <div className="text-sm text-gray-700">
            {grade && (
              <div>
                <span className="font-medium">Grade: </span>
                {grade.length > 0 &&
                  (() => {
                    const gradeOrder = [
                      "Freshman",
                      "Sophomore",
                      "Junior",
                      "Senior",
                    ];
                    const sortedGrades = [...grade].sort(
                      (a, b) => gradeOrder.indexOf(a) - gradeOrder.indexOf(b)
                    );

                    return sortedGrades[0] ===
                      sortedGrades[sortedGrades.length - 1]
                      ? sortedGrades[0]
                      : `${sortedGrades[0]} - ${
                          sortedGrades[sortedGrades.length - 1]
                        }`;
                  })()}
              </div>
            )}

            {age && (
              <div>
                <span className="font-medium">Age: </span>
                {age.length > 0 &&
                  (() => {
                    const sortedAges = [...age].sort((a, b) => a - b);
                    return sortedAges[0] === sortedAges[sortedAges.length - 1]
                      ? sortedAges[0]
                      : `${sortedAges[0]} - ${
                          sortedAges[sortedAges.length - 1]
                        }`;
                  })()}
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
