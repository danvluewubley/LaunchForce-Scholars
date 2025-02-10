import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../configs/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "../styles/underline.css";
import { LoginModal } from "./LoginModal";

export const Navbar = () => {
  const [isResourceDropdownOpen, setIsResourceDropdownOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAccountDropdownOpen(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLoginClick = () => {
    setIsSignUp(false);
    setIsModalOpen(true);
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
    setIsModalOpen(true);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
      navigate("/");
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  return (
    <div className="min-w-screen bg-black">
      <nav className="w-full md:max-w-[90%] mx-auto flex justify-between items-center h-[80px] px-6">
        <Link
          to="/"
          className="font-anton text-purple text-[30px] whitespace-nowrap"
        >
          LaunchForce Scholars
        </Link>

        <button
          className="text-white text-3xl md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul
          className={`md:flex gap-6 text-[18px] font-anonymous text-white absolute md:static top-[80px] left-0 w-full bg-black md:bg-transparent md:w-auto md:flex-row md:items-center ${
            menuOpen ? "flex flex-col" : "hidden"
          } max-[1193px]:text-base max-[1193px]:gap-4`}
        >
          {/* Resources Dropdown */}
          <li className="relative w-full md:w-auto">
            <Link
              to="/resources"
              className="py-2 px-4 w-full text-left md:w-auto md:text-center hover:text-purple flex justify-between items-center"
              onClick={(e) => {
                if (window.innerWidth < 768) {
                  e.preventDefault();
                  setIsResourceDropdownOpen(!isResourceDropdownOpen);
                }
              }}
              onMouseEnter={() =>
                window.innerWidth >= 768 && setIsResourceDropdownOpen(true)
              }
            >
              RESOURCES
              <span className="md:hidden">
                {isResourceDropdownOpen ? "▲" : "▼"}
              </span>
            </Link>

            {/* Dropdown Content */}
            <div
              className={`md:absolute md:left-0 md:mt-1 md:w-56 bg-black border border-gray-700 text-white shadow-lg rounded-lg transition-all duration-200 w-full ${
                isResourceDropdownOpen ? "block" : "hidden"
              }`}
              onMouseEnter={() => setIsResourceDropdownOpen(true)}
              onMouseLeave={() => setIsResourceDropdownOpen(false)}
            >
              <ul className="md:p-2">
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

          {/* Other Navbar Links */}
          <li>
            <Link
              to="/community"
              className="py-2 px-4 w-full text-left md:w-auto md:text-center hover:text-purple flex justify-between items-center"
            >
              JOIN OUR COMMUNITY
            </Link>
          </li>
          <li>
            <Link
              to="/apply"
              className="py-2 px-4 w-full text-left md:w-auto md:text-center hover:text-purple flex justify-between items-center"
            >
              APPLY TO OUR TEAM
            </Link>
          </li>

          {/* Account Dropdown (Logged In User) */}
          {user ? (
            <li className="relative w-full md:w-auto mb-6 md:mb-0">
              <button
                className="py-2 px-4 w-full text-left md:w-auto md:text-center hover:text-purple flex justify-between items-center"
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setIsAccountDropdownOpen(!isAccountDropdownOpen); // Toggle on mobile
                  }
                }}
                onMouseEnter={() =>
                  window.innerWidth >= 768 && setIsAccountDropdownOpen(true)
                } // Open dropdown on hover (desktop)
                onMouseLeave={() =>
                  window.innerWidth >= 768 && setIsAccountDropdownOpen(false)
                } // Close dropdown on mouse leave (desktop)
              >
                MY ACCOUNT
                <span className="md:hidden">
                  {isAccountDropdownOpen ? "▲" : "▼"}
                </span>
              </button>

              {/* Dropdown Content */}
              <div
                className={`md:absolute md:left-0 top-full md:w-56 bg-black border border-gray-700 text-white shadow-lg rounded-lg transition-all duration-200 ${
                  isAccountDropdownOpen ? "block" : "hidden"
                }`}
                onMouseEnter={() => setIsAccountDropdownOpen(true)} // Keep open when hovering the dropdown
                onMouseLeave={() => setIsAccountDropdownOpen(false)} // Close when mouse leaves the dropdown
              >
                <ul className="md:p-2">
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/saved">Saved Programs</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <button onClick={handleLogout}>Log out</button>
                  </li>
                </ul>
              </div>
            </li>
          ) : (
            <>
              <li>
                <button
                  onClick={handleLoginClick}
                  className="py-2 px-4 hover:text-purple"
                >
                  LOGIN
                </button>
              </li>
              <li>
                <button
                  onClick={handleSignUpClick}
                  className="py-2 px-4 hover:text-purple"
                >
                  SIGN UP
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>

      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isSignUp={isSignUp}
      />
    </div>
  );
};
