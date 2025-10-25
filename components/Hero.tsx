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

  // Auto-slide every 4.5 seconds
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
            className="absolute inset-0 w-full h-[90%] object-cover sm:object-cover bg-black"
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60 pointer-events-none sm:block hidden" />
      </div>

      {/* === Text Content === */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 py-1 sm:py-0 sm:absolute sm:inset-0 sm:items-start sm:justify-center sm:text-left sm:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight drop-shadow-xl">
              {slides[index].title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-white/90 max-w-xl mx-auto sm:mx-0">
              {slides[index].subtitle}
            </p>

            <div className="mt-8 flex flex-wrap justify-center sm:justify-start gap-4">
              <a
                href="#shop"
                className="px-8 py-3 rounded-full bg-gradient-to-br from-[#C5A45A] to-[#B5974E] text-white text-sm font-medium shadow-md hover:shadow-lg hover:scale-[1.03] transition-transform"
              >
                Shop Now
              </a>
              <a
                href="#about"
                className="px-8 py-3 rounded-full border border-white/30 text-sm text-white hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
