import React, { useState } from "react";
import { ProgramCard } from "./ProgramCard";

export const Database = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const programs = [
    {
      name: "AI Research Internship",
      tags: ["Technology", "AI", "Machine Learning", "Python"],
      description:
        "A summer research internship focused on AI applications and data science. In this program, you will work on cutting-edge AI models and machine learning algorithms, and collaborate with industry professionals to develop practical solutions for real-world challenges.",
      deadline: "March 15, 2025",
      location: "Remote",
      website: "https://official-website.com",
      isFavoritedInitially: false,
    },
    {
      name: "Data Science Internship",
      tags: ["Data Science", "Machine Learning", "Python", "Statistics"],
      description:
        "A hands-on internship program designed for students interested in data science. The program offers practical experience in handling and analyzing large datasets, statistical modeling, and machine learning techniques.",
      deadline: "May 1, 2025",
      location: "New York, NY",
      website: "https://another-website.com",
      isFavoritedInitially: true,
    },
    {
      name: "Web Development Bootcamp",
      tags: ["Web Development", "JavaScript", "React", "Node.js"],
      description:
        "A bootcamp for aspiring web developers to learn full-stack JavaScript. This bootcamp covers front-end and back-end development, including React, Node.js, and databases, helping you become a full-stack web developer.",
      deadline: "June 10, 2025",
      location: "Online",
      website: "https://webdev-bootcamp.com",
      isFavoritedInitially: false,
    },
  ];


  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="flex items-center border border-gray-300 rounded-lg p-2 w-256">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none px-2 py-1 w-full"
        />
        <button className="ml-2 px-4 py-1 bg-blue-500 text-white rounded-lg">
          Search
        </button>
      </div>
      <div className="w-256 flex justify-between">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition"
        >
          <span className="mr-2">Filter</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 01.8 1.6l-4.4 5.5V15a1 1 0 01-.553.894l-3 1.5A1 1 0 017 16.5V10.6L2.8 6.6A1 1 0 013 5z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                ✖
              </button>

              <h2 className="text-lg font-semibold mb-4">Filter Options</h2>

              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Newly Added
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Deadline
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Financial Accessibility
                </label>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-600"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
        <button className="text-blue-500 cursor-pointer">Reset Filter</button>
      </div>
      <div className="w-256">
        {programs.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </div>
    </div>
  );
};
