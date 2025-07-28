"use client";
import React from "react";
import { images } from "@/assets";

export const BannerSections: React.FC = () => {
  const bannerCards = [
    {
      title: "Popular Products",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      buttonColor: "text-black border-black",
      bgColor: "bg-white",
      textColor: "text-black",
      image1: images.huwaiBuds.src,
      image1Class:
        "object-contain absolute -top-4 left-0 z-0 max-w-full aspect-[1.04] h-[307px] w-[318px] rotate-[50deg]",
      image2:
        "https://api.builder.io/api/v1/image/assets/TEMP/5e0fbf3a0aa98aa32fc5ba41f9aff705a5461cb8?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      image2Class:
        "object-contain absolute top-3 -right-14 z-0 max-w-full aspect-[1.04] h-[307px] w-[318px]",
    },
    {
      title: "Ipad Pro",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      buttonColor: "text-black border-black",
      bgColor: "bg-zinc-100",
      textColor: "text-black",
      image1:
        "https://api.builder.io/api/v1/image/assets/TEMP/9f2d6177e496307fe7bf8e30314ac8cd6b618098?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      image1Class:
        "object-contain absolute top-0 z-0 max-w-full aspect-[1.1] h-[390px] right-[-43px] w-[371px]",
    },
    {
      title: "Samsung Galaxy",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      buttonColor: "text-black border-black",
      bgColor: "bg-neutral-200",
      textColor: "text-black",
      image1:
        "https://api.builder.io/api/v1/image/assets/TEMP/2b7c9a0b743f8958355bd687bdac3eb85c58da0e?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      image1Class:
        "object-contain absolute top-0 z-0 max-w-full aspect-[1.61] h-[385px] left-[10px] w-[579px]",
    },
    {
      title: "Macbook Pro",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      buttonColor: "text-white border-white",
      bgColor: "bg-black",
      textColor: "text-white",
      image1: images.mac.src,
      image1Class:
        "object-contain absolute top-0 z-0 max-w-full aspect-[1.61] h-[385px] left-[90px] w-[579px]",
    },
  ];

  return (
    <section className="flex flex-wrap items-start mt-20 w-full max-md:mt-10 max-md:max-w-full">
      {bannerCards.map((card, index) => (
        <div
          key={index}
          className={`overflow-hidden relative flex-1 shrink px-8 pt-[420px] pb-14 ${card.bgColor} basis-0 min-w-[280px] max-md:px-5 max-md:pt-24`}
        >
          <div className="overflow-hidden z-0 w-full">
            <h3 className={`text-2xl font-medium leading-none ${card.textColor}`}>
              {card.title}
            </h3>
            <p className={`mt-4 text-base font-light leading-6 text-neutral-700`}>
              {card.description}
            </p>
            <button
              className={`flex gap-2.5 justify-center items-center  py-3 mt-4 max-w-full text-[17px] leading-7 text-center border border-solid min-h-[50px] rounded-[104px] w-[163px] max-md:px-5 ${card.buttonColor}`}
            >
              Shop Now
            </button>
          </div>

          {card.image1 && (
            <img src={card.image1} alt={card.title} className={card.image1Class} />
          )}
          {card.image2 && (
            <img src={card.image2} alt={card.title} className={card.image2Class} />
          )}
        </div>
      ))}
    </section>

  );
};
