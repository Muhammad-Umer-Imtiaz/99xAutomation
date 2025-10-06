"use client";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div>
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
        viewport={{ amount: 0.3 }}
        className="text-5xl text-[#8C25FF] font-bold text-center mb-6"
      >
        Insights & Innovations
      </motion.h2>
      <p className="text-base text-[#000000] text-center mb-16">
        Stay updated with expert articles on AI, automation, and chatbot
        technology shaping the future of
        <br /> business communication.
      </p>
    </div>
  );
};

export default page;
