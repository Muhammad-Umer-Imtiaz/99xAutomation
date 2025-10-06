"use client";
import React from "react";
import { motion } from "framer-motion";

const Try = () => {
  return (
    <div className="py-10 bg-[#8D27FF4D]">
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

      <div className="flex justify-center gap-6 max-w-fit mx-auto bg-[#00000033] px-10 py-5 rounded-full">
        <input
          type="text"
          placeholder="Email Address"
          className="px-6 py-2 w-80 rounded-full shadow-lg bg-white text-black shadow-[#00000080]"
        />
        <button className=" inline bg-gradient-to-r from-[#6f25c4]  to-[#00CFFF]  shadow-[#00000080] shadow-lg px-10 py-2 rounded-full text-white text-xl hover:from-[#7a1dcc] hover:to-[#00b8e6] transition">
          Try Now
        </button>
      </div>
    </div>
  );
};

export default Try;
