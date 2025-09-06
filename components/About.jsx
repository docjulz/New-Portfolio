import React from "react";
import Image from "next/image";
// import julian from "../public/assets/Julian-selfie.jpg";
import julian from "../public/assets/Headshot-optimized.jpg";

const About = () => {
  return (
    <div id="about" className=" w-full md:h-[80%] p-2 flex items-center">
      <div className=" max-w-7xl m-auto md:grid md:pt-28  grid-cols-4 gap-6">
        <div className="col-span-3">
          <p className="uppercase text-xl tracking-widest text-[#2D92FA] ">
            About Me
          </p>
          <h2 className=" py-4">My Professional Experience</h2>
          {/* Left Side */}
          {/* <p className="uppercase text-xl tracking-widest text-[#2D92FA] ">
            About
          </p> */}
          <p className=" py-2 text-gray-600 lg:pr-10 text-justify">
            I have over a decade of experience working across industries from
            education and nonprofits to hospitality, sales and retail. My
            strategy is to blend storytelling with design to create unique and
            personal experiences for audiences from all walks of life.
          </p>
          <p className=" py-2 text-gray-600 lg:pr-10 text-justify">
            My work has always centered on building meaningful connections
            through digital experiences. In graduate school I explored how to
            bring digital technology into museums to engage with and inspire
            visitors. After graduate school I started MissionDriven 365 to help
            consult with nonprofits and educational organizations to reach
            visitors and donors through SEO, app development, and digital
            storytelling. Later I started South County Creative to lead branding
            and web development projects for small businesses helping them reach
            new audiences and develop their voice. I’ve also served as a manager
            and lead developer for large-scale web migrations at Associated
            Students with the redesign of 22 West Media moving from a stale
            Joomla CMS to React and the consolidation of Associated Student and
            Recreation Center sites built on WordPress — reaching a combined
            audience of over 100,000 visitors each month.
          </p>
          <p className=" py-2 text-gray-600 lg:pr-10 text-justify">
            With storytelling in mind, I’ve built engagement strategies that
            drive results. At the Ritz-Carlton, I created the Eco Artist program
            in partnership with the Wyland Foundation, aligning conservation
            education with the Ritz Calton’s “mystique” and brand values. At the
            Henry Art Gallery, I increased event attendance by over 100% to
            weekly gallery programs and expanded their annual student events by
            connecting disparate student groups with art who normally would not
            visit museums.{" "}
          </p>
          <p className=" py-2 text-gray-600 lg:pr-10 text-justify">
            I thrive working collaboratively on teams with other creative people
            and bring a unique perspective to every project. I am solution
            driven and action oriented in my approach to all projects big and
            small.
          </p>
        </div>
        {/* Right Side */}
        <div className="  w-full h-auto m-auto md:shadow-sm  md:shadow-gray-400 rounded-xl flex items-center justify-center md:hover:scale-105 ease-in-out duration-300 md:hover:shadow-lg hover:shadow-gray-400">
          <Image src={julian} alt="Profile Picture" className=" rounded-xl " />
        </div>
      </div>
    </div>
  );
};

export default About;
