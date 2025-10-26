"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Khan",
      pet: "Golden Retriever Owner",
      text: "Auro is a game changer! My dog smells fresh all day, and the scent is so gentle — no irritation at all. Truly premium!",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 2,
      name: "Ali Raza",
      pet: "Persian Cat Owner",
      text: "Finally found something safe and elegant for my cat. Auro’s fragrance is soft and classy — feels like luxury for pets!",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328e3e4a?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 3,
      name: "Emma Shah",
      pet: "Husky Owner",
      text: "The fragrance lasts long but never feels too strong. My Husky actually enjoys grooming time now!",
      image:
        "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 4,
      name: "David Ali",
      pet: "Bulldog Owner",
      text: "So refreshing and subtle! I’ve never seen my dog smell so good and feel this calm after grooming.",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 5,
      name: "Mina Qureshi",
      pet: "Siamese Cat Owner",
      text: "Auro is worth every penny. It’s the perfect blend of elegance and gentleness for sensitive pets.",
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 6,
      name: "Ahmed Khan",
      pet: "German Shepherd Owner",
      text: "The Auro scent feels natural — no fake perfumes, just clean freshness that lasts. Love it!",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Adjust visible cards based on screen size
  useEffect(() => {
    const handleResize = () => setVisibleCount(window.innerWidth < 768 ? 1 : 3);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const getDisplayedTestimonials = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (current + i) % testimonials.length;
      items.push(testimonials[index]);
    }
    return items;
  };

  const displayTestimonials = getDisplayedTestimonials();

  return (
    <section className="relative py-24 px-6 bg-[#f8f9fb] overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#00215B] mb-4"
        >
          What Pet Lovers Say
        </motion.h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-12 text-sm sm:text-base">
          Loved by pet owners who care for comfort, elegance, and clean
          fragrances.
        </p>

        {/* Testimonials Carousel */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="flex overflow-hidden w-full justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center gap-6 w-full flex-wrap sm:flex-nowrap"
              >
                {displayTestimonials.map((t) => (
                  <div
                    key={t.id}
                    className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center w-full sm:w-1/3"
                  >
                    <div className="relative w-20 h-20 mb-4">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover rounded-full border-4 border-[#00215B]/10"
                      />
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                      “{t.text}”
                    </p>
                    <div>
                      <h4 className="font-semibold text-[#00215B] text-base sm:text-lg">
                        {t.name}
                      </h4>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        {t.pet}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-[#00215B] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
