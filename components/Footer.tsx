"use client";

import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Footer = () => {
  const router = useRouter();

  const footerLinks = [
    {
      title: "Menu",
      links: [
        { name: "Shop", path: "/shop" },
        { name: "About", path: "/about" },
        { name: "FAQ", path: "/faq" },
        { name: "Blog", path: "/blog" },
        { name: "Reviews", path: "/reviews" },
        { name: "Community", path: "/community" },
      ],
    },
    {
      title: "Policy",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Refund Policy", path: "/refund-policy" },
      ],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const socialIcons = [
    { icon: FaInstagram, link: "#" },
    { icon: FaTiktok, link: "#" },
    { icon: AiFillYoutube, link: "#" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-amber-950 text-white py-12 px-6 md:px-16"
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
          <p className="text-3xl text-[#E7C57D] mb-3 font-semibold">
            AuroScents
          </p>
          <p className="text-sm leading-relaxed text-white max-w-sm">
            Transform your dog&apos;s coat with premium natural colognes. Safe
            ingredients, gentle on skin, and long-lasting fragrance for happy
            pets and owners.
          </p>

          {/* Email */}
          <p className="mt-4 text-white">
            Contact us:{" "}
            <Button
              variant={"link"}
              effect={"hoverUnderline"}
              onClick={() => router.push("mailto:admin@auroscents.com")}
              className="text-white hover:text-[#E7C57D] transition-colors p-0"
            >
              admin@auroscents.com
            </Button>
          </p>
        </motion.div>

        {/* Links */}
        <div className="flex flex-wrap justify-start flex-1 gap-20">
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="min-w-[120px]"
            >
              <h3 className="font-semibold mb-3 text-2xl">{section.title}</h3>
              <div className="flex flex-col items-start gap-2">
                {section.links.map((link, i) => (
                  <Button
                    key={i}
                    className="hover:text-[#E7C57D] transition-colors cursor-pointer text-white p-0"
                    effect={"hoverUnderline"}
                    variant={"link"}
                    onClick={() => router.push(link.path)}
                  >
                    {link.name}
                  </Button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialIcons.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-black text-white p-2 rounded-full cursor-pointer"
              >
                <Icon size={18} />
              </motion.a>
            );
          })}
        </div>

        {/* Country / Payment */}
        <div className="text-white">America (USD $)</div>

        {/* Copyright */}
        <p className="text-white text-center md:text-right">
          © 2025, AuroScents. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
