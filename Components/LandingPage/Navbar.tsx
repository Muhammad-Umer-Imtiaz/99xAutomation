"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="h-20 flex items-center justify-between bg-[#8D27FF] rounded-full text-white shadow-md px-10 my-8 fixed z-20 w-[85%] left-1/2 transform -translate-x-1/2"
    >
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
      {/* Navigation */}
      <ul className="flex gap-10 text-lg font-medium">
        <li className="cursor-pointer hover:text-gray-200 transition">Home</li>
        <li className="cursor-pointer hover:text-gray-200 transition">
          Features
        </li>
        <li className="cursor-pointer hover:text-gray-200 transition">Blogs</li>
        <li className="cursor-pointer hover:text-gray-200 transition">About</li>
      </ul>
      {/* Button */}
      <button className="bg-white text-[#8D27FF] font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition">
        Login
      </button>
    </motion.div>
  );
};

export default Navbar;
