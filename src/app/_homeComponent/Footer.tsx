"use client";
import React from "react";

const footerSections = [
  {
    heading: "Shop and Learn",
    links: [
      "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"
    ],
  },
  {
    heading: "Services",
    links: [
      "Apple Music", "Apple TV+", "Apple Fitness+", "Apple News+", "Apple Arcade", "iCloud+",
      "Apple One", "Apple Card", "Apple Books", "Apple Podcasts", "App Store"
    ],
    subSections: [
      {
        heading: "Account",
        links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
      },
    ],
  },
  {
    heading: "Apple Store",
    links: [
      "Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Apple Store App",
      "Refurbished and Clearance", "Financing", "Apple Trade In", "Order Status", "Shopping Help"
    ],
  },
  {
    heading: "For Business",
    links: ["Apple and Business", "Shop for Business"],
    subSections: [
      {
        heading: "For Education",
        links: ["Apple and Education", "Shop for K-12", "Shop for College"],
      },
      {
        heading: "For Healthcare",
        links: ["Apple in Healthcare", "Health on Apple Watch", "Health Records on iPhone"],
      },
      {
        heading: "For Government",
        links: ["Shop for Government", "Shop for Veterans and Military"],
      },
    ],
  },
  {
    heading: "Apple Values",
    links: [
      "Accessibility", "Education", "Environment", "Inclusion and Diversity",
      "Privacy", "Racial Equity and Justice", "Supplier Responsibility"
    ],
    subSections: [
      {
        heading: "About Apple",
        links: [
          "Newsroom", "Apple Leadership", "Career Opportunities", "Investors",
          "Ethics & Compliance", "Events", "Contact Apple"
        ],
      },
    ],
  },
];

export const Footer: React.FC = () => { 
  return (
    <footer className="w-full px-[100px]">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/421826147270ef3b39308a103b3f9ad1c5ed955f?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
        alt="Footer divider"
        className="object-contain w-full aspect-[1000] max-md:max-w-full"
      />

      <div className="z-10 self-center py-8 w-full max-w-[1239px] max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start pr-7 w-full text-xs leading-none text-zinc-700 max-md:pr-5">
          {footerSections.map((section, i) => (
            <div key={i} className="flex flex-col items-start">
              <h4 className="text-base font-semibold text-zinc-800">
                {section.heading}
              </h4>
              {section.links.map((link, j) => (
                <a key={j} href="#" className="mt-2.5">
                  {link}
                </a>
              ))}
              {section.subSections?.map((sub, k) => (
                <div key={k} className="mt-6">
                  <h4 className="text-base font-semibold text-zinc-800">
                    {sub.heading}
                  </h4>
                  {sub.links.map((link, l) => (
                    <a key={l} href="#" className="mt-2.5 block">
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-8 w-full max-md:max-w-full">
          <div className="self-start text-xs leading-none text-black">
            Call : 98703698212
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a28e3f1dbfb9cfd11d6644b9bc8d661ba2f05ae9?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Footer separator"
            className="object-contain mt-2.5 w-full aspect-[1000] max-md:max-w-full"
          />
          <div className="flex flex-wrap gap-5 justify-between mt-2.5 w-full text-sm leading-none max-md:max-w-full">
            <div className="flex flex-wrap gap-6">
              <div className="flex-auto text-neutral-500">
                Copyright © 2022 Azure Inc. All rights reserved.
              </div>
              <div className="flex flex-wrap flex-auto gap-2.5 text-zinc-700">
                <a href="#" className="grow">
                  Privacy Policy
                </a>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f5ec51a2cbd28c5d363110a1ab5f4f133d78f1bb?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                  alt="Separator"
                  className="object-contain shrink-0 w-px aspect-[0.06]"
                />
                <a href="#">Terms of Use</a>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f5ec51a2cbd28c5d363110a1ab5f4f133d78f1bb?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                  alt="Separator"
                  className="object-contain shrink-0 w-px aspect-[0.06]"
                />
                <a href="#" className="basis-auto">
                  Sales and Refunds
                </a>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f5ec51a2cbd28c5d363110a1ab5f4f133d78f1bb?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                  alt="Separator"
                  className="object-contain shrink-0 w-px aspect-[0.06]"
                />
                <a href="#">Legal</a>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f5ec51a2cbd28c5d363110a1ab5f4f133d78f1bb?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                  alt="Separator"
                  className="object-contain shrink-0 w-px aspect-[0.06]"
                />
                <a href="#">Site Map</a>
              </div>
            </div>
            <div className="text-zinc-700">India</div>
          </div>
        </div>
        {/* Keep your remaining part (call, copyright, etc.) unchanged */}
      </div>
    </footer>
  );
};
