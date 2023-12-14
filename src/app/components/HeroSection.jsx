"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-pink-600">
              Hii, I&apos;m {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Muqtasid",
                1000,
                "Web Developer",
                1000,
                "Mobile App Developer",
                1000,
                // "UI/UX Designer",
                // 1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: ".8em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl  ">
            I am a full stack developer with experience in building Full Stack
            Web & Mobile applications.{" "}
          </p>
          <div className="flex flex-col md:flex-row">
            {/* <div className="px-2 py-4 mr-3 bg-white w-[200px] sm:w-fit rounded-full hover:bg-slate-200 flex flex-row">
              <span className="text-black text-align-center">Hired</span>
              <span class="relative flex h-3 w-3 left-2 top-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </div> */}
            {/* <button className="px-6 py-3 w-full sm:w-fit mr-4 bg-gradient-to-br rounded bg-white hover:bg-slate-200 text-[#0F8BC2]">
              Hired
            </button> */}
            <div className="px-1 py-1 w-full mr-3  sm:w-fit  rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-pink-500 hover:bg-slate-80 text-white  mt-3">
              
              <span
                className=" hover:bg-slate-800 rounded-full px-5 py-2 bg-[#121212] flex flex-row items-center justify-center"
              >
                Hired
              <span className="relative flex h-3 w-3 ml-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-pink-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-br from-blue-500 to-pink-500"></span>
              </span> 
              </span>
            </div>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-pink-500 hover:bg-slate-800 text-white  mt-3">
              <a
                href="/MuqtasidKazi.pdf"
                download
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
              >
                Download CV
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative border border-primary-700 mt-5 md:mt-0">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/hero4.png"
              alt="hero image"
              height={300}
              width={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
