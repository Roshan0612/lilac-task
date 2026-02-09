"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SplitSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#1F3A1F] text-white"
    >
      <div className="w-full flex flex-col lg:flex-row">

        {/* Right Image Section - Mobile Top / Desktop 50% */}
        <motion.div 
          className="w-full lg:w-1/2 h-[50vw] lg:h-[600px] relative order-first lg:order-last"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Image
            src="/image/Dr. Maya Reynolds.png"
            alt="Split Section Image"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Left Text Section - Mobile Full / Desktop 50% */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="p-[6vw] pb-0 flex flex-col items-center lg:items-start justify-center flex-1">
            <div className="max-w-[100%] lg:max-w-[90%]">
              <motion.h2 
                className="text-[7vw] lg:text-[3.5vw] font-semibold leading-[1.2] mb-[4vw] lg:mb-[2vw] text-center lg:text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                Live a fulfilling life.
              </motion.h2>
              
              <motion.p 
                className="text-[3.8vw] lg:text-[1.1vw] leading-[1.6] mb-[2vw] lg:mb-[2vw] text-center lg:text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              >
                Life can be challenging—especially when you're trying to balance your personal and professional life. 
                <br/>
                It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
              </motion.p>
            </div>
          </div>

          {/* Get in Touch Button - Full Width */}
          <motion.button 
            className="w-full h-[50px] lg:h-[75px] bg-[#1F3A1F] text-white text-[3.5vw] lg:text-[1.2vw] font-semibold uppercase tracking-[0.15em] hover:bg-[#2d5a2d] transition duration-300 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02, boxShadow: "inset 0 0 20px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Get in Touch →
          </motion.button>
        </div>

      </div>
    </motion.section>
  );
}
