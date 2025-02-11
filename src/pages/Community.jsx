import React, { useEffect } from "react";

export const Community = () => {
  useEffect(() => {
    document.title = "Community";
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          COMMUNITY
        </h2>
        <p className="font-anonymous text-lg sm:text-xl md:text-2xl lg:text-3xl w-full max-w-3xl mt-4">
          Join our Discord server to enter a virtual community to conveniently
          receive feedback on applications, grow your network, exchange
          internship anecdotes and advice, and more!
        </p>
      </div>
      <button
        className="font-anton text-2xl sm:text-3xl md:text-4xl bg-purple py-2 px-6 mt-6 rounded-lg shadow-md hover:bg-purple-500 transition-all duration-300"
        onClick={() => window.open("https://discord.gg/AsChQ88CCQ")}
      >
        JOIN HERE
      </button>
    </div>
  );
};
