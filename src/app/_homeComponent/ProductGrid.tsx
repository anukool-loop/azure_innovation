"use client";
import React, { useState } from "react";
import { ProductCard } from "./ProductCard";

export const ProductGrid: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState("New Arrival");

  const keys = ["New Arrival", "Bestseller", "Featured Products"];
  const firstRowProducts = [
    {
      iconSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/126e1aec7bd88c234c8d18d7f2bbc9584a710f76?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/218588128d1aeb13ac286c34b70fbdb9fb94cc72?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      buttonText: "Whatsapp",
    },
    {
      iconSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/8f30648e842de01336b7273ad7a3618da2dd046a?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/fbfb269aae7dd4b5345c135244b1a8a51cb951fc?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Blackmagic Pocket Cinema Camera 6k",
      buttonText: "Buy Now",
      imageAspect: "aspect-square",
      imageWidth: "w-[196px]",
    },
    {
      iconSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/304e6a8c1aa104441ec1b3559e7ff48fba728613?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/80942dfd20eaee592e187ceb034f46e21e055aa6?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium...",
      buttonText: "Buy Now",
      imageAspect: "aspect-square",
      imageWidth: "w-[211px]",
    },
    {
      iconSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/47018e160c2d052aef1d1b8890c8cff8e1bf3100?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/d73322bddd31a6451be1b0e9620b7868096dcda7?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "AirPods Max Silver",
      buttonText: "Buy Now",
      imageAspect: "aspect-square",
      imageWidth: "w-[210px]",
    },
  ];

  const secondRowProducts = [
    {
      iconSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/126e1aec7bd88c234c8d18d7f2bbc9584a710f76?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/218588128d1aeb13ac286c34b70fbdb9fb94cc72?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      price: "$900",
      buttonText: "Buy Now",
      showPrice: true,
    },
    {
      iconSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/8f30648e842de01336b7273ad7a3618da2dd046a?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/fbfb269aae7dd4b5345c135244b1a8a51cb951fc?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Blackmagic Pocket Cinema Camera 6k",
      price: "$2543",
      buttonText: "Buy Now",
      imageAspect: "aspect-square",
      imageWidth: "w-[196px]",
      showPrice: true,
    },
    {
      iconSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/304e6a8c1aa104441ec1b3559e7ff48fba728613?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/80942dfd20eaee592e187ceb034f46e21e055aa6?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium...",
      price: "$900",
      buttonText: "Buy Now",
      imageAspect: "aspect-square",
      imageWidth: "w-[211px]",
      showPrice: true,
    },
    {
      iconSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/47018e160c2d052aef1d1b8890c8cff8e1bf3100?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/d73322bddd31a6451be1b0e9620b7868096dcda7?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "AirPods Max Silver",
      price: "$900",
      buttonText: "Buy Now",
      imageAspect: "aspect-square",
      imageWidth: "w-[210px]",
      showPrice: true,
    },
  ];

  const productsToShow = [...firstRowProducts, ...secondRowProducts];

  return (
    <section className="self-center w-full max-w-[1240px] max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 my-auto text-xl font-light text-zinc-500 max-md:max-w-full">
          <div className="flex flex-col justify-center items-start font-medium text-center text-black">
            <span className="text-black">New Arrival</span>
          </div>
          <span className="text-center">Bestseller</span>
          <span className="basis-auto">Featured Products</span>
        </div>
        <button className="flex gap-3 justify-center items-center py-3 pr-14 pl-14 text-xl leading-8 text-center text-black border-black border-solid border-[1.385px] min-h-[57px] rounded-[119.077px] max-md:px-5">
          <span className="self-stretch my-auto text-black">View All</span>
        </button>
      </div>

      <div className="mt-9 w-full max-md:max-w-full">
        <div className="flex gap-5 items-stretch max-md:flex-col">
          {firstRowProducts.map((product, index) => (
            <div key={index} className="w-3/12 max-md:ml-0 max-md:w-full">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {secondRowProducts.map((product, index) => (
            <div key={index} className="w-3/12 max-md:ml-0 max-md:w-full">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
