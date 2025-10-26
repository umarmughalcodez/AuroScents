import AnnouncementBar from "@/components/AnnouncementBar";
import { DraggableCardDemo } from "@/components/DraggableCard";
import HeroSection from "@/components/Hero";
import HowToUse from "@/components/HowToUse";
import StatsSection from "@/components/StatsSection";
// import React from 'react'

const App = () => {
  return (
    <div>
      <HeroSection />
      <HowToUse />
      <StatsSection />

      {/* <Hero /> */}
      {/* <DraggableCardDemo /> */}
    </div>
  );
};

export default App;
