import React from "react";
import { useNavigate } from "react-router-dom";

export const Section = ({ title, description, buttonText, link }) => {
  const navigate = useNavigate();

  return (
    <section className="pl-[49px] pb-[60px]">
      <h2 className="font-anton text-[80px]">{title}</h2>
      <p className="font-anonymous text-2xl w-1/2 pt-8 pb-12 font-bold">
        {description}
      </p>
      <button
        className="bg-purple font-anton text-[40px] px-8 py-3 cursor-pointer"
        onClick={() => navigate(link)}
      >
        {buttonText}
      </button>
    </section>
  );
};
