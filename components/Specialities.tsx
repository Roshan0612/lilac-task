"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Specialities() {
  const specialties = [
    {
      id: 1,
      title: "Self-Esteem",
      description: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
      image: "/image/Dr. Maya Reynolds.png"
    },
    {
      id: 2,
      title: "Relationships",
      description: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
      image: "/image/Dr. Maya Reynolds.png"
    },
    {
      id: 3,
      title: "Burnout",
      description: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
      image: "/image/Dr. Maya Reynolds.png"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#EAE4DC] text-[#1F3A1F] py-[10vw] lg:py-[6vw]"
    >
      <div className="w-full px-[6vw]">
        {/* Heading */}
        <h2 className="text-[7vw] lg:text-[3.5vw] font-semibold text-center mb-[8vw] lg:mb-[4vw]">
          My Specialties
        </h2>

        {/* 3-Column Grid - Keep 3 cols until very small screens */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[4vw] sm:gap-[1.5vw]">
          {specialties.map((specialty) => (
            <div
              key={specialty.id}
              className="border-2 border-[#1F3A1F] bg-[#f5f5f0] p-[5vw] sm:p-[1.5vw] flex flex-col h-full"
            >
              {/* Title */}
              <h3 className="text-[5vw] sm:text-[1.2vw] font-semibold mb-[3vw] sm:mb-[1vw] text-[#1F3A1F]">
                {specialty.title}
              </h3>

              {/* Description */}
              <p className="text-[3.5vw] sm:text-[0.8vw] leading-[1.6] mb-[5vw] sm:mb-[1.5vw] flex-1 text-[#1F3A1F]">
                {specialty.description}
              </p>

              {/* Circular Image */}
              <div className="w-full h-[auto] relative mx-auto flex justify-center">
                <div className="relative w-[50vw] sm:w-[18vw] h-[50vw] sm:h-[18vw] rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={specialty.image}
                    alt={specialty.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
