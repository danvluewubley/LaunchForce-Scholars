import React from "react";

export const Hero = () => {
  return (
    <div className="w-full min-h-[calc(100vh-120px)] bg-black max-h-screen flex flex-col items-center">
      <div className="h-[60%] flex justify-center items-center">
        <div className="bg-purple h-max-screen w-[80%] rounded-[2vw]">
          <p className="text-[80px] px-[48px] font-anton py-10 mb-10">
            Opportunities, Mentorship, and Advice for{" "}
            <span className="text-white">Building Standout Experiences</span>{" "}
            for College Admissions
          </p>
        </div>
      </div>
      <div className="h-[40%] w-[80%] flex pt-[40px]">
        <div className="w-1/3 flex flex-col items-center">
          <hr className="w-[80%] h-[2px] bg-white" />
          <p className="text-white font-anonymous text-[40px] text-center pt-[10px]">
            Access Resources, Mentorship & Community 
          </p>
        </div>
        <div className="w-1/3 flex flex-col items-center">
          <hr className="w-[80%] h-[2px] bg-white" />
          <p className="text-white font-anonymous text-[40px] text-center pt-[10px]">
            Apply and Get Offers from your Dream Internships
          </p>
        </div>
        <div className="w-1/3 flex flex-col items-center">
          <hr className="w-[80%] h-[2px] bg-white" />
          <p className="text-white font-anonymous text-[40px] text-center pt-[10px]">
            Completely Free
          </p>
        </div>
      </div>
    </div>
  );
};
