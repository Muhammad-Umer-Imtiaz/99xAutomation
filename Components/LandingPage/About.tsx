"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Assuming Next.js Image component; adjust if needed
import { div } from "framer-motion/client";

// Custom MotionImage component if not defined elsewhere
const MotionImage = motion(Image);

const About = () => {
  const logos = [
    "/company1.png",
    "/company2.png",
    "/company3.png",
    "/company4.png",
    "/company5.png",
    "/company6.png",
  ];
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
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  const list = [
    "Train your bot with files, prompts & APIs",
    "Customize its look & behavior",
    "Integrate with tools & APIs",
    "Generate embedding script to add chat to your site – no coding",
  ];

  return (
    <div>
      <div className="overflow-hidden relative  bg-white py-10 mx-28">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ amount: 0.3 }}
          className="text-5xl text-[#8C25FF] font-bold text-center mb-16"
        >
          Companies and clients who trust 99X
        </motion.h2>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {logos.concat(logos).map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Logo ${i}`}
                className="h-12 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
      <div
        id="about"
        className="relative w-full scroll-mt-28 py-5 my-10 px-28 overflow-hidden "
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/WhyChooseBG.png')", // Keep existing BG or replace with new if provided
          }}
        ></div>
        <div className="absolute inset-0 bg-white/60 "></div>

        {/* Content */}
        <div className="relative flex  flex-row-reverse gap-8 mt-10 px-16">
          {/* Left Section */}
          <div className="space-y-5 flex-1 ml-64 pt-14 ">
            <motion.h3
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
              viewport={{ once: true }}
              className="text-[#8C25FF] font-semibold text-5xl"
            >
              About 99xAutomationAI
            </motion.h3>{" "}
            <motion.p
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-[#000000] text-base"
            >
              <strong>99x Automation AI</strong> lets you easily create and
              customize intelligent chatbots. Train your bot with files,
              documents, prompts, and URLs, then personalize its look and
              behavior. Integrate with tools like
              <strong> Google Calendar </strong> and <strong> Calendly </strong>{" "}
              for appointment-based interactions. Simply generate an embedding
              script to add the chatbot to your site — no coding required.
            </motion.p>
            <motion.h5
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
              viewport={{ once: true }}
              className="text-[#000000] font-semibold text-xl"
            >
              Create. Customize. Automate.
            </motion.h5>
          </div>

          {/* Right Section - Dummy robot image */}
          <MotionImage
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
            viewport={{ once: true }}
            src="/about.png" // Dummy placeholder with purple bg and robot emoji
            alt="99x Automation AI Robot"
            width={150}
            height={150}
            className="rounded-lg ml-16"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default About;
