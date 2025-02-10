import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
   const scrollToTop = () => {
     window.scrollTo(0, 0);
   };

  return (
    <div className="w-full bg-gray h-auto text-white flex flex-col md:flex-row py-[40px] px-4 md:px-[100px]">
      {/* Contact Us Section */}
      <div className="w-full md:w-1/3 h-full flex flex-col text-purple mb-6 md:mb-0">
        <h2 className="font-anton text-[24px] sm:text-[30px] md:text-[40px]">
          Contact Us
        </h2>
        <div className="font-anonymous text-[16px] sm:text-[18px] md:text-[20px]">
          <p>Email: launchforcescholars@gmail.com </p>
          <p>
            Instagram:{" "}
            <a
              className="hover:underline cursor-pointer"
              href="https://www.instagram.com/launchforcescholars/"
              target="_blank"
            >
              launchforcescholars
            </a>
          </p>
        </div>
      </div>

      {/* Pages Section */}
      <div className="w-full md:w-1/3 h-full flex flex-col text-purple mb-6 md:mb-0">
        <h2 className="font-anton text-[24px] sm:text-[30px] md:text-[40px]">
          Pages
        </h2>
        <div className="font-anonymous text-[16px] sm:text-[18px] md:text-[20px] flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <p>
              <Link to="/resources" onClick={scrollToTop}>
                Resources
              </Link>
            </p>
            <p>
              <Link to="/admission-insiders" onClick={scrollToTop}>
                Admission Insiders
              </Link>
            </p>
            <p>
              <Link to="/apply" onClick={scrollToTop}>
                Apply to Our Team
              </Link>
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <p>
              <Link to="/program-compass" onClick={scrollToTop}>
                Program Compass
              </Link>
            </p>
            <p>
              <Link to="/community" onClick={scrollToTop}>
                Community
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Relevant Links Section */}
      <div className="w-full md:w-1/3 h-full flex flex-col text-purple">
        <h2 className="font-anton text-[24px] sm:text-[30px] md:text-[40px]">
          Relevant Links
        </h2>
        <div className="font-anonymous text-[16px] sm:text-[18px] md:text-[20px]">
          <p>Sign Up to Our Email List</p>
          <p>Match & Revise Service</p>
        </div>
      </div>
    </div>
  );
};
