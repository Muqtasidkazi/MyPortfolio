'use client'
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedInIcon from "../../../public/linkedin-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { Element } from 'react-scroll';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function EmailSection({contactRef}) {
  const notify = (e) => {
    e.preventDefault();
    toast.info("Currently email section is closed! To contact mail - on kazimuqtasid@gmail.com")
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData)
    if (response.status === 200) {
      console.log("Message sent.");
    }
  };
  return (
    <Element className="grid md:grid-cols-2 my-4 md:my-12 py-24 gap-4" id="Contact">
    
    {/* <button onClick={notify}>Click me!</button> */}
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
      <div className="">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] MB-4 max-w-md">
          Feel free to reach out and let me know how I can assist you. Whether
          it&apos;s about a project or any queries.
        </p>
        <div className="socials flex flex-row gap-2 mt-3">
          <Link href="https://github.com/MuqtasidKazi?tab=repositories" rel="noopener noreferrer" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/muqtasid-kazi-6b8494234/" rel="noopener noreferrer" target="_blank">
            <Image src={LinkedInIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={notify}>
          <div className="mb-6">
            <label
              className="text-white block text-sm font-medium mb-2"
              htmlFor="email"
            >
              Your email
            </label>
            <input
            name="email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full md:w-[70%] p-2.5"
              // required
              type="email"
              placeholder="example@gmail.com"
              id="email"
            />
          </div>
          <div className="mb-6">
            <label
              className="text-white block text-sm font-medium mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
            name="subject"
              className="bg-[#18191E]  border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 md:w-[70%] "
              // required
              type="text"
              placeholder="Drop your thought here!"
              id="subject"
            />
          </div>
          <div className="mb-6">
            <label
              className="text-white block text-sm font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="bg-[#18191E]  border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 md:w-[70%] h-20 "
              // required
              type="text"
              placeholder="Let's talk about..."
              id="message"
              name="message"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-600 hover:bg-primary-700 py-2.5 px-5 rounded-lg w-full text-white font-medium md:w-[70%] "
          >
            Send Message
          </button>
          <ToastContainer />
        </form>
      </div>
    </Element>
  );
}

