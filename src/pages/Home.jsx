import React from "react";
import { Hero } from "../components/Hero";
import { Info } from "../components/Info";

export const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Info />
    </div>
  );
};
