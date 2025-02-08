import React from "react";

export const Hero = () => {
  return (
    <div className="w-full bg-black h-[1000px] flex flex-col items-center pt-[25px]">
      <div className="h-[60%] flex justify-center items-center">
        <div className="bg-purple h-full w-[80%] rounded-[2vw] flex items-center">
          <p className="text-[80px] px-[48px] font-anton">
            Opportunities, Mentorship, and Advice for{" "}
            <span className="text-white">Building Standout Experiences</span>{" "}
            for College Admissions
          </p>
        </div>
      </div>
      <div className="h-[40%] w-[80%] flex pt-[100px]">
        <div className="w-1/3 flex flex-col items-center">
          <div className="w-[57px] h-[57px] rounded-[100%] bg-gray"></div>
          <p className="text-white font-anonymous text-[40px] text-center pt-[10px]">
            Access Resources, Mentorship & Community 
          </p>
        </div>
        <div className="w-1/3 flex flex-col items-center">
          <div className="w-[57px] h-[57px] rounded-[100%] bg-gray"></div>
          <p className="text-white font-anonymous text-[40px] text-center pt-[10px]">
            Apply and Get Offers from your Dream Internships
          </p>
        </div>
        <div className="w-1/3 flex flex-col items-center">
          <div className="w-[57px] h-[57px] rounded-[100%] bg-gray"></div>
          <p className="text-white font-anonymous text-[40px] text-center pt-[10px]">
            Completely Free
          </p>
        </div>
      </div>
    </div>
  );
};
