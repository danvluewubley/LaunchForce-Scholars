import React from "react";

export const Hero = () => {
  return (
    <div className="w-full md:min-h-[calc(100vh-80px)] bg-black flex flex-col items-center px-4">
      <div className="h-auto md:h-[60%] flex justify-center items-center">
        <div className="bg-purple w-full md:w-[80%] rounded-[4vw] p-6 md:p-10">
          <p className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[80px] px-4 font-anton py-6 text-center">
            Opportunities, Mentorship, and Advice for{" "}
            <span className="text-white">Building Standout Experiences</span>{" "}
            for College Admissions
          </p>
        </div>
      </div>

      <div className="h-auto md:h-[40%] w-full md:w-[80%] flex flex-col md:flex-row gap-6 md:gap-0 pt-6 md:pt-[40px]">
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <hr className="w-[60%] md:w-[80%] h-[2px] bg-white" />
          <p className="text-white font-anonymous text-[24px] sm:text-[32px] md:text-[40px] text-center pt-4">
            Access Resources, Mentorship & Community 
          </p>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <hr className="w-[60%] md:w-[80%] h-[2px] bg-white" />
          <p className="text-white font-anonymous text-[24px] sm:text-[32px] md:text-[40px] text-center pt-4">
            Apply and Get Offers from your Dream Internships
          </p>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <hr className="w-[60%] md:w-[80%] h-[2px] bg-white" />
          <p className="text-white font-anonymous text-[24px] sm:text-[32px] md:text-[40px] text-center pt-4 pb-4">
            Completely Free
          </p>
        </div>
      </div>
    </div>
  );
};