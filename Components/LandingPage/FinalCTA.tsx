"use client";
import React from "react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <div className="my-20">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
        viewport={{ amount: 0.3 }}
        className="text-5xl text-[#8C25FF] font-bold text-center mb-6"
      >
        Let 99X Transform Your Business Today
      </motion.h2>
      <p className="text-base text-[#000000] text-center mb-16">
        Boost efficiency, cut costs, and deliver instant support — powered by
        AI.
      </p>

      <button className="block mx-auto bg-gradient-to-l from-[#8D27FF] to-[#00CFFF] px-20 py-5 rounded-full text-white text-3xl hover:from-[#7a1dcc] hover:to-[#00b8e6] transition">
        Get Started Now
      </button>
    </div>
  );
};

export default FinalCTA;
