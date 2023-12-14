"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Element } from "react-scroll";
export default function AboutSection({ aboutRef }) {
  const [tab, setTab] = useState("skills");
  const [startTransition, setStartTransition] = useTransition();

  const handleTabChange = (id) => {
    setStartTransition(() => {
      setTab(id);
    });
  };

  const TabData = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="md:columns-2 gap-5 columns-1">
          <li className="mb-10">
            <h2>Web Development</h2>
            <p className="h-0.5 bg-primary-500 w-36 mt-1 mr-3 mb-2  animate-pulse"></p>
            <ul className="list-disc pl-2">
              <li>React Js</li>
              {/* <li>React Native</li> */}
              <li>JavaScript</li>
              <li>Next Js</li>
            </ul>
          </li>
          <li className="mb-10">
            <h2>Mobile Development</h2>
            <p className="h-0.5 font-bold w-40 bg-primary-500 mt-1 mr-3 mb-2 animate-pulse"></p>
            <ul className="list-disc pl-2">
              <li>React Native</li>
              <li>JavaScript</li>
            </ul>
          </li>
          <li className="mb-10">
            <h2>UI/UX</h2>
            <p className="h-0.5 font-bold bg-primary-500 mt-1 mr-3 mb-2 w-10 animate-pulse"></p>
            <ul className="list-disc pl-2">
              <li>Figma</li>
              <li>Tailwind css</li>
            </ul>
          </li>
          <li className="mb-10">
            <h2>Backend technologies</h2>
            <p className="h-0.5 font-bold w-40 bg-primary-500 mt-1 mr-3 mb-2 animate-pulse"></p>
            <ul className="list-disc pl-2">
              <li>Node js</li>
              <li>My Sql</li>
            </ul>
          </li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Bachelor of Science in Information Technology (Bsc-IT)</li>
          <li>Higher Secondary</li>
          {/* <li>Bscit Degree</li> */}
        </ul>
      ),
    },
    {
      title: "Certication",
      id: "certification",
      content: (
        <ul className="list-disc pl-2">
          <li>AWS Cloud Pracitioner</li>
          <li>Google Professional Cloud Developer</li>
        </ul>
      ),
    },
  ];
  const [readNow, setReadNow] = useState(false);
  return (
    <Element className="text-white" id="About">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 w-[100%]  ">
        {/* <Image src="/images/about-image.png" width={400} height={400} /> */}
        <Image
          className="animate-pulse border border-primary-700 rounded-full animate:"
          src="/projectsimg/skillsimg.png"
          alt="hero image"
          height={400}
          width={400}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="md:text-4xl font-bold text-white mb-4 text-2xl">
            About Me
          </h2>
          {/* <AnimatedSVG/> */}
          {!readNow ? (
            <p className="text-1xl lg:text-lg">
              Hi there! I&apos;m a recent BScIT graduate excited about technology and
              innovation. I finished my BScIT degree this year at Wilson College
              , where I learned a bunch about information technologies - React
              native | React js | Asp.Net and I love working with others to
              solve problems.
              <br />
              <button
                onClick={() => setReadNow(true)}
                className="text-[#ADB7BE]  border border-b-1 border-l-transparent border-r-transparent border-t-transparent"
              >
                See more
              </button>
            </p>
          ) : (
            <p className="text-1xl lg:text-lg">
              Hi there! I&apos;m a recent BScIT graduate excited about technology and
              innovation. I finished my BScIT degree this year at Wilson College
              , where I learned a bunch about information technologies - React
              native | React js | Asp.Net and I love working with others to
              solve problems.
              <br />
              I&apos;ve been interning at Tale of Tails, a cool startup within
              Advitya Ventures, for six months now. I&apos;ve been learning
              lots—working on different projects that involve REACT JS, SQL ,
              Figma & more. <br />
              I&apos;m proud to have made a great start in my career by contributing
              my skills to a startup. <br />
              <button
                onClick={() => setReadNow(false)}
                className="text-[#ADB7BE] border border-b-1 border-l-transparent border-r-transparent border-t-transparent"
              >
                See less
              </button>
            </p>
          )}
          <div className="flex flex-row mt-8 justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              {" "}
              Certfication{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TabData.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </Element>
  );
}
