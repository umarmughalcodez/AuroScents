"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";
import { FaLeaf, FaHeart, FaSmile, FaPaw } from "react-icons/fa";

interface CountUpProps {
  start?: number;
  target: number;
  duration?: number;
  decimals?: number;
}

const CountUp: React.FC<CountUpProps> = ({
  start = 0,
  target,
  duration = 2,
  decimals = 0,
}) => {
  const [count, setCount] = useState(start);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const newValue = start + (target - start) * progress;

      setCount(parseFloat(newValue.toFixed(decimals)));

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [start, target, duration, decimals]);

  return <>{count.toLocaleString()}</>;
};

export default function StatsSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      setStartCounting(true);
    }
  }, [inView, controls]);

  const stats = [
    {
      icon: <FaPaw className="text-[#C5A45A] text-4xl mb-3" />,
      label: "Pet-Safe Ingredients",
      start: 0,
      value: 99.9,
      suffix: "%",
      decimals: 1,
      desc: "Every drop crafted with vet-approved, gentle components.",
    },
    {
      icon: <FaSmile className="text-[#C5A45A] text-4xl mb-3" />,
      label: "Happy Pet Owners",
      start: 0,
      value: 100,
      suffix: "+",
      desc: "Trusted and adored by dog lovers around the world.",
    },
    {
      icon: <FaHeart className="text-[#C5A45A] text-4xl mb-3" />,
      label: "Customer Retention",
      start: 0,
      value: 98.5,
      suffix: "%",
      decimals: 1,
      desc: "Consistent quality and fragrance that keeps them coming back.",
    },
    {
      icon: <FaLeaf className="text-[#C5A45A] text-4xl mb-3" />,
      label: "Cruelty-Free & Vegan",
      start: 0,
      value: 100,
      suffix: "%",
      desc: "Luxury made with compassion. Always kind to animals.",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative bg-[#0B0B0B] text-white py-24 px-6 overflow-hidden"
    >
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#C5A45A]/10 via-transparent to-transparent blur-3xl"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="text-3xl md:text-5xl font-light tracking-wide"
        >
          Crafted with Care, Loved with Trust
        </motion.h2>
        <div className="mt-6 w-24 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#C5A45A] to-transparent" />
      </div>

      {/* Stats */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: index * 0.15 },
              },
            }}
          >
            {stat.icon}
            <h3 className="text-4xl md:text-5xl font-semibold text-[#C5A45A]">
              {startCounting ? (
                <CountUp
                  start={stat.start}
                  target={stat.value}
                  duration={3.5}
                  decimals={stat.decimals}
                />
              ) : (
                stat.start
              )}
              {stat.suffix}
            </h3>
            <p className="text-base font-medium mt-2">{stat.label}</p>
            <p className="text-sm mt-2 text-white/70 max-w-xs">{stat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
