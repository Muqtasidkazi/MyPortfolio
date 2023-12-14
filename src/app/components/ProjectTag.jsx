import React from "react";

export default function ProjectTag({ name, onClick, isSelected }) {
  const buttonStyles = isSelected
    ? "text-white bg-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button 
    className={` ${buttonStyles} rounded-full border-2 border-primary-500 md:px-6 md:py-4 px-3 py-1 text-white`}
    onClick={()=>onClick(name)}
    >
      {name}
    </button>
  );
}
