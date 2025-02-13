import React, { useEffect } from "react";

export const Match = () => {
  useEffect(() => {
    document.title = "Match and Revise";
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-2xl font-semibold text-gray-700">
        🚧 Work in Progress 🚧
      </p>
      <p className="text-gray-500 mt-2">
        This feature is currently under development. Stay tuned!
      </p>
    </div>
  );
};
