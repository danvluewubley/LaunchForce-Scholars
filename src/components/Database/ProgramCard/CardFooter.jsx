import React from "react";

export const CardFooter = ({ deadline, location, isRollingDeadline }) => {
  return (
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
  );
};
