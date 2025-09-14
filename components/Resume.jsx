import Link from "next/link";
import React from "react";

function Resume() {
  return (
    <div
      id="resume"
      className=" w-full  lg:h-96
     p-2"
    >
      <div className=" max-w-7xl mx-auto flex flex-col py-16  justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#2D92FA] ">
          Resume
        </p>
        <h2 className=" py-4">My Experience</h2>
        <p className=" pb-4">
          You can download my resume here to explore my experience in creative
          direction, digital strategy, and web development. Whether you're
          looking for a collaborator or a consultant, this snapshot offers a
          deeper look at how I help brands connect and grow
        </p>
        <div className="flex justify-start">
          <a
            href="\assets\Resume Sept 2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Download the PDF of my Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
