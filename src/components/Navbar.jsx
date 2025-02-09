import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../configs/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "../styles/underline.css";
import { LoginModal } from "./LoginModal";

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  return (
    <div className="w-full bg-black">
      <nav className="max-w-screen mx-auto flex justify-between items-center h-[120px] px-6">
        <Link
          to="/"
          className="font-anton text-purple text-[45px] whitespace-nowrap"
        >
          LaunchForce Scholars
        </Link>

        <ul className="flex gap-8 text-[20px] font-anonymous text-white relative">
          <li
            className="relative link"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="inline-block pb-2">
              <Link to="/resources">RESOURCES</Link>
            </span>
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
            {user ? (
              <button onClick={handleLogout} className="link cursor-pointer">
                LOG OUT
              </button>
            ) : (
              <button
                onClick={handleLoginClick}
                className="link cursor-pointer"
              >
                LOGIN
              </button>
            )}
          </li>

          {!user && (
            <li>
              <button
                onClick={handleSignUpClick}
                className="link cursor-pointer"
              >
                SIGN UP
              </button>
            </li>
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
