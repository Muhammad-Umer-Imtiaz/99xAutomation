"use client";
import { Rocket, Target, Wrench } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import ArrowDown from "@/public/Union2.png";
import ArrowRight from "@/public/Union.png";

const HowItWork = () => {
  const steps = [
    {
      number: "1",
      title: "Step1 - Build",
      description:
        "Design your chatbot in minutes with our intuitive, no-code builder.",
      icon: Wrench,
    },
    {
      number: "2",
      title: "Step2 - Train",
      description:
        "Feed your chatbot with real data to make it smarter and context-aware.",
      icon: Target,
    },
    {
      number: "3",
      title: "Step3 - Publish",
      description:
        "Deploy on your website, app, or social platforms with just one click.",
      icon: Rocket,
    },
  ];

  return (
    <div className="py-20  lg:mx-28 md:mx-16 mx-8  relative">
      {/* Title */}
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
        viewport={{ amount: 0.3 }}
        className="text-5xl text-[#8C25FF] font-bold text-center mb-6"
      >
        How it works
      </motion.h2>

      <p className="text-base text-[#000000] text-center mb-20">
        Just 3 simple steps to launch your AI chatbot with 99X.
      </p>

      {/* Steps Container */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-20  relative">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`relative flex flex-col items-center ${
              index === 1 ? "lg:-mt-52" : "lg:mt-36"
            }`}
          >
            {/* Step Card */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="px-10 py-12 mx-6 shadow-[0_0_25px_#8D27FF4D] rounded-3xl bg-white flex items-center flex-col space-y-8 z-10"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-[#8C25FF] text-white rounded-full mb-4 shadow-md">
                <step.icon className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-medium mb-2">{step.title}</h3>
              <p className="text-gray-700 text-center">{step.description}</p>
            </motion.div>

            {/* Arrow between steps */}
            {index < steps.length - 1 && (
              <div>
                {index === 0 ? (
                  <Image
                    src={ArrowRight}
                    alt="arrow right"
                    className="hidden  lg:block absolute -top-12 left-54 translate-x-4 -translate-y-1/2 w-60 h-auto"
                  />
                ) : (
                  <Image
                    src={ArrowDown}
                    alt="arrow down"
                    className="hidden lg:block absolute top-20 -right-84 -translate-x-1/2 mt-2 w-60 h-auto"
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Get Start Free Button*/}
      <button className="relative block mt-10 mx-auto overflow-hidden px-12 py-4 rounded-full text-black text-xl font-medium border-2 border-[#8D27FF] bg-white transition-all duration-500 group hover:scale-105">
        {/* Small corner indicator - visible by default */}
        <span className="absolute bottom-0 right-0 w-8 h-8 bg-[#8D27FF] rounded-tl-full transition-all duration-500 ease-out group-hover:w-full group-hover:h-full group-hover:rounded-full"></span>

        {/* Button text */}
        <span className="relative z-10 text-[#8D27FF] font-medium  group-hover:text-white transition-colors duration-500">
          Get Start Free
        </span>
      </button>
    </div>
  );
};

export default HowItWork;
