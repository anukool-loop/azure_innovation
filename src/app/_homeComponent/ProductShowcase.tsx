"use client";
import React from "react";

export const ProductShowcase: React.FC = () => {
  return (
    <section className="flex flex-wrap items-start w-full max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink justify-center basis-80 min-w-60 max-md:max-w-full">
        <div className="flex overflow-hidden relative gap-10 items-start pr-12 pl-80 w-full bg-white min-h-[328px] max-md:px-5 max-md:max-w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/8f9e9978c91b8032bf08e090016a3682caf59a8f?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Apple Watch"
            className="object-contain absolute bottom-0 z-0 self-start aspect-[1.47] h-[328px] left-[-137px] min-w-60 right-[376px] w-[481px] max-md:max-w-full"
          />
          <div className="flex z-0 flex-col flex-1 shrink justify-center my-auto basis-0 max-w-[404px] min-w-60">
            <h2 className="text-5xl leading-none text-black max-md:text-4xl">
              Watches
            </h2>
            <p className="mt-4 text-sm leading-6 font-[275] text-neutral-900">
              Combining Apple Watch and iPhone opens up a world of features that
              make each device better.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap w-full min-h-[272px] max-md:max-w-full">
          <div className="flex overflow-hidden relative flex-1 shrink items-start pr-12 pl-40 h-full bg-gray-200 basis-0 min-w-60 max-md:px-5">
            <div className="z-0 my-auto w-40 max-w-[168px] min-h-[143px]">
              <h3 className="text-2xl leading-10 text-black">
                Apple <br />
                AirPods Max
              </h3>
              <p className="mt-1.5 text-sm leading-6 font-[275] text-neutral-900">
                Computational audio. Listen, it's powerful
              </p>
            </div>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2200bccc58996031fc977633559751d17b6ba25d?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
              alt="AirPods Max"
              className="object-contain absolute bottom-0 right-64 z-0 self-start aspect-[0.9] h-[272px] left-[-141px] min-w-60 w-[245px]"
            />
          </div>
          <div className="flex overflow-hidden relative flex-1 shrink items-start pr-12 pl-40 h-full bg-black basis-0 min-w-60 max-md:px-5">
            <div className="flex z-0 flex-col justify-center my-auto w-40 max-w-44 min-h-36">
              <h3 className="text-3xl leading-10 text-white">
                Apple <br />
                AirPods
              </h3>
              <p className="mt-2 text-sm leading-6 font-[275] text-stone-300">
                An immersive way to experience Music
              </p>
            </div>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ecb5a6f8b6ca2e69ecb67d39224f99620fb60603?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
              alt="AirPods"
              className="object-contain absolute bottom-12 right-52 z-0 self-start aspect-[1.38] left-[-92px] min-w-60 top-[47px] w-[244px]"
            />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-1 shrink gap-px items-start py-52 pr-64 pl-14 bg-gray-200 basis-0 min-h-[600px] min-w-60 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="z-0 flex-1 shrink my-auto basis-0 max-w-[360px] min-w-60">
          <div className="w-full">
            <h2 className="text-6xl font-thin leading-none text-black max-md:text-4xl">
              <span
                style={{
                  fontFamily:
                    "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                  fontWeight: 400,
                }}
              >
                Macbook{" "}
              </span>
              <span
                style={{
                  fontFamily:
                    "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                  fontWeight: 400,
                }}
              >
                Air
              </span>
            </h2>
            <p className="mt-4 text-sm leading-6 font-[275] text-neutral-900">
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
          </div>
          <button className="flex gap-3 justify-center items-center px-16 py-3 mt-4 max-w-full text-xl leading-8 text-center text-black whitespace-nowrap border-black border-solid border-[1.385px] min-h-[57px] rounded-[119.077px] w-[180px] max-md:px-5">
            <span className="self-stretch my-auto text-black">Shop</span>
          </button>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/d9810ca12938e2d33ab32362ce24ee1e94cfe80f?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
          alt="MacBook Air"
          className="object-contain absolute bottom-0 left-2/4 z-0 self-start -translate-x-2/4 aspect-[0.8] h-[605px] min-w-60 translate-y-[0%] w-[482px] max-md:max-w-full"
        />
      </div>
    </section>
  );
};
