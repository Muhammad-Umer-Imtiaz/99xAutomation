"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Mic,
  BarChart3,
  ShoppingCart,
  Stethoscope,
  Landmark,
  ShieldCheck,
  GraduationCap,
  Plane,
  Home,
  Package,
  Phone,
  Landmark as Government,
  Scale,
  Cpu,
  Megaphone,
  Users,
  Utensils,
  ArrowBigRight,
} from "lucide-react";

const Industries = () => {
  const data = [
    {
      id: 1,
      icon: ShoppingCart,
      heading: "E-Commerce & Retail",
      text: "Automate product queries and orders.",
    },
    {
      id: 2,
      icon: Stethoscope,
      heading: "Healthcare",
      text: "Schedule appointments and patient FAQs.",
    },
    {
      id: 3,
      icon: Landmark,
      heading: "Finance & Banking",
      text: "Secure account queries and transactions.",
    },
    {
      id: 4,
      icon: ShieldCheck,
      heading: "Insurance",
      text: "Policy info, claims, and instant support.",
    },
    {
      id: 5,
      icon: GraduationCap,
      heading: "Education & E-Learning",
      text: "Student support and course guidance.",
    },
    {
      id: 6,
      icon: Plane,
      heading: "Travel & Hospitality",
      text: "Booking, itineraries, and real-time updates.",
    },
    {
      id: 7,
      icon: Home,
      heading: "Real Estate",
      text: "Property listings, tours, and lead capture.",
    },
    {
      id: 8,
      icon: Package,
      heading: "Logistics & Supply Chain",
      text: "Shipment tracking and delivery updates.",
    },
    // {
    //   id: 9,
    //   icon: Phone,
    //   heading: "Telecom",
    //   text: "Plan info, billing, and customer support.",
    // },
    // {
    //   id: 10,
    //   icon: Government,
    //   heading: "Government Services",
    //   text: "Citizen services, FAQs, and support.",
    // },
    // {
    //   id: 11,
    //   icon: Scale,
    //   heading: "Legal Services",
    //   text: "Case queries, appointments, and documents.",
    // },
    // {
    //   id: 12,
    //   icon: Cpu,
    //   heading: "SaaS & Technology",
    //   text: "Onboarding and technical support.",
    // },
    // {
    //   id: 13,
    //   icon: Megaphone,
    //   heading: "Marketing Agencies",
    //   text: "Campaigns, lead gen & reporting.",
    // },
    // {
    //   id: 14,
    //   icon: Users,
    //   heading: "Recruitment & HR",
    //   text: "Candidate screening and interview scheduling.",
    // },
    // {
    //   id: 15,
    //   icon: Utensils,
    //   heading: "Food & Restaurants",
    //   text: "Orders, reservations, and delivery tracking.",
    // },
  ];
  return (
    <div className="px-28 py-20 space-y-10 bg-[#8D27FF33]">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
        viewport={{ amount: 0.3 }}
        className="text-5xl text-[#8C25FF] font-bold text-center mb-6"
      >
        Industries We Empower with AI
      </motion.h2>
      <p className="text-base text-[#000000] text-center mb-16">
        From ecommerce to healthcare, 99X AI Chatbot adapts to every industry —
        delivering faster support,
        <br /> smarter automation, and better customer experiences.
      </p>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
        {data.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              className="px-6 py-6 shadow-[0_0_25px_#8D27FF4D] rounded-3xl bg-white flex items-center flex-col space-y-4"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 1.1 }}
            >
              <Icon className="w-16 h-16 p-4 text-white rounded-full bg-[#8C25FF] mt-4" />
              <div className="text-center">
                <h4 className="text-base font-medium text-[#000000] mb-3">
                  {item.heading}
                </h4>
                <p className="text-[#000000] text-xs">{item.text}</p>
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

export default Industries;
