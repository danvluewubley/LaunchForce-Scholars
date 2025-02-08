import React from "react";

export const Footer = () => {
  return (
    <div className="w-full bg-gray h-[245px] text-white flex items-center justify-center pt-[40px]">
      <div className="w-1/3 h-full flex flex-col pl-[100px] text-purple">
        <h2 className="font-anton text-[40px]">Contact Us</h2>
        <div className="font-anonymous text-[20px]">
          <p>Email: launchforcescholars@gmail.com </p>
          <p>Instagram: </p>
        </div>
      </div>
      <div className="w-1/3 h-full flex flex-col pl-[100px] text-purple">
        <h2 className="font-anton text-[40px]">Pages</h2>
        <div className="font-anonymous text-[20px] flex">
          <div className="w-1/2">
            <p>Resources</p>
            <p>Admission Insiders</p>
            <p>Apply to Our Team</p>
          </div>
          <div className="w-1/2">
            <p>Program Compass</p>
            <p>Community</p>
          </div>
        </div>
      </div>
      <div className="w-1/3 h-full flex flex-col pl-[100px] text-purple">
        <h2 className="font-anton text-[40px]">Relevant Links</h2>
        <div className="font-anonymous text-[20px]">
          <p>Sign Up to Our Email List</p>
          <p>Match & Revise Service</p>
        </div>
      </div>
    </div>
  );
};
