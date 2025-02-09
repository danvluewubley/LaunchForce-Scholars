import React from "react";
import { Link } from "react-router-dom";
import "../styles/underline.css";

export const Navbar = () => {
  return (
    <div className="w-full bg-black">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center h-[166px] px-6">
        <Link
          to="/"
          className="font-anton text-purple-500 text-[45px] whitespace-nowrap"
        >
          LaunchForce Scholars
        </Link>

        <ul className="flex gap-8 text-[25px] font-anonymous text-white">
          <li>
            <Link to="/resources" className="link">
              RESOURCES
            </Link>
          </li>
          <li>
            <Link to="/community" className="link">
              JOIN OUR COMMUNITY
            </Link>
          </li>
          <li>
            <Link to="/team" className="link">
              APPLY TO OUR TEAM
            </Link>
          </li>
          <li>
            <Link to="#" className="link">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
