import React from "react";

export const Role = ({ title, description, hours, experience, buttonText }) => {
  return (
    <div className="mx-[49px]">
      <h2 className="font-antonio font-bold text-[30px] md:text-[36px] lg:text-[40px] py-4">
        {title}
      </h2>
      <p className="font-anonymous font-bold text-2xl pb-8">
        <span className="font-bold">ROLE DESCRIPTION:</span> {description}
        <br />
        <br />
        <span className="font-bold">EXPECTED HOURS:</span> {hours} <br />
        <br />
        <span className="font-bold">EXPERIENCE REQUIRED:</span> {experience}
      </p>
      <button className="bg-purple font-anton text-4xl px-[69px] py-[19px] mb-10 cursor-pointer">
        {buttonText}
      </button>
    </div>
  );
};
