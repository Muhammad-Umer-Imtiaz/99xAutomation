"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      id: 1,
      img: "/testimonial1.png",
      comment:
        "We integrated 99X into our healthcare portal and it has completely transformed patient engagement.",
      name: "Dr. James Turner",
      position: "CTO, MediCare Systems",
    },
    {
      id: 2,
      img: "/testimonial2.png",
      comment:
        "99X AI chatbot helped us reduce support response time by 70%. The automation is seamless and our customers love the quick replies.",
      name: "Sarah Ahmed",
      position: "Marketing Manager, ShopEase",
    },
    {
      id: 3,
      img: "/testimonial3.png",
      comment:
        "With 99X automation, our HR team saves hours every week. Candidate screening and interview scheduling is now fully automated.",
      name: "Ravi Kumar",
      position: "HR Director, TalentBridge",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      comment:
        "99X has revolutionized our customer service operations. The AI understands context perfectly and handles complex queries with ease.",
      name: "Michael Chen",
      position: "Operations Director, TechFlow",
    },
  ];

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + data.length) % data.length;
      visible.push({ ...data[index], slot: i });
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  const goToSlide = (index: number) => setCurrentIndex(index);

  return (
    <div className="min-h-screen bg-white py-10 md:py-20 px-4 md:px-24 flex flex-col justify-center">
      {/* Heading */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
        viewport={{ amount: 0.3 }}
        className="text-3xl md:text-5xl text-[#8C25FF] font-bold text-center mb-10"
      >
        What our clients say about 99X
      </motion.h2>

      {/* Testimonials */}
      <div className="relative overflow-hidden md:overflow-visible flex flex-col items-center">
        <div className="flex items-end justify-center md:justify-between gap-6 mb-12 px-4">
          <AnimatePresence mode="popLayout">
            {visibleTestimonials.map((testimonial) => {
              const slot = testimonial.slot;

              let bgColor, height, opacity, zIndex, display;
              if (slot === -1) {
                bgColor = "bg-[#C28CFF]";
                height = "380px";
                opacity = 0.8;
                zIndex = 1;
                display = "hidden md:block";
              } else if (slot === 0) {
                bgColor = "bg-[#8D27FF]";
                height = "430px"; // center one slightly taller
                opacity = 1;
                zIndex = 3;
                display = "block";
              } else {
                bgColor = "bg-[#5A00BF]";
                height = "380px";
                opacity = 0.8;
                zIndex = 1;
                display = "hidden md:block";
              }

              return (
                <motion.div
                  key={`${testimonial.id}-${slot}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
                  className={`${bgColor} ${display} rounded-[30px] p-6 md:p-8 relative shadow-xl flex flex-col justify-end`}
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height,
                    zIndex,
                  }}
                >
                  {/* Avatar */}
                  <div className="absolute z-50 top-20 md:top-14 left-1/2 -translate-x-1/2">
                    <div
                      className={`w-28 h-28 rounded-full overflow-hidden border-8 md:border-10 shadow-lg 
      ${
        slot === -1
          ? "border-[#C28CFF]"
          : slot === 0
          ? "border-[#8D27FF]"
          : "border-[#5A00BF]"
      }`}
                    >
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* White Box */}
                  <div className="bg-white rounded-2xl p-6 md:p-8 mt-12 md:mt-16 relative flex flex-col justify-evenly min-h-[260px]">
                    <div className="absolute -top-1 left-4 md:left-6 text-purple-200 text-8xl md:text-9xl  opacity-30">
                      “
                    </div>

                    <p
                      className="text-gray-800 text-sm md:text-base leading-relaxed mb-2 md:mb-6 
             relative z-10 text-center pt-8 md:pt-12 line-clamp-3"
                    >
                      {testimonial.comment}
                    </p>

                    <div className="text-center">
                      <p className="text-gray-900 font-bold text-base md:text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-600 text-xs md:text-sm mt-1">
                        {testimonial.position}
                      </p>
                    </div>

                    <div className="absolute -bottom-10 md:-bottom-16 right-4 md:right-6 text-purple-200 text-8xl md:text-9xl  opacity-30">
                      ”
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-5 h-5 bg-[#8C25FF]"
                  : "w-4 h-4 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
