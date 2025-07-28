"use client";
import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="px-20 pt-10 bg-black max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start self-stretch my-auto w-full text-neutral-100 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col justify-center self-stretch px-7 py-2 text-lg font-bold leading-loose text-white bg-white bg-opacity-10 border-white border-opacity-20 rounded-[66px] max-md:px-5 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <span
                  style={{
                    fontFamily:
                      "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Azure.
                </span>{" "}
                <span
                  style={{
                    fontFamily:
                      "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                    fontWeight: 275,
                    color: "rgba(85,85,85,1)",
                  }}
                >
                  The best way to buy the products you love.
                </span>
              </div>
            </div>
            <div className="flex gap-3 mt-8 text-6xl leading-none max-md:text-4xl">
              <h1 className="flex-auto text-neutral-100 max-md:text-4xl">
                iPhone 16
              </h1>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0340dd5d657e26e3ecc2da040feef7c5b9cc067b?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                alt="Arrow icon"
                className="object-contain shrink-0 my-auto w-6 aspect-[0.8]"
              />
            </div>
            <p className="mt-4 text-2xl leading-9 font-[275] text-neutral-100">
              Our most powerful cameras yet.
              <br />
              Ultrafast chips. And USB-C.
            </p>
            <div className="flex gap-4 items-start mt-10 text-lg leading-none text-center text-blue-500 max-md:max-w-full">
              <button className="flex justify-center items-start px-6 py-3 border border-blue-500 border-solid min-w-7 rounded-[980px] max-md:px-5">
                <span className="text-blue-500">Explore iPhone 16</span>
              </button>
              <button className="flex justify-center items-start px-6 py-3 border border-blue-500 border-solid min-w-7 rounded-[980px] max-md:px-5">
                <span className="text-blue-500">Explore iPhone 16 Pro</span>
              </button>
            </div>
          </div>
        </div>
        <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/49bb60ab9567c787fbb95462fc3c97a8dd400273?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="iPhone 16"
            className="object-contain grow w-full aspect-[1.1] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};
