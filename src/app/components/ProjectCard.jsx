import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ProjectCard = ({
  id,
  imgUrl,
  title,
  description,
  previewUrl,
  gitUrl,
}) => {
  const [clickedNow, setClickedNow] = useState(false);
  const [opacityController, setOpacityController] = useState(1);
  function handleFlex() {
    setClickedNow(true);
    setTimeout(() => {
      setClickedNow(false);
    }, 3000);
    // console.log(l)
  }

  const handlePreview = (t) => {
    console.log(t);
  };
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          opacity: opacityController,
        }}
      >
        {/* <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden md:group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 "> */}
        <div
          className={`overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-80 md:group-hover:flex ${
            clickedNow ? "flex" : "hidden"
          } group-hover:bg-opacity-80 transition-all duration-500`}
        >
          {/* <Link
            href={gitUrl}
            className="h-14 w-14 border-2 mr-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          <p className="mt-14 ml-1.5 text-white">Code</p>
          </Link> */}
          {/* <Link
            href={previewUrl}
            className=" border-2  h-14 w-14 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            onClick={() => handlePreview(id)}
          >
            <EyeIcon className="h-6  w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            <p className="mt-14 text-white">Preview</p>
          </Link> */}
        </div>
      </div>
      <div
        className="text-white rounded-b-xl mt-2 bg-[#181818] py-6 px-4"
        // onClick={() => handleFlex()}
      >
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        {/* <button onClick={()=>handleFlex()}>View</button> */}
      </div>
    </div>
  );
};

export default ProjectCard;
