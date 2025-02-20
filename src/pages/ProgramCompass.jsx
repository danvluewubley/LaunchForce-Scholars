import React, { useEffect } from "react";
import { Database } from "../components/Database/Database";

export const ProgramCompass = () => {
  useEffect(() => {
    document.title = "Program Compass";
  });

  return (
    <div>
      <header className="h-[256px] bg-purple flex flex-col justify-center">
        <h2 className="text-center font-anton text-4xl md:text-6xl lg:text-[100px]">
          PROGRAM COMPASS
        </h2>
        <p className="font-anonymous py-4 px-5 text-lg md:text-[25px] text-center">
          Tailor your internship search to find the program that matches your
          passions and goals.
        </p>
      </header>
      <Database />
    </div>
  );
};
