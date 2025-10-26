import AnnouncementBar from "@/components/AnnouncementBar";
import { DraggableCardDemo } from "@/components/DraggableCard";
import HeroSection from "@/components/Hero";
import HowToUse from "@/components/HowToUse";
import ProductSection from "@/components/ProductsSection";
import AuroStandardSection from "@/components/StandardSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/Testimonials";
// import React from 'react'

const App = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ProductSection />
      <HowToUse />
      <TestimonialsSection />
      <AuroStandardSection />

      {/* <Hero /> */}
      {/* <DraggableCardDemo /> */}
    </div>
  );
};

export default App;
