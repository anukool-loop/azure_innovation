"use client";
import React from "react";

interface ProductCardProps {
  iconSrc: string;
  imageSrc: string;
  title: string;
  price?: string;
  buttonText: string;
  imageAspect?: string;
  imageWidth?: string;
  showPrice?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  iconSrc,
  imageSrc,
  title,
  price,
  buttonText,
  imageAspect = "aspect-[1.01]",
  imageWidth = "w-[217px]",
  showPrice = false,
}) => {
  return (
    <article className="px-4 py-6 mx-auto w-full rounded-lg bg-zinc-100 max-md:mt-4">
      <div className="flex gap-2 items-center">
        <img
          src={iconSrc}
          alt="Product category icon"
          className="object-contain self-stretch my-auto aspect-square w-[30px]"
        />
      </div>
      <img
        src={imageSrc}
        alt={title}
        className={`object-contain mx-6 mt-8 ${imageAspect} ${imageWidth} max-md:mx-2.5`}
      />
      <div className="flex flex-col mt-10 w-full text-center">
        <div className="flex flex-col items-start w-full text-black">
          <h3 className="text-lg font-medium leading-6 text-black">{title}</h3>
          {showPrice && price && (
            <div className="mt-4 text-2xl font-semibold tracking-wider leading-none text-black">
              {price}
            </div>
          )}
        </div>
        <button className="flex gap-2 justify-center items-center self-center px-16 py-3 mt-6 text-sm leading-6 text-white bg-black rounded-lg max-md:px-5">
          <span className="self-stretch my-auto text-white">{buttonText}</span>
        </button>
      </div>
    </article>
  );
};
