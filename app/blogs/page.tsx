"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/Components/LandingPage/Navbar";
import Footer from "@/Components/LandingPage/Footer";

const blogPosts = [
  {
    id: 1,
    category: "AI Chatbots",
    date: "September 18, 2023",
    title: "How AI Chatbots Are Transforming Customer Support",
    description:
      " Discover the impact of AI chatbots on enhancing customer service experiences.",
    image: "/images/blog1.jpg",
  },
  {
    id: 2,
    category: "AI Automation",
    date: "September 19, 2023",
    title: "Why Automation is the Future of Business Efficiency",
    description:
      " Discover the impact of AI chatbots on enhancing customer service experiences.",
    image: "/images/blog2.jpg",
  },
  {
    id: 3,
    category: "Web Scraping Tools",
    date: "September 14, 2023",
    title: "How Web Scraping Helps AI Systems Learn Faster",
    description:
      " Discover the impact of AI chatbots on enhancing customer service experiences.",

    image: "/images/blog3.jpg",
  },
  {
    id: 4,
    category: "Web Scraping Tools",
    date: "September 16, 2023",
    title: "How Web Scraping Helps AI Systems Learn Faster",
    description:
      " Discover the impact of AI chatbots on enhancing customer service experiences.",

    image: "/images/blog4.jpg",
  },
  {
    id: 5,
    category: "AI Chatbots",
    date: "September 17, 2023",
    title: "How AI Chatbots Are Transforming Customer Support",
    description:
      " Discover the impact of AI chatbots on enhancing customer service experiences.",

    image: "/images/blog5.jpg",
  },
  {
    id: 6,
    category: "AI Automation",
    date: "September 17, 2023",
    title: "Why Automation is the Future of Business Efficiency",
    description:
      " Discover the impact of AI chatbots on enhancing customer service experiences.",

    image: "/images/blog6.jpg",
  },
];

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="py-40 px-10 md:px-28">
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
          technology shaping the future of <br />
          business communication.
        </p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-[0_0_25px_#8D27FF4D]  transition-shadow duration-300 bg-white"
            >
              <div className="relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-[#8C25FF] bg-[#F6E9FF] px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl my-2 font-semibold text-gray-900 leading-snug">
                  {post.title}
                </h3>
                <p>{post.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
