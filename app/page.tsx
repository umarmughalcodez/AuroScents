import AnnouncementBar from "@/components/AnnouncementBar";
import { DraggableCardDemo } from "@/components/DraggableCard";
import FAQ from "@/components/FAQsection";
import HeroSection from "@/components/Hero";
import HowToUse from "@/components/HowToUse";
import LoopText from "@/components/LoopText";
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
      <FAQ />
      <LoopText
        marqueeText="Gentle Care, Bold Fragrance ✦ Made for Paws, Loved by Humans ✦ Luxury Scent, Happy Pup ✦ Fresh Fur, Happy Heart ✦ Pure. Calm. Captivating. ✦ The Essence of Confidence ✦ Spray Joy, Smell Love ✦
"
        speed={6}
        curveAmount={0}
        direction="left"
        interactive={true}
        className="text-[#D4AF37] bg-red-500"
      />

      {/* <Hero /> */}
      {/* <DraggableCardDemo /> */}
    </div>
  );
};

export default App;
