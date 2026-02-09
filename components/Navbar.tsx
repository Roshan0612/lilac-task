"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <header className="py-6 bg-[#EAE4DC] text-black">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">

        {/* Mobile Hamburger */}
        <motion.button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 border-2 border-[#1F3A1F] text-[#1F3A1F] hover:bg-[#1F3A1F] hover:text-white transition"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xl leading-none">{isOpen ? "×" : "☰"}</span>
        </motion.button>

        {/* Logo */}
        <motion.div 
          className="text-sm tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
           Lilac Template
        </motion.div>

        {/* Right Links */}
        <nav className="hidden md:flex items-center space-x-10 text-sm uppercase tracking-wide">
          {['Blog', 'Contact'].map((link, i) => (
            <motion.a 
              key={link}
              href={link === 'Blog' ? '/blog' : '/contact'}
              className="hover:opacity-70 transition"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link}
            </motion.a>
          ))}
        </nav>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 top-[80px] bg-[#EAE4DC] flex items-center justify-center z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-8 text-center text-lg uppercase tracking-wide w-full">
              {['Blog', 'Contact'].map((link, i) => (
                <motion.a 
                  key={link}
                  href={link === 'Blog' ? '/blog' : '/contact'}
                  className="hover:opacity-70 transition"
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
