"use client";

import { motion } from "framer-motion";

const backgroundItems = [
  {
    title: "Education",
    content: ""
  },
  {
    title: "Licensure",
    content: ""
  },
  {
    title: "Certifications",
    content: ""
  }
];

export default function ProfessionalBackground() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#EAE4DC] text-[#1F3A1F] py-[10vw] md:py-[8vw] lg:py-[6vw]"
    >
      <div className="max-w-[1200px] mx-auto px-[6vw]">
        {/* Heading */}
        <h2 className="text-[7vw] md:text-[4vw] lg:text-[3.6vw] font-semibold text-center mb-[6vw] md:mb-[4vw] lg:mb-[3vw]">
          My Professional Background
        </h2>

        {/* Accordion */}
        <div className="max-w-full md:max-w-[900px] lg:max-w-[800px] mx-auto border-t border-[#1F3A1F]">
          {backgroundItems.map((item) => (
            <details key={item.title} className="border-b border-[#1F3A1F] group">
              <summary className="list-none cursor-pointer flex items-center justify-between py-[3.5vw] md:py-[2vw] lg:py-[1.5vw] text-[4.2vw] md:text-[2vw] lg:text-[1.8vw] font-medium hover:opacity-70 transition">
                <span>{item.title}</span>
                <span className="text-[4.5vw] md:text-[2.2vw] lg:text-[2vw] leading-none">+</span>
              </summary>
              {item.content ? (
                <div className="pb-[3.5vw] md:pb-[2vw] lg:pb-[1.5vw] text-[3.6vw] md:text-[1.4vw] lg:text-[1.05vw] leading-[1.6]">
                  {item.content}
                </div>
              ) : null}
            </details>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
