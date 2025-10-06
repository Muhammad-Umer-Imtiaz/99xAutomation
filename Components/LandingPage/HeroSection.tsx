"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const HeroSection = () => {
  const MotionImage = motion(Image);
  return (
    <div id="home" className="relative flex pt-52  gap-10 px-28">
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

        <div className="space-x-8 mt-5">
          <button className="bg-gradient-to-l from-[#8D27FF] to-[#00CFFF] px-12 py-4 rounded-full text-white  text-xl   hover:from-[#7a1dcc] hover:to-[#00b8e6] transition ">
            Start Free
          </button>
          <button className="rounded-full bg-white text-xl px-12 py-4 text-[#000000B3] shadow-lg shadow-black/50 hover:shadow-black/70 transition">
            Watch demo
            <FaPlay className="inline ml-3 w-5 h-5"/> 
          </button>
        </div>
      </motion.div>
      <MotionImage
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        src="/heroSectionImage.png"
        alt="Hero Section Image"
        width={600}
        height={300}
        className="rounded-lg ml-16"
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
