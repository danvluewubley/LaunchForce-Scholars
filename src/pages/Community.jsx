import React from "react";

export const Community = () => {
  return (
    <div className="flex h-[580px] flex-col items-center justify-around">
      <div className="flex flex-col items-center">
        <h2 className="font-anton text-[100px]">COMMUNITY</h2>
        <p className="font-anonymous text-[40px] w-[80%]">
          Join our Discord server to enter a virtual community to conveniently
          receive feedback on applications, grow your network, exchange
          internship anecdotes and advice, and more!
        </p>
      </div>
      <button
        className="font-anton text-[40px] bg-purple py-2 px-4 cursor-pointer"
        onClick={() => window.open("https://discord.gg/AsChQ88CCQ")}
      >
        JOIN HERE
      </button>
    </div>
  );
};
