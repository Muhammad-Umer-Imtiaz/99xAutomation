"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Blog", href: "/blogs" },
  { name: "FAQs", href: "#faqs" },
  { name: "About", href: "#about" },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="h-20 flex items-center justify-between bg-[#8D27FF] rounded-full text-white shadow-md px-10 my-8 fixed z-20 w-[85%] left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-opacity-95"
    >
      {/* Logo */}
      <div className="cursor-pointer flex items-center">
        <Image
          src="/Logo.png"
          alt="Logo"
          width={100}
          height={56}
          className="rounded-xl"
          priority
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-10 text-lg font-medium">
        {navLinks.map((link) => (
          <li key={link.name} className="relative group">
            <Link
              href={link.href}
              className="cursor-pointer transition-colors duration-300"
            >
              {link.name}
            </Link>

            {/* UNDERLINE EFFECT */}
            <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-white transition-all duration-200 group-hover:w-full rounded-full"></span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <motion.button
        onClick={() => router.push("/login")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-[#8D27FF] font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition-all"
      >
        Login
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
