import React from "react";
import { Section } from "../components/Section";

export const Resources = () => {
  return (
    <div className="min-h-screen pt-[60px]">
      {/* Program Compass Section */}
      <Section
        title="Program Compass"
        description="Access a database with hundreds of opportunities, including internships, summer programs, and more. Tailor your approach with our precise filters to find the right opportunity for YOU."
        buttonText="open the database"
        link="/program-compass"
      />

      {/* Match and Revise Section */}
      <Section
        title="Match and Revise"
        description="Send in your application for the program you’re applying to for critiques and advice from several trained mentors who went through the same (or similar) processes and programs as you. We will review your application within 2 days, before sending you an email with a Google Doc with critiques and edits, and an invite to open a ticket in our Discord server to easily message our mentors for further advice and critiques for up to a week!"
        buttonText="get matched"
        link="/match-revise"
      />

      {/* Admissions Insider Section */}
      <Section
        title="Admissions Insider"
        description="Our newspaper of real stories from students who navigated summer programs, have advice for writing supplemental essays, an inside look of successful applications tips for nailing interns, and everything else interview-related."
        buttonText="open the newspaper"
        link="/admissions-insider"
      />

      {/* Email List Section */}
      <Section
        title="Email List"
        description="Sign up in 1 minute to get a curated list of our newly added opportunities straight to your inbox!"
        buttonText="sign up now"
        link="/email-list"
      />
    </div>
  );
};