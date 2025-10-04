"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Mic,
  PencilLine,
  Palette,
  Globe,
  Brain,
  BarChart3,
  ArrowBigRight,
} from "lucide-react";
const ChatbotBuilder = () => {
  const data = [
    {
      id: 1,
      icon: Mic,
      heading: "Bot Type: Text, Voice, or Both",
      text: "Choose the chatbot style that fits your audience — text-only, voice-enabled, or a mix of both.",
    },
    {
      id: 2,
      icon: PencilLine,
      heading: "Custom Bot Name & First Message",
      text: "Give your bot a unique identity and welcome users with a personalized greeting.",
    },
    {
      id: 3,
      icon: Palette,
      heading: "Brand Colors & Styling",
      text: "Customize primary and secondary colors to perfectly match your brand.",
    },
    {
      id: 4,
      icon: Globe,
      heading: "Multi-Platform Deployment",
      text: "Launch your chatbot on WhatsApp, Instagram, Messenger, and websites with ease.",
    },
    {
      id: 5,
      icon: Brain,
      heading: "AI-Powered Conversations",
      text: "Deliver natural, human-like responses with smart AI capabilities.",
    },
    {
      id: 6,
      icon: BarChart3,
      heading: "Real-Time Insights & 24/7 Automation",
      text: "Track performance with live insights while your chatbot works round the clock.",
    },
  ];
  return (
    <div className="mx-28 my-20 space-y-10">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
        viewport={{ amount: 0.3 }}
        className="text-5xl text-[#8C25FF] font-bold text-center mb-6"
      >
        Companies and clients who trust 99X
      </motion.h2>
      <p className="text-base text-[#000000] text-center mb-16">
        Personalize your bot, launch it anywhere, track results in real-time,
        and keep your business active <br /> 24/7 — all in one platform.
      </p>
      {/* Cards */}
      <div className="grid grid-cols-3 gap-x-6 gap-y-14">
        {data.map((item) => {
          const Icon = item.icon; // assign component
          return (
            <motion.div
              key={item.id}
              className="px-6 py-6 shadow-[0_0_25px_#8D27FF4D] rounded-3xl bg-white flex items-center flex-col space-y-4 "
              whileHover={{ scale: 1.08}}
              whileTap={{ scale: 1.1 }}
            >
              <Icon className="w-16 h-16 p-4 text-white rounded-full bg-[#8C25FF] mt-4" />
              {/* render icon */}
              <div className="">
                <h4 className="text-xl font-semibold text-[#000000] text-center mb-3">
                  {item.heading}
                </h4>
                <p className="text-[#000000] text-center mb-4">{item.text}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
        viewport={{ amount: 0.3 }}
        className="text-xl mt-4 text-[#8C25FF] font-bold text-center mb-6"
      >
        Discover how 99X applies these use cases in your business
        <ArrowBigRight className="inline w-5 h-5 text-[#8C25FF] " />
      </motion.h2>
    </div>
  );
};

export default ChatbotBuilder;
