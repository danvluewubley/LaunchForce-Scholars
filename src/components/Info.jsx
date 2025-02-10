import React from "react";

export const Info = () => {
  return (
    <div className="w-full px-4 md:px-[100px]">
      <p className="pt-[40px] font-anton text-purple text-[32px] sm:text-[40px]">
        What We Do
      </p>
      <hr className="w-[90%] mx-auto my-4" />

      {/* Program Compass Section */}
      <div>
        <h2 className="font-anton text-[40px] sm:text-[60px] md:text-[80px]">
          Program Compass
        </h2>
        <p className="font-anonymous text-[16px] sm:text-[24px] md:text-[40px] pb-[50px]">
          A tool designed to search through hundreds of programs which you can
          tailor to your interests and career ambitions.
        </p>
      </div>

      {/* Match & Revise Section */}
      <div>
        <h2 className="font-anton text-[40px] sm:text-[60px] md:text-[80px]">
          Match & Revise
        </h2>
        <p className="font-anonymous text-[16px] sm:text-[24px] md:text-[40px] pb-[50px]">
          Increase your chances of getting into programs by getting advice and
          critiques on your applications from trained mentors that were accepted
          to similar programs or have a similar background as you.
        </p>
      </div>

      {/* Admissions Insider Section */}
      <div>
        <h2 className="font-anton text-[40px] sm:text-[60px] md:text-[80px]">
          Admissions Insider
        </h2>
        <p className="font-anonymous text-[16px] sm:text-[24px] md:text-[40px] pb-[50px]">
          Our newspaper written by students for students. Find advice for
          writing applications, essay references, tips for nailing interviews,
          and everything else extracurricular related.
        </p>
      </div>

      {/* Join Our Community Section */}
      <div>
        <h2 className="font-anton text-[40px] sm:text-[60px] md:text-[80px]">
          Join Our Community
        </h2>
        <p className="font-anonymous text-[16px] sm:text-[24px] md:text-[40px] pb-[50px]">
          Join our Discord to enter a virtual community of high school students.
          Exchange internship anecdotes, get advice, get feedback on your
          applications, and more.
        </p>
      </div>

      {/* Email List Section */}
      <div>
        <h2 className="font-anton text-[40px] sm:text-[60px] md:text-[80px]">
          Email List
        </h2>
        <p className="font-anonymous text-[16px] sm:text-[24px] md:text-[40px] pb-[50px]">
          Sign up to intermittently receive a curated list of our newly added
          internships and blog posts.
        </p>
      </div>

      {/* Apply to Our Team Section */}
      <div>
        <h2 className="font-anton text-[40px] sm:text-[60px] md:text-[80px]">
          Apply to Our Team
        </h2>
        <p className="font-anonymous text-[16px] sm:text-[24px] md:text-[40px] pb-[50px]">
          We’re always looking for new researchers, mentors, writers and
          outreach managers. Find a role fit for you, reviewed on a rolling
          basis.
        </p>
      </div>
    </div>
  );
};