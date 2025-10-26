"use client";
import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
// import logo from "@/public/Logo.png";

const Footer = () => {
  const router = useRouter();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const footerLinks = [
    {
      title: "Menu",
      links: ["Shop", "About", "FAQ", "Blog", "Reviews", "Community"],
    },
    {
      title: "Policy",
      links: ["Privacy Policy", "Terms of Service", "Refund policy"],
    },
    {
      title: "Contact",
      links: [
        "Support",
        "AuroScents",
        "382 NE 191st St",
        "Miami, FL 33179",
        "(754) 300-8057",
        "admin@auroscents.com",
      ],
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-[#F8F7F3] text-[#1A1A1A] py-12 px-6 md:px-16 flex flex-col gap-10"
    >
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Brand Info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1"
        >
          {/* <Image
            src={logo}
            alt="AuroScents Logo"
            width={180}
            height={80}
            className="cursor-pointer mb-4"
            onClick={() => router.push("/")}
          /> */}
          <p>AuroScents</p>
          <p className="text-sm leading-relaxed text-[#3A3A3A] max-w-sm">
            AuroScents was made to turn your dog&apos;s coat into a playground
            for your hands and face. We focus on using safe ingredients and
            avoid harsh chemicals that irritate your dog&apos;s skin. Enjoy
            longer cuddles, closer together.
          </p>
        </motion.div>

        {/* Links */}
        <div className="flex flex-wrap justify-between gap-10 flex-1">
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-3">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="hover:text-[#5C715E] transition-colors cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        {/* Social Links */}
        <div className="flex items-center gap-4">
          {[FaInstagram, FaTiktok, AiFillYoutube].map((Icon, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#1A1A1A] text-white p-2 rounded-full cursor-pointer"
            >
              <Icon size={18} />
            </motion.span>
          ))}
        </div>

        {/* Country / Payment */}
        <div className="text-gray-700">America (USD $)</div>

        {/* Copyright */}
        <p className="text-gray-600 text-center md:text-right">
          © 2025, AuroScents. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
