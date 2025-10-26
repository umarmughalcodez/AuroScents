"use client";

import { Leaf, Sparkles, Droplets } from "lucide-react";
import { motion } from "framer-motion";

export default function AuroStandardSection() {
  const features = [
    {
      id: 1,
      icon: <Droplets className="w-8 h-8 text-[#00215B]" />,
      title: "Gentle Guarantee",
      description:
        "Our gentle guarantee is simple: ZERO alcohol and no irritation. Just clean fur and a happy pet.",
    },
    {
      id: 2,
      icon: <Sparkles className="w-8 h-8 text-[#00215B]" />,
      title: "Two Benefits, One Spray",
      description:
        "Auro refreshes and restores with argan oil, aloe vera, and witch hazel blended in for lasting coat health.",
    },
    {
      id: 3,
      icon: <Leaf className="w-8 h-8 text-[#00215B]" />,
      title: "Refined Balance",
      description:
        "We craft fragrances that captivate like high-end aromas without overpowering your pet’s senses.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#00215B] mb-12"
        >
          The Auro Standard
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {features.map((f) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: f.id * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 shadow-sm hover:shadow-md rounded-2xl p-8 transition-all duration-300"
            >
              <div className="flex justify-center mb-5">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {f.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
