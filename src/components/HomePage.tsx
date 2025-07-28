"use client";
import React from "react";
import { Header } from "./Header";
import { ProductNavigation } from "./ProductNavigation";
import { HeroSection } from "./HeroSection";
import { ProductShowcase } from "./ProductShowcase";
import { AboutSection } from "./AboutSection";
import { FeaturesSection } from "./FeaturesSection";
import { ProductGrid } from "./ProductGrid";
import { BannerSections } from "./BannerSections";
import { SolutionsSection } from "./SolutionsSection";
import { ServiceBenefits } from "./ServiceBenefits";
import { Footer } from "./Footer";

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-end px-20 max-md:pl-5">
      <div className="flex overflow-hidden flex-col pt-2.5 w-full bg-white max-w-[1440px] max-md:max-w-full">
        <Header />
        <ProductNavigation />
        <HeroSection />
        <ProductShowcase />
        <AboutSection />
        <FeaturesSection />
        <ProductGrid />
        <BannerSections />
        <SolutionsSection />
        <ServiceBenefits />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
