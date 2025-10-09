"use client";
import React from "react";
import { motion } from "framer-motion";

const Performance = () => {
  const data = [
    {
      id: 1,
      value: "85%",
      heading: "Customer Queries Automated",
      para: "No manual effort needed — AI handles it all.",
    },
    {
      id: 2,
      value: "60%",
      heading: "Support Cost Reduction",
      para: "Save more by replacing repetitive tasks with AI.",
    },
    {
      id: 3,
      value: "3x",
      heading: "Faster Response Time",
      para: "Instant replies without keeping customers waiting.",
    },
    {
      id: 4,
      value: "24/7",
      heading: "Always Available",
      para: "Round-the-clock support across all channels.",
    },
  ];
  return (
    <div className=" lg:px-28 md:px-16 px-8 lg:py-20 py-5 lg:space-y-10 space-y-3  bg-[#8D27FF33]">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
        viewport={{ amount: 0.3 }}
        className="lg:text-5xl md:text-3xl sm:text-2xl text-xl text-[#8C25FF] font-bold text-center mb-6"
      >
        How 99X Adds Value to Your Business in Numbers
      </motion.h2>
      <p className="md:text-base text-sm text-[#000000] text-center mb-16">
        Our numbers speak for themselves — see how 99X helps companies scale
        faster, support smarter,
        <br className="hidden lg:block" /> and save more.
      </p>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-14">
        {data.map((item) => {
          return (
            <motion.div
              key={item.id}
              className="px-3 pt-14 pb-10 shadow-[0_0_25px_#8D27FF4D] rounded-3xl bg-white flex items-center flex-col space-y-4"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 1.1 }}
            >
              <h3 className="text-[#8D27FF] text-5xl font-semibold text-center mb-3">
                {item.value}
              </h3>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-[#000000] mb-3">
                  {item.heading}
                </h4>
                <p className="text-[#000000]">{item.para}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Performance;
