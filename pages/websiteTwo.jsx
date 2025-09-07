import React from "react";
import Image from "next/image";
import Link from "next/link";
import websitePhotoTwo from "../public/assets/projects/SCC-Websites.webp";
import { BsArrowRightShort, BsArrowReturnLeft } from "react-icons/bs";

const websiteTwo = () => {
  return (
    <div className=" w-full">
      <div className=" w-screen h-[60vh] lg:h-[50vh] relative">
        <div className="absolute z-1 object-cover object-[50%_0%] w-full h-[60vh] lg:h-[50vh] bg-black/70 z-10"></div>
        <Image
          className=" absolute z-1"
          layout="fill"
          objectFit="cover"
          object-position="top"
          src={websitePhotoTwo}
        />
        <div className="absolute top-[60%] w-full max-w-7xl left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className=" py-2">Websites built at South County Creative</h2>
          <h3>Web Development for Small Business, Nonprofits, and Startups</h3>
        </div>
      </div>

      <div className=" max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className=" col-span-4 ">
          <p className="uppercase text-xl tracking-widest text-[#2D92FA]">
            Project
          </p>
          <h2 className=" py-4">Overview</h2>
          <p className="pb-2">
            As the Owner and Creative Director of South County Creative, I’ve
            led the design and development of every website featured on our
            Website Design page, crafting digital experiences that reflect the
            unique identity and goals of each client. From eCommerce platforms
            like Good Vibes Coffee & Tea and ReArtify to service-driven sites
            such as Precision Mobile Automotive Repair and The Beauty Room, each
            build showcases a thoughtful blend of storytelling, functionality,
            and visual impact. I specialize in WordPress and Shopify
            development, tailoring each site to meet the needs of small
            businesses, nonprofits, and cultural institutions across Southern
            California. Whether launching a new brand or revitalizing an
            existing digital presence, my work centers on intuitive design,
            optimized performance, and authentic engagement.
          </p>
          <Link
            href="https://southcountycreative.com/website-design/"
            target="_blank"
          >
            <button className=" px-8 py-2 mt-4 mr-8">
              South County Creative
            </button>
          </Link>
        </div>
        <div className=" col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className=" p-2">
            <p className=" text-center font-bold pb-2">Tools I Use</p>
            <div className=" grid grid-cols-3 md:grid-cols-1">
              <p className=" flex text-gray-600 py-2 items-center">
                <BsArrowRightShort className="mr-1" /> HTML
              </p>
              <p className=" flex text-gray-600 py-2 items-center">
                <BsArrowRightShort className="mr-1" /> JavaScript
              </p>
              <p className=" flex text-gray-600 py-2 items-center">
                <BsArrowRightShort className="mr-1" /> CSS
              </p>
              <p className=" flex text-gray-600 py-2 items-center">
                <BsArrowRightShort className="mr-1" /> WordPress
              </p>
              <p className=" flex text-gray-600 py-2 items-center">
                <BsArrowRightShort className="mr-1" /> Shopify
              </p>
              <p className=" flex text-gray-600 py-2 items-center">
                <BsArrowRightShort className="mr-1" /> React | NextJS | Tailwind
              </p>
            </div>
          </div>
        </div>
        <Link
          className=" flex items-center gap-3 hover:text-[#c2649a] hover:scale-105 ease-in duration-200 "
          href="/#projects"
        >
          Back to projects <BsArrowReturnLeft />
        </Link>
      </div>
    </div>
  );
};

export default websiteTwo;
