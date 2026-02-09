"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#EAE4DC] text-[#1F3A1F] min-h-screen lg:min-h-screen flex items-center py-[8vw] lg:py-0"
    >
      <motion.div 
        className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-[4vw] lg:gap-[6vw] px-0 lg:px-0 lg:pl-[6vw] lg:pr-[6vw]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Image */}
        <motion.div 
          className="relative w-[65vw] h-[80vw] lg:w-[30vw] lg:h-[38vw] lg:max-w-[420px] lg:max-h-[520px] rounded-t-full overflow-hidden flex-shrink-0"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Image
            src="/image/Dr. Maya Reynolds.png"
            alt="Therapy"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Content Right Side */}
        <motion.div 
          className="flex flex-col items-center lg:items-center justify-center gap-[4vw] lg:gap-[2.5vw] w-full lg:w-auto max-w-[600px] px-[4vw] lg:px-0"
          variants={containerVariants}
        >

          <motion.h1 
            className="w-full text-[6.5vw] lg:text-[70px] leading-[1.2] lg:leading-[1.15] font-semibold text-center"
            variants={itemVariants}
          >
            Live your life in full bloom
          </motion.h1>

          <motion.p 
            className="w-full text-[3.8vw] lg:text-[1.2vw] text-center leading-[1.5]"
            variants={itemVariants}
          >
            Therapy for Adults in Minneapolis, MN.
          </motion.p>

          {/* Button */}
          <motion.button 
            className="px-[5vw] lg:px-[2.5vw] py-[2.8vw] lg:py-[1.2vw] border-2 border-[#1F3A1F] text-[3.2vw] lg:text-[0.95vw] uppercase tracking-[0.15em] hover:bg-[#1F3A1F] hover:text-white transition duration-300 flex items-center justify-center gap-[0.8vw] mt-[2vw] whitespace-nowrap"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(31, 58, 31, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Connect with me →
          </motion.button>

        </motion.div>
      </motion.div>
    </motion.section>
  );
}
