"use client";
import React from "react";

export const BannerSections: React.FC = () => {
  return (
    <section className="flex flex-wrap items-start mt-20 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink items-start basis-0 min-w-[280px] max-md:max-w-full">
        <div className="overflow-hidden relative flex-1 shrink px-8 pt-96 pb-14 bg-white basis-0 min-w-[280px] max-md:px-5 max-md:pt-24">
          <div className="overflow-hidden z-0 w-full">
            <h3 className="text-2xl font-medium leading-none text-black">
              Popular Products
            </h3>
            <p className="mt-4 text-base font-light leading-6 text-neutral-700">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="flex gap-2.5 justify-center items-center px-10 py-3 mt-4 max-w-full text-lg leading-7 text-center text-black border-black border-solid border-[1.207px] min-h-[50px] rounded-[103.794px] w-[163px] max-md:px-5">
              <span className="self-stretch my-auto text-black">Shop Now</span>
            </button>
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/5e0fbf3a0aa98aa32fc5ba41f9aff705a5461cb8?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Popular Products"
            className="object-contain absolute top-3 -right-14 z-0 max-w-full aspect-[1.04] h-[307px] w-[318px]"
          />
        </div>
        <div className="overflow-hidden relative flex-1 shrink px-8 pt-96 pb-14 basis-0 bg-zinc-100 min-w-[280px] max-md:px-5 max-md:pt-24">
          <div className="overflow-hidden z-0 w-full">
            <h3 className="text-2xl font-medium leading-none text-black">
              Ipad Pro
            </h3>
            <p className="mt-4 text-base font-light leading-6 text-neutral-700">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="flex gap-2.5 justify-center items-center px-10 py-3 mt-4 max-w-full text-lg leading-7 text-center text-black border-black border-solid border-[1.207px] min-h-[50px] rounded-[103.794px] w-[163px] max-md:px-5">
              <span className="self-stretch my-auto text-black">Shop Now</span>
            </button>
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/9f2d6177e496307fe7bf8e30314ac8cd6b618098?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="iPad Pro"
            className="object-contain absolute top-0 z-0 max-w-full aspect-[1.1] h-[390px] right-[-43px] w-[371px]"
          />
        </div>
      </div>
      <div className="flex flex-wrap flex-1 shrink items-start basis-0 min-w-[280px] max-md:max-w-full">
        <div className="overflow-hidden relative flex-1 shrink px-8 pt-96 pb-14 basis-0 bg-neutral-200 min-w-[280px] max-md:px-5 max-md:pt-24">
          <div className="overflow-hidden z-0 w-full">
            <h3 className="text-2xl font-medium leading-none text-black">
              Samsung Galaxy{" "}
            </h3>
            <p className="mt-4 text-base font-light leading-6 text-neutral-700">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="flex gap-2.5 justify-center items-center px-10 py-3 mt-4 max-w-full text-lg leading-7 text-center text-black border-black border-solid border-[1.207px] min-h-[50px] rounded-[103.794px] w-[163px] max-md:px-5">
              <span className="self-stretch my-auto text-black">Shop Now</span>
            </button>
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2b7c9a0b743f8958355bd687bdac3eb85c58da0e?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Samsung Galaxy"
            className="object-contain absolute top-0 z-0 max-w-full aspect-[1.61] h-[385px] right-[-110px] w-[579px]"
          />
        </div>
        <div className="overflow-hidden flex-1 shrink px-8 pt-96 pb-14 text-white bg-black basis-0 min-w-[280px] max-md:px-5 max-md:pt-24">
          <div className="overflow-hidden w-full">
            <h3 className="text-2xl font-medium leading-none">Macbook Pro</h3>
            <p className="mt-4 text-base font-light leading-6 text-stone-300">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="flex gap-2.5 justify-center items-center px-10 py-3 mt-4 max-w-full text-lg leading-7 text-center border border-white border-solid min-h-[50px] rounded-[104px] w-[163px] max-md:px-5">
              <span className="self-stretch my-auto">Shop Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
