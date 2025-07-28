"use client";
import React from "react";

export const FeaturesSection: React.FC = () => {
  return (
    <section className="flex flex-col px-20 py-20 w-full text-white bg-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start text-5xl leading-none max-md:max-w-full max-md:text-4xl">
        Azure Innovations Features
      </h2>
      <div className="flex gap-5 justify-between mt-12 max-md:mt-10">
        <div className="flex flex-col items-start self-start">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c18f0ff6b5555f64b3d8cd2ae711aee11f46b181?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Love customers icon"
            className="object-contain aspect-[0.87] w-[46px]"
          />
          <h3 className="mt-5 text-2xl font-semibold leading-tight">
            Love our Customers
          </h3>
          <p className="self-stretch mt-5 text-lg font-light leading-7">
            At Azure Innovations, we prioritize your satisfaction by delivering
            personalized solutions and outstanding service at every step.
          </p>
        </div>
        <div className="shrink-0 w-[1px] h-[292px] bg-[#ffffff80] fade-mask" />
        <div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7c36b8bb955d7ea057e3879d7735c16e6786f477?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Continuously evolve icon"
            className="object-contain aspect-[0.77] w-[43px]"
          />
          <h3 className="mt-5 mr-5 text-2xl font-semibold leading-tight max-md:mr-2.5">
            Continuously Evolve
          </h3>
          <p className="mt-4 text-lg font-light leading-7">
            We embrace innovation and upgrade our offerings to stay ahead in the
            dynamic tech world, meeting tomorrow's needs today.
          </p>
        </div>
        <div className="shrink-0 w-[1px] h-[292px] bg-[#ffffff80] fade-mask" />
        <div className="flex flex-col items-start self-start">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/70ce3152bb0f2431b7ac366663b02de7a2bf26bc?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Passionate about IT icon"
            className="object-contain aspect-[0.75] w-[42px]"
          />
          <h3 className="mt-4 text-2xl font-semibold leading-tight">
            Passionate About IT
          </h3>
          <p className="self-stretch mt-6 text-lg font-light leading-7">
            We live and breathe technology, bringing expert solutions and
            dedicated support to empower your digital journey.
          </p>
        </div>
        <div className="shrink-0 w-[1px] h-[292px] bg-[#ffffff80] fade-mask" />
        <div className="flex flex-col items-start self-start">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/9332deb05bd43649b49d229ea18eb9f3b3f16ab7?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Incredible team icon"
            className="object-contain aspect-[0.93] w-[52px]"
          />
          <h3 className="mt-4 text-2xl font-semibold leading-tight">
            Incredible Team
          </h3>
          <p className="self-stretch mt-6 text-lg font-light leading-7">
            Our strength lies in a skilled, diverse team that collaborates with
            passion to deliver excellence in every solution.
          </p>
        </div>
      </div>
    </section>
  );
};
