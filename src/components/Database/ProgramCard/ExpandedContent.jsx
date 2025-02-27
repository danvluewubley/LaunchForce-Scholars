import React from "react";

export const ExpandedContent = ({ grade, age }) => {
  const formatGradeRange = (grades) => {
    if (!grades || grades.length === 0) return "";

    const gradeOrder = ["Freshman", "Sophomore", "Junior", "Senior"];
    const sortedGrades = [...grades].sort(
      (a, b) => gradeOrder.indexOf(a) - gradeOrder.indexOf(b)
    );

    return sortedGrades[0] === sortedGrades[sortedGrades.length - 1]
      ? sortedGrades[0]
      : `${sortedGrades[0]} - ${sortedGrades[sortedGrades.length - 1]}`;
  };

  const formatAgeRange = (ages) => {
    if (!ages || ages.length === 0) return "";

    const sortedAges = [...ages].sort((a, b) => a - b);
    return sortedAges[0] === sortedAges[sortedAges.length - 1]
      ? sortedAges[0]
      : `${sortedAges[0]} - ${sortedAges[sortedAges.length - 1]}`;
  };

  return (
    <div className="mt-4 flex justify-between">
      <div className="text-sm text-gray-700">
        {grade && grade.length > 0 && (
          <div>
            <span className="font-medium">Grade: </span>
            {formatGradeRange(grade)}
          </div>
        )}
        {age && age.length > 0 && (
          <div>
            <span className="font-medium">Age: </span>
            {formatAgeRange(age)}
          </div>
        )}
      </div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer">
        Close
      </button>
    </div>
  );
};
