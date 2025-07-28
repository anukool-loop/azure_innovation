"use client";
import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section className="self-center py-[80px] px-[100px] w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[30%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-10">
            <h2 className="text-6xl font-semibold text-black leading-[64px] max-md:text-4xl max-md:leading-[52px]">
              <span style={{ fontWeight: 200 }}>About</span> Azure
              <br />
              Innovation
            </h2>
            <button className="flex gap-3 justify-center items-center self-start py-3 pr-20 pl-20 mt-8 text-xl leading-8 text-center text-black border-black border-solid border-[1.385px] min-h-[57px] rounded-[119.077px] max-md:px-5">
              <span className="self-stretch my-auto text-black">Read More</span>
            </button>
          </div>
        </div>
        <div className="ml-5 w-[70%] max-md:ml-0 max-md:w-full">
          <div className="grow text-2xl leading-9 text-black font-[100] max-md:mt-10 max-md:max-w-full">
            <p className="max-md:max-w-full">
              Azure Innovations is a dynamic Apple Reseller and Service
              Provider, supplying genuine Apple products to individuals and
              educational institutions. Headquartered in Naraina (Delhi) with
              branches in Noida and Gurgaon, we ensure seamless service across
              NCR.
            </p>
            <p className="mt-5 max-md:max-w-full">
              We're also a proud Microsoft Surface Partner, expanding in premium
              tech. At Azure, we value innovation, integrity, and
              teamwork—putting our customers at the core of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
