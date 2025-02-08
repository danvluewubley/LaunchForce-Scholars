import React from "react";

export const Navbar = () => {
  return (
    <div className="w-full bg-black">
      <nav className="w-max-screen flex justify-between text-[45px] h-[166px] items-center">
        <ul className="font-anton">
          <li className="text-wrap w-[256px] pl-[24px] text-purple">
            LaunchForce Scholars
          </li>
        </ul>
        <ul className="flex justify-around text-[25px] w-1/2 font-anonymous text-white">
          <li>RESOURCES</li>
          <li>JOIN OUR COMMUNITY</li>
          <li>APPLY TO OUR TEAM</li>
          <li>Login</li>
        </ul>
      </nav>
    </div>
  );
};
