"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQS = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const data = [
    {
      id: 1,
      question: "Q1. What is 99X AI Chatbot?",
      answer:
        "A smart AI-powered assistant that automates customer queries, workflows, and support 24/7.",
    },
    {
      id: 2,
      question: "Q2. Do I need coding skills to use 99X?",
      answer: "Hello",
    },
    {
      id: 3,
      question: "Q3. Can I integrate 99X with my website or app?",
      answer: "",
    },
    { id: 4, question: "Q4. How secure is my data with 99X?", answer: "" },
    { id: 5, question: "Q5. Can 99X be trained for my industry?", answer: "" },
    // { id: 6, question: "Q6. Does 99X support multiple languages?", answer: "" },
    // {
    //   id: 7,
    //   question: "Q7. How fast can I deploy 99X for my business?",
    //   answer: "",
    // },
    // {
    //   id: 8,
    //   question: "Q8. Can 99X handle payments or transactions?",
    //   answer: "",
    // },
    // {
    //   id: 9,
    //   question: "Q9. Is there customer support if I face issues?",
    //   answer: "hello",
    // },
  ];

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div
      className="md:py-10 py-3 lg:px-28 md:px-16 px-8  scroll-mt-28"
      id="faqs"
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
        viewport={{ amount: 0.3 }}
        className="lg:text-5xl md:text-3xl sm:text-2xl text-xl text-[#8C25FF] font-bold text-center mb-10"
      >
        Everything You Need to Know
      </motion.h2>

      {data.map((item) => (
        <div
          key={item.id}
          className=" md:my-6 my-3 py-3 px-3 md:px-6 md:py-4 bg-[#8D27FF0D] rounded-2xl flex flex-col"
        >
          <div
            className="flex items-start justify-between cursor-pointer"
            onClick={() => toggle(item.id)}
          >
            <h3 className="md:text-xl sm:text-lg font-medium text-[#000000] mb-3">
              {item.question}
            </h3>
            {openId === item.id ? (
              <ChevronUp className="transition" />
            ) : (
              <ChevronDown className="transition" />
            )}
          </div>

          {openId === item.id && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[#000000]"
            >
              {item.answer}
            </motion.p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQS;
