"use-client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { Element } from "react-scroll";

export default function ProjectSection({ projectsRef }) {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  
  const projectsData = [
    {
      id: 1,
      title: "NextJs & Tailwind | Portfolio Website",
      description: "Personal Portfolio",
      image: "/projectsimg/project2.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "React Native | Job App",
      description: "Basic Job UI/UX job applicaiton using API",
      image: "/projectsui/jobui/job1.jpeg",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "React Native | DSA Visualizer App",
      description:
        "Algorithms Visualizer - Visualizes sorting & path finding algorithms",
      image: "/projectsui/dsaui/dsa1.jpeg",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
  ];

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const images = [
    { url: "/projectsui/dsaui/compare.png" },
    { url: "/projectsui/dsaui/apphome.png" },
  ];
  return (
    <Element id="Projects">
      <h2 className="text-white md:text-4xl text-2xl font-bold text-center mb-3">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        {/* <button className="rounded-full border-2 border-purple-500 px-6 py-3 text-white">All</button>
        <button className="rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-white">Web</button>
        <button className="rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-white">Mobile</button> */}
      </div>

      
      <ul
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 md:gap-12"
      >
      
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              id={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </Element>
  );
}
