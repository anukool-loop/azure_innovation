"use client";
import React from "react";

export const SolutionsSection: React.FC = () => {
  return (
    <section className="self-end mt-20 mr-8 w-full max-w-[1308px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[57%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start w-full text-2xl text-black max-md:max-w-full">
            <h2 className="text-5xl leading-none max-md:text-4xl">
              Our Solutions
            </h2>
            <p className="mt-7 font-light max-md:max-w-full">
              We offer end-to-end Apple product solutions, including:
            </p>
            <div className="self-stretch mt-10 leading-9 font-[275] max-md:max-w-full">
              DEP and MDM services via trusted vendors like 42Gears and AirWatch
              <br />
              Cloud and streaming solutions with IBM and Google
              <br />
              Network management solutions through partners like Cisco
            </div>
            <button className="flex gap-3 justify-center items-center py-3 pr-20 pl-20 mt-12 text-xl leading-8 text-center text-black border-black border-solid border-[1.385px] min-h-[57px] rounded-[119.077px] max-md:px-5 max-md:mt-10">
              <span className="self-stretch my-auto text-black">Read More</span>
            </button>
          </div>
        </div>
        <div className="ml-5 w-[43%] max-md:ml-0 max-md:w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/9284abfa1db00c94e25e348bffc34741f74926d6?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Our Solutions"
            className="object-contain grow mt-12 w-full aspect-[1.23] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};
