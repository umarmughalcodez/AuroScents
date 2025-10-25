"use client";
// components/HeroSection.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#F4EFE8] rounded-full blur-3xl opacity-60 translate-x-[-30%] translate-y-[-30%]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#C5A45A]/20 rounded-full blur-3xl translate-x-[40%] translate-y-[40%]" />

      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            All-natural · Gentle · Premium
          </p>

          <h1
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-[#111]
          leading-tight max-w-xl mx-auto lg:mx-0"
          >
            Dog perfume that smells as good as it feels
          </h1>

          <p className="mt-6 text-gray-700 text-base md:text-lg max-w-md mx-auto lg:mx-0">
            Indulge your dog with clean, skin-safe, and cruelty-free fragrances
            crafted from natural ingredients. Luxury care that feels good — and
            smells even better.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#shop"
              className="px-8 py-3 rounded-full bg-gradient-to-br from-[#C5A45A] to-[#B5974E] text-white text-sm font-medium shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.02]"
            >
              Shop Now
            </a>
            <a
              href="#about"
              className="px-8 py-3 rounded-full border border-[#E8E4DB] text-sm text-[#222] hover:bg-[#F7F5F1] transition-colors"
            >
              Learn More
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5"
              >
                <path
                  d="M12 2v6m0 0l3 3m-3-3l-3 3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>100% Natural</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5"
              >
                <path
                  d="M4 7h16M4 12h8m-8 5h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Safe for all coats</span>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative w-full max-w-[500px] mx-auto lg:max-w-none"
        >
          <div className="aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-2xl relative">
            <Image
              src="/images/hero.jpg"
              alt="Woman cuddling dog on sofa"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Floating Accent Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="absolute -bottom-8 -left-8 bg-white shadow-xl rounded-2xl px-5 py-4 flex items-center gap-3 max-w-[240px] border border-[#F1EEE8]"
          >
            <div className="w-10 h-10 rounded-full bg-[#F4EFE8] grid place-items-center text-[#B5974E] text-xl">
              🐾
            </div>
            <div>
              <p className="text-sm font-medium text-[#111]">
                Loved by pet parents
              </p>
              <p className="text-xs text-gray-500">98% would recommend</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
