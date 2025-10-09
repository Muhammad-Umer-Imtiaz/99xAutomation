"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="h-16 sm:h-20 flex items-center justify-between bg-[#8D27FF] rounded-full text-white shadow-md px-4 sm:px-6 lg:px-10 my-4 sm:my-8 fixed z-20 w-[95%] sm:w-[90%] lg:w-[85%] left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-opacity-95"
      >
        {/* Logo */}
        <div className="cursor-pointer flex items-center">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={80}
            height={45}
            className="rounded-xl w-16 h-auto sm:w-20 lg:w-[100px]"
            priority
          />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex gap-10 text-lg font-medium">
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

        {/* Desktop Button */}
        <motion.button
          onClick={() => router.push("/login")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:block bg-white text-[#000] font-semibold px-6 py-2 rounded-full shadow-lg shadow-black/50 hover:shadow-black/90 hover:bg-gray-100 transition-all"
        >
          Login
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-20 sm:top-28 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] bg-[#8D27FF] backdrop-blur-md bg-opacity-95 rounded-3xl shadow-xl z-10 py-6 px-6"
          >
            <ul className="flex flex-col gap-4 text-white">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-4 rounded-xl hover:bg-white/10 transition-colors duration-300 text-lg font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <motion.button
              onClick={() => {
                router.push("/login");
                setMobileMenuOpen(false);
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-6 bg-white text-[#000] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all"
            >
              Login
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;