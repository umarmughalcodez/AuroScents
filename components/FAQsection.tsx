"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "Are Auroscents products safe for all dog breeds?",
      answer:
        "Yes. Every Auroscents formula is made with natural, skin-safe ingredients. Our colognes and coat conditioners are tested for sensitivity and are free from synthetic fragrances and harsh chemicals.",
    },
    {
      question: "Do the scents last long on my dog’s coat?",
      answer:
        "Absolutely. Our natural scent blends are designed to last 2–3 days, keeping your pet fresh without overpowering their natural scent or irritating their skin.",
    },
    {
      question: "Can I use Auroscents products after every grooming session?",
      answer:
        "Yes, our products are gentle enough for regular use. They actually help maintain a soft, conditioned coat between grooming sessions.",
    },
    {
      question: "Are Auroscents products eco-friendly?",
      answer:
        "Every product is made with biodegradable ingredients and recyclable packaging — keeping both pets and the planet safe.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we offer worldwide shipping. You can view shipping options and delivery estimates at checkout.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FAFAFA] py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-black mb-10">
          Frequently Asked Questions
        </h2>

        <motion.div
          className="space-y-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                activeIndex === index
                  ? "bg-black text-white border-[#C5A44A]"
                  : "bg-white border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-5 text-left cursor-pointer font-medium"
              >
                <span
                  className={`text-base md:text-lg ${
                    activeIndex === index ? "text-[#C5A44A]" : "text-gray-800"
                  }`}
                >
                  {item.question}
                </span>

                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4"
                >
                  <svg
                    className={`w-5 h-5 ${
                      activeIndex === index ? "text-[#C5A44A]" : "text-gray-600"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 0.8, 0.25, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-[90%] h-[1px] bg-gradient-to-r from-transparent via-[#C5A44A] to-transparent mb-3 mx-auto"
                    />
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                      className={`px-5 pb-5 text-sm md:text-base leading-relaxed ${
                        activeIndex === index
                          ? "text-gray-100"
                          : "text-gray-600"
                      }`}
                    >
                      {item.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
