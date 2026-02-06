"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SplitOne() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex flex-col md:flex-row"
    >
      {/* Left Image - Mobile Top / Tablet+ 50% */}
      <div className="w-full md:w-1/2 relative h-[60vw] md:h-auto md:min-h-[700px]">
        <Image
          src="/image/Dr. Maya Reynolds.png"
          alt="Therapy"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Text Section - Mobile Full / Tablet+ 50% */}
      <div className="w-full md:w-1/2 bg-[#D4C4D8] text-[#1F3A1F] flex flex-col">
        <div className="p-[6vw] md:p-[4vw] lg:p-[6vw] flex flex-col justify-center flex-1">
          <div className="max-w-full md:max-w-[95%]">
            {/* Main Heading */}
            <h2 className="text-[7vw] md:text-[3.2vw] lg:text-[3.5vw] font-semibold leading-[1.2] mb-[4vw] md:mb-[2vw]">
              You don't have to do this all <em className="italic font-normal">alone.</em>
            </h2>

            {/* Subheading */}
            <p className="text-[3.8vw] md:text-[1.5vw] lg:text-[1.1vw] mb-[3vw] md:mb-[1.5vw] font-medium">
              If you are facing any of these, there's hope:
            </p>

            {/* Bullet List */}
            <ul className="space-y-[2.5vw] md:space-y-[1.2vw] mb-[4vw] md:mb-[2vw] text-[3.5vw] md:text-[1.3vw] lg:text-[1vw]">
              <li>• Persistent feelings of sadness or hopelessness</li>
              <li>• Trouble focusing or making decisions</li>
              <li>• Difficulty maintaining relationships</li>
              <li>• Feeling constantly exhausted or unmotivated</li>
              <li>• A pervasive sense of being overwhelmed</li>
            </ul>

            {/* Closing Text */}
            <p className="text-[3.8vw] md:text-[1.4vw] lg:text-[1.1vw]">
              With empathy and guidance, we'll work together to navigate the challenges life throws your way.
            </p>
          </div>
        </div>

        {/* Work With Me Button - Full Width */}
        <button className="w-full h-[56px] md:h-[70px] lg:h-[80px] bg-[#1F3A1F] text-white text-[3.4vw] md:text-[1.4vw] lg:text-[1.2vw] font-semibold uppercase tracking-[0.15em] hover:bg-[#2d5a2d] transition duration-300 flex items-center justify-center gap-2">
          Work with me →
        </button>
      </div>
    </motion.section>
  );
}
