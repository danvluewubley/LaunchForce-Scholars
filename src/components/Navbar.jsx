import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/underline.css'

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full bg-black">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center h-[120px] px-6">
        <Link
          to="/"
          className="font-anton text-purple text-[45px] whitespace-nowrap"
        >
          LaunchForce Scholars
        </Link>

        <ul className="flex gap-8 text-[25px] font-anonymous text-white relative">
          <li
            className="relative link"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="inline-block pb-2">
              <Link to='/resources'>RESOURCES</Link>
            </span>{" "}
            <div
              className={`absolute left-0 top-full w-56 bg-black border border-gray-700 text-white shadow-lg rounded-lg transition-opacity duration-200 ${
                isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <ul>
                <li className="px-4 py-2 hover:bg-gray-800">
                  <Link to="/program-compass">Program Compass</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-800">
                  <Link to="/match-revise">Match and Revise</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-800">
                  <Link to="/admissions-insider">Admissions Insider</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-800">
                  <Link to="/email-list">Email List</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link to="/community" className="link">
              JOIN OUR COMMUNITY
            </Link>
          </li>
          <li>
            <Link to="/apply" className="link">
              APPLY TO OUR TEAM
            </Link>
          </li>
          <li>
            <Link to="/login" className="link">
              LOGIN
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
