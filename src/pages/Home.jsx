import React, { useEffect } from "react";
import { Hero } from "../components/Hero";
import { Info } from "../components/Info";

export const Home = () => {
  useEffect(() => {
    document.title = "LaunchForce Scholars";
  });

  return (
    <div className="flex flex-col">
      <Hero />
      <Info />
    </div>
  );
};
