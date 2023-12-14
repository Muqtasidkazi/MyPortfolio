"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";

import {Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid'
import MenuOverlay from "./MenuOverlay";
export default function Navbar({scrollToRef}) {
  const [navBarOpen, setnavBarOpen] = useState(false);
  const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];

  return (
    <nav className="fixed mx-auto border border-[#33353F] border-t-0 border-r-0 border-l-0 top-0 left-0  right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2 ">
        <Link
          href={"/"}
          className="md:text-2xl text-white font-semibold text-1xl"
        >
          Muqtasid&apos;s Portfolio
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navBarOpen ? (
            <button onClick={()=> setnavBarOpen(true)} className="flex items-center border px-3 py-2 rounded border-slate-200 hover:text-white text-slate-200 hover:border-white">
              <Bars3Icon className='h-5 w-5 ' />
            </button>
          ) : (
            <button onClick={()=> setnavBarOpen(false)} className="flex items-center px-3 py-2 rounded border-slate-200 hover:text-white text-slate-200 hover:border-white">
              <XMarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto " id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8  ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} scrollToRef={scrollToRef} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen? <MenuOverlay links={navLinks}/>:null}
    </nav>
  );
}
