"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const HeroSection = () => {
  const MotionImage = motion(Image);
  return (
    <div
      id="home"
      className="relative flex pt-56 pb-12  gap-12 lg:28px md:px-28 px-8"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="space-y-6"
      >
        <h1 className="text-3xl md:text-6xl font-medium leading-tight ">
          Your <span className="text-[#8D27FF]">AI Chatbot</span> <br />
          Builder for <br />
          Every Business
        </h1>

        <p className="text-lg text-[#555555] ">
          Easily create and deploy chatbots across WhatsApp, Instagram,
          Messenger, and websites — all in one platform.
        </p>

        <div className="md:space-x-8 space-x-4 mt-5">
          <div className="group inline-block">
            <button className="relative overflow-hidden md:px-12 px-3 md:py-4 py-1.5 rounded-full text-black text-lg md:text-xl font-medium border-2 border-[#8D27FF] bg-white transition-all duration-500 group hover:scale-105 active:scale-105">
              {/* Small corner indicator - visible by default */}
              <span
                className="absolute bottom-0 right-0 md:w-8 md:h-8 h-5 w-5 bg-[#8D27FF] rounded-tl-full 
               transition-all duration-500 ease-out 
               group-hover:w-full group-hover:h-full group-hover:rounded-full
               active:w-full active:h-full active:rounded-full"
              ></span>

              {/* Button text */}
              <span
                className="relative z-10 text-[#8D27FF] md:font-medium font-normal 
               group-hover:text-white active:text-white transition-colors duration-500"
              >
                Start Free
              </span>
            </button>
          </div>

          <button className="rounded-full bg-white text-lg md:text-xl md:px-12 px-3 md:py-4 py-2 text-[#000000B3] shadow-lg shadow-black/50 hover:shadow-black/70 transition">
            Watch Demo
            <FaPlay className="inline ml-1 sm:ml-3 w-4 h-4" />
          </button>
        </div>
      </motion.div>
      <MotionImage
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        src="/heroSectionImage.gif"
        alt="Hero Section Image"
        width={600}
        height={300}
        className="hidden lg:flex rounded-lg ml-16"
        priority
      />

      <img
        src="/bgHero.png"
        alt="Background of hero Section"
        className="absolute top-0 right-0"
      />
    </div>
  );
};

export default HeroSection;
