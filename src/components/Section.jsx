import React from "react";

export const Section = ({ title, description, buttonText }) => {
  return (
    <section className="pl-[49px] pb-[60px]">
      <h2 className="font-anton text-[80px]">{title}</h2>
      <p className="font-anonymous text-2xl w-1/2 pt-8 pb-12 font-bold">
        {description}
      </p>
      <button className="bg-purple font-anton text-[40px] px-8 py-3 cursor-pointer">
        {buttonText}
      </button>
    </section>
  );
};