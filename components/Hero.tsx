"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/image1.jpg",
    title: "Where Elegance Meets Every Wag",
    subtitle: "All-natural luxury fragrances crafted with love for your dog.",
  },
  {
    image: "/image2.jpg",
    title: "Scents Tailored for Pure Companionship",
    subtitle: "A fragrance experience as unique as your furry friend.",
  },
  {
    image: "/image3.jpg",
    title: "Unleash Sophistication",
    subtitle: "For those who believe their pets deserve a touch of luxury.",
  },
];

export default function HeroImages() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-amber-950 text-white overflow-hidden flex flex-col">
      {/* === Image Slideshow === */}
      <div className="relative w-full h-[60vh] sm:h-screen overflow-hidden">
        {slides.map((slide, i) => (
          <motion.img
            key={slide.image}
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-[100%] object-cover sm:object-cover bg-amber-900"
            initial={false}
            animate={{
              opacity: i === index ? 1 : 0,
              scale: i === index ? 1 : 1.05,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            style={{ willChange: "opacity, transform" }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1A2B]/20 via-[#0E1A2B]/40 to-[#0E1A2B]/80 pointer-events-none sm:block hidden" />
      </div>

      {/* === Text Content === */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 py-3 sm:py-0 sm:absolute sm:inset-0 sm:items-start sm:justify-center sm:text-left sm:px-16 xl:mt-24 mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight drop-shadow-xl text-white">
              {slides[index].title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#EDE4C8]/90 max-w-xl mx-auto sm:mx-0">
              {slides[index].subtitle}
            </p>

            <div className="mt-8 flex flex-wrap justify-center sm:justify-start gap-4">
              <a
                href="#shop"
                className="px-8 py-3 rounded-full bg-gradient-to-br from-[#E7C57D] to-[#CFAE64] text-[#0E1A2B] text-sm font-medium shadow-md hover:shadow-lg hover:scale-[1.03] transition-transform"
              >
                Shop Now
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
