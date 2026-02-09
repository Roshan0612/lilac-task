"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SplitOne() {
  const bulletVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex flex-col md:flex-row"
    >
      {/* Left Image - Mobile Top / Tablet+ 50% */}
      <motion.div 
        className="w-full md:w-1/2 relative h-[60vw] md:h-auto md:min-h-[700px]"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Image
          src="/image/Dr. Maya Reynolds.png"
          alt="Therapy"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Right Text Section - Mobile Full / Tablet+ 50% */}
      <div className="w-full md:w-1/2 bg-[#D4C4D8] text-[#1F3A1F] flex flex-col">
        <div className="p-[6vw] md:p-[4vw] lg:p-[6vw] flex flex-col justify-center flex-1">
          <div className="max-w-full md:max-w-[95%]">
            {/* Main Heading */}
            <motion.h2 
              className="text-[7vw] md:text-[3.2vw] lg:text-[3.5vw] font-semibold leading-[1.2] mb-[4vw] md:mb-[2vw]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              You don't have to do this all <em className="italic font-normal">alone.</em>
            </motion.h2>

            {/* Subheading */}
            <motion.p 
              className="text-[3.8vw] md:text-[1.5vw] lg:text-[1.1vw] mb-[3vw] md:mb-[1.5vw] font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              If you are facing any of these, there's hope:
            </motion.p>

            {/* Bullet List */}
            <ul className="space-y-[2.5vw] md:space-y-[1.2vw] mb-[4vw] md:mb-[2vw] text-[3.5vw] md:text-[1.3vw] lg:text-[1vw]">
              {[
                "Persistent feelings of sadness or hopelessness",
                "Trouble focusing or making decisions",
                "Difficulty maintaining relationships",
                "Feeling constantly exhausted or unmotivated",
                "A pervasive sense of being overwhelmed"
              ].map((bullet, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={bulletVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  • {bullet}
                </motion.li>
              ))}
            </ul>

            {/* Closing Text */}
            <motion.p 
              className="text-[3.8vw] md:text-[1.4vw] lg:text-[1.1vw]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              With empathy and guidance, we'll work together to navigate the challenges life throws your way.
            </motion.p>
          </div>
        </div>

        {/* Work With Me Button - Full Width */}
        <motion.button 
          className="w-full h-[56px] md:h-[70px] lg:h-[80px] bg-[#1F3A1F] text-white text-[3.4vw] md:text-[1.4vw] lg:text-[1.2vw] font-semibold uppercase tracking-[0.15em] hover:bg-[#2d5a2d] transition duration-300 flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Work with me →
        </motion.button>
      </div>
    </motion.section>
  );
}
