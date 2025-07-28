"use client";
import React from "react";
import icons from "@/assets/icons/azure-logo.svg"

export const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap justify-between gap-5 w-full text-sm font-light px-[100px] py-[16px] h-full">
      <img
        src={icons.src}
        alt="Azure Innovation Logo"
        className="object-contain shrink-0 max-w-full aspect-[1.97] w-[122px]"
      />

      <div className="flex flex-wrap gap-10 self-end mt-5 max-md:max-w-full items-center">
        {/* Search box */}
        <div className="flex gap-2.5 px-3.5 py-2.5 border border-solid bg-white bg-opacity-80 border-zinc-300 rounded-[86px] text-neutral-500">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/feac8458b9d780f3e7a69397d6f0170d371ef099?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Search icon"
            className="object-contain shrink-0 my-auto w-3.5 aspect-square"
          />
          <input
            type="text"
            placeholder="Search accessories"
            className="flex-auto bg-transparent outline-none placeholder-neutral-500"
          />
        </div>

        {/* Navigation */}
        <nav className="flex gap-10 justify-center items-center" role="navigation" aria-label="Main navigation">
          <a href="#" className="font-medium text-black hover:underline hover:opacity-60">
            Home
          </a>
          <a href="#" className="text-black opacity-30 hover:underline hover:opacity-60">
            About
          </a>
          <a href="#" className="text-black opacity-30 hover:underline hover:opacity-60">
            Contact
          </a>
          <a href="#" className="text-black opacity-30 hover:underline hover:opacity-60">
            Blog
          </a>
        </nav>

        {/* CTA Button */}
        <button className="flex items-center gap-2 px-7 py-2.5 text-black leading-6 text-center border border-black border-solid rounded-[86px] min-h-[41px] max-md:px-5">
          Get in Touch
        </button>
      </div>
    </header>
  );
};
