"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex flex-col md:flex-row bg-[#EAE4DC]"
    >
      {/* Images Section - Mobile Top / Tablet+ Right */}
      <div className="w-full md:w-1/2 relative h-[95vw] md:h-auto md:min-h-[600px] flex items-center justify-center md:pr-[24px] lg:pr-[80px] order-first md:order-last">
        {/* Image Stack Wrapper */}
        <div className="relative">
          {/* Large Arch Image */}
          <div className="relative w-[65vw] h-[85vw] md:w-[28vw] md:h-[38vw] lg:w-[450px] lg:h-[600px] rounded-t-full overflow-hidden">
            <Image
              src="/image/Dr. Maya Reynolds.png"
              alt="Lilac flowers"
              fill
              className="object-cover"
            />
          </div>

          {/* Small Circular Image - Anchored to Arch */}
          <div className="absolute bottom-0 right-0 translate-x-[18%] translate-y-[18%] md:translate-x-[20%] md:translate-y-[20%] w-[50vw] h-[50vw] md:w-[18vw] md:h-[18vw] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border-[#EAE4DC]">
            <Image
              src="/image/Dr. Maya Reynolds.png"
              alt="White flowers"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Text Section - Mobile Bottom / Tablet+ Left */}
      <div className="w-full md:w-1/2 p-[8vw] md:p-[5vw] lg:p-[6vw] md:pl-[clamp(20px,6vw,100px)] flex flex-col justify-center order-last md:order-first">
        <div className="max-w-full md:max-w-[85%]">
          {/* Heading */}
          <h2 className="text-[7vw] md:text-[4vw] lg:text-[5vw] font-semibold leading-[1.2] mb-[4vw] md:mb-[2.5vw] text-[#1F3A1F]">
            Hi, I'm Lilac.
          </h2>

          {/* Description */}
          <p className="text-[3.8vw] md:text-[1.6vw] lg:text-[1.1vw] leading-[1.6] mb-[6vw] md:mb-[3vw] text-[#1F3A1F]">
            I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way.
          </p>
        </div>

        {/* Let's Chat Button */}
        <div className="max-w-full md:max-w-[85%] flex justify-center md:justify-start items-center">
          <button className="px-[6vw] md:px-[2.8vw] lg:px-[2.5vw] py-[2.5vw] md:py-[1.4vw] lg:py-[1.2vw] border-2 border-[#1F3A1F] text-[3.2vw] md:text-[1.4vw] lg:text-[0.95vw] uppercase tracking-[0.15em] hover:bg-[#1F3A1F] hover:text-white transition duration-300 text-[#1F3A1F]">
            Let's chat →
          </button>
        </div>
      </div>

      
    </motion.section>
  );
}
