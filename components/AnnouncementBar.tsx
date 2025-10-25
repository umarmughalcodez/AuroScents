"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "✨ Free shipping on all orders over $50!",
  "🐾 Get 10% off your first order — use code WELCOME10",
  "🌿 All-natural ingredients, crafted with care.",
  "🚚 Fast worldwide delivery from the USA!",
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  // Auto change messages every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black text-gold text-sm sm:text-base py-6 overflow-hidden relative flex justify-center items-center font-medium tracking-wide text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={messages[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="absolute text-center px-4"
        >
          {messages[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
