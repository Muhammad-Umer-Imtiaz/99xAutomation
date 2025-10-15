"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WhyChoose = () => {
  const MotionImage = motion(Image);

  const list = [
    "99x makes chatbot building simple and fast. With our drag-and-drop tools you don’t need coding knowledge — just a few clicks and your bot is ready to go.",
    "Your chatbot can look and feel like part of your brand. Customize colors, logos, and welcome messages to create a seamless experience for your audience.",
    "Smart AI automation keeps your business available 24/7, instantly answering questions, qualifying leads, and engaging customers even while you sleep",
  ];

  // Variants for stagger effect
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.42, 0, 0.58, 1] as [number, number, number, number], // 👈 cubic bezier easeInOut
      },
    },
  };

  return (
    <div>
      {/* Companies and clients who trust 99X */}

      {/* Why Choose 99x */}
      <div className="relative w-full py-5 my-10  lg:px-28 md:px-16 px-8 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/WhyChooseBG.png')",
          }}
        ></div>
        <div className="absolute inset-0 bg-white/60"></div>

        {/* Content */}
        <div className="relative lg:flex lg:gap-8 gap-12 mt-10 lg:px-16">
          {/* Left Section */}
          <div className="lg:space-y-5 md:space-y-3 space-y-1 flex-1">
            <motion.h3
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
              viewport={{ once: true }}
              className="text-[#8C25FF] font-semibold lg:text-5xl md:text-3xl sm:text-2xl text-2xl mb-2 text-center lg:text-left"
            >
              Why Choose 99x?
            </motion.h3>

            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-[#0000006b] lg:text-base text-sm block text-center lg:text-left mb-3"
            >
              Trusted AI automation to power conversations that matter.
            </motion.span>

            {/* List with stagger */}
            <motion.div
              className="space-y-0"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {list.map((text, index) => (
                <motion.div
                  key={index}
                  className="flex items-start lg:gap-3 gap-2 lg:mt-3 mt-2"
                  variants={item}
                >
                  <div className="w-1 h-1 mt-3 bg-black rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 lg:text-lg text-base leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Section */}
          <MotionImage
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
            viewport={{ once: true }}
            src="/WhyCHoose.png"
            alt="Why Choose Us"
            width={600}
            height={600}
            className="rounded-lg md:ml-16 lg:mt-0 mt-10 "
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
