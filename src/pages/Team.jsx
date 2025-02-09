import React from "react";
import { Role } from "../components/Role";

export const Team = () => {
  return (
    <div className="flex flex-col">
      <div className="ml-[49px]">
        <h2 className="font-anton text-[100px] mt-[62px]">Join Our Team</h2>
        <p className="font-anonymous text-2xl w-1/3 mt-10 mb-[40px]">
          Interested in working with us? Job listings will open and be reviewed
          on a rolling basis.
        </p>
      </div>

      <h2 className="font-anton text-purple text-[40px] ml-[49px]">Roles</h2>
      <hr className="w-[94%] self-center" />

      <section className="flex flex-col">
        {/* Pass data to the Role component */}
        <Role
          title="Researchers"
          description="Tasked with finding various opportunities to be added to our program compass, minimum 10 opportunities weekly."
          hours="About 2 hours / week"
          experience="None, will receive training."
          buttonText="APPLY HERE"
        />
        <hr className="w-[94%] self-center" />

        <Role
          title="Mentors"
          description="Tasked with critiquing maximum two applications per week, including revising supplemental essays, reviewing an application in its whole, providing advice for mentees."
          hours="3 hours / week"
          experience="Must have prior experience in applying and accepted to programs. Understanding of the college admissions process and having passion in your extracurricular activities preferred. Will receive further training."
          buttonText="APPLY HERE"
        />
        <hr className="w-[94%] self-center" />

        <Role
          title="Outreach Managers"
          description="Tasked with conducting outreach. May include but not limited to creating social media posts for our account, recruiting members for our team, and organizing workshops."
          hours="About 2 hours / week, including virtual meetings."
          experience="Communication & organization skills needed. Graphic Design skills preferred."
          buttonText="APPLY HERE"
        />
        <hr className="w-[94%] self-center" />

        <Role
          title="Writers"
          description="Tasked with writing posts for our Admissions Insider newsletter, minimum one article/week."
          hours="About 1 hour / week"
          experience="Those with writing experience preferred. Writing abilities required."
          buttonText="APPLY HERE"
        />
      </section>
    </div>
  );
};