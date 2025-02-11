import React from "react";
import { useNavigate } from "react-router-dom";

export const Section = ({ title, description, buttonText, link }) => {
  const navigate = useNavigate();

  return (
    <section className="px-[49px] pb-[60px]">
      <h2 className="font-anton text-4xl md:text-6xl lg:text-[80px]">{title}</h2>
      <p className="font-anonymous text-2xl pt-8 pb-12 font-bold">
        {description}
      </p>
      <button
        className="bg-purple font-anton text-2xl md:text-4xl px-8 py-3 cursor-pointer"
        onClick={() => navigate(link)}
      >
        {buttonText}
      </button>
    </section>
  );
};
