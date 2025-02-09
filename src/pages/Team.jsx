import React from "react";

export const Team = () => {
  return (
    <div className="flex flex-col">
      <div className="ml-[49px]">
        <h2 className="font-anton text-[100px] mt-[62px]">Join Our Team</h2>
        <p className="font-anonymous text-2xl w-1/3 mt-10 mb-[40px]">
          Interested in working with us? Job listing will open and be reviewed
          on a rolling basis.
        </p>
      </div>
      <h2 className="font-anton text-purple text-[40px] ml-[49px]">Roles</h2>
      <hr className="w-[94%] self-center" />
      <section className="flex flex-col">
        <div className="ml-[49px]">
          <h2 className="font-antonio font-bold text-[40px] py-4">
            Researchers
          </h2>
          <p className="font-anonymous font-bold text-2xl w-[60%] pb-8">
            ROLE DESCRIPTION: Tasked with finding various opportunities to be
            added to our program compass, minimum 10 opportunities weekly.
            <br /> <br />
            EXPECTED HOURS: About 2 hours / week. <br />
            <br />
            EXPERIENCE REQUIRED: None, will receive training.
          </p>
          <button className="bg-purple font-anton text-4xl px-[69px] py-[19px] mb-10">
            APPLY HERE
          </button>
        </div>
        <hr className="w-[94%] self-center" />
        <div className="ml-[49px]">
          <h2 className="font-antonio font-bold text-[40px] py-4">Mentors</h2>
          <p className="font-anonymous font-bold text-2xl w-[60%] pb-8">
            ROLE DESCRIPTION: Tasked with critiquing maximum two applications
            per week, including revising supplemental essays, reviewing an
            application in its whole, providing advice for mentees.
            <br />
            <br />
            EXPECTED HOURS: 3 hours / week <br />
            <br />
            EXPERIENCE REQUIRED: Must have prior experience in applying and
            accepted to programs. Understanding of the college admissions
            process and having passion in your extracurricular activities
            preferred. Will receive further training.
          </p>
          <button className="bg-purple font-anton text-4xl px-[69px] py-[19px] mb-10">
            APPLY HERE
          </button>
        </div>
        <hr className="w-[94%] self-center" />
        <div className="ml-[49px]">
          <h2 className="font-antonio font-bold text-[40px] py-4">
            Outreach Managers
          </h2>
          <p className="font-anonymous font-bold text-2xl w-[60%] pb-8">
            ROLE DESCRIPTION: Tasked with conducting outreach. May include but
            not limited to creating social media posts for our account,
            recruiting members for our team, and organizing workshops.
            <br />
            <br />
            EXPECTED HOURS: About 2 hours / week, including virtual meetings.{" "}
            <br />
            <br />
            EXPERIENCE REQUIRED: Communication & organization skills needed.
            Graphic Design skills preferred.
          </p>
          <button className="bg-purple font-anton text-4xl px-[69px] py-[19px] mb-10">
            APPLY HERE
          </button>
        </div>
        <hr className="w-[94%] self-center" />
        <div className="ml-[49px]">
          <h2 className="font-antonio font-bold text-[40px] py-4">Writers</h2>
          <p className="font-anonymous font-bold text-2xl w-[60%] pb-8">
            ROLE DESCRIPTION: Tasked with writing posts for our Admissions
            Insider newsletter, minimum one article/week.
            <br />
            <br />
            EXPECTED HOURS: About 1 hour / week
            <br />
            <br />
            EXPERIENCE REQUIRED: Those with writing experience preferred.
            Writing abilities required.
          </p>
          <button className="bg-purple font-anton text-4xl px-[69px] py-[19px] mb-10">
            APPLY HERE
          </button>
        </div>
      </section>
    </div>
  );
};
