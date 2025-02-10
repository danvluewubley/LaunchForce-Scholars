import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };

  const handleNavigation = (path) => {
    navigate(path, { replace: false });
    setTimeout(() => window.scrollTo(0, 0), 0);
  };


  return (
    <div className="w-full bg-gray h-auto text-white flex flex-col md:flex-row py-[40px] px-4 md:px-[100px]">
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
              rel="noopener noreferrer"
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
            <Link
              to="/resources"
              onClick={() => handleNavigation("/resources")}
              className="hover:underline cursor-pointer"
            >
              Resources
            </Link>
            <p>
              <Link
                to="/admissions-insider"
                onClick={() => handleNavigation("/admissions-insider")}
                className="hover:underline cursor-pointer"
              >
                Admission Insiders
              </Link>
            </p>
            <p>
              <Link
                to="/apply"
                onClick={() => handleNavigation("/apply")}
                className="hover:underline cursor-pointer"
              >
                Apply to Our Team
              </Link>
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <p>
              <Link
                to="/program-compass"
                onClick={() => handleNavigation("/program-compass")}
                className="hover:underline cursor-pointer"
              >
                Program Compass
              </Link>
            </p>
            <p>
              <Link
                to="/community"
                onClick={() => handleNavigation("/community")}
                className="hover:underline cursor-pointer"
              >
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
          <p>
            <Link
              to="/email-list"
              onClick={() => handleNavigation("/email-list")}
              className="hover:underline cursor-pointer"
            >
              Sign Up to Our Email List
            </Link>
          </p>
          <p>
            <Link
              to="/match-revise"
              onClick={() => handleNavigation("/match-revise")}
              className="hover:underline cursor-pointer"
            >
              Match & Revise Service
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
