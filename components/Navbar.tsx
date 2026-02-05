"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-6 bg-[#EAE4DC] text-black">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 border-2 border-[#1F3A1F] text-[#1F3A1F] hover:bg-[#1F3A1F] hover:text-white transition"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="text-xl leading-none">{isOpen ? "×" : "☰"}</span>
        </button>

        {/* Logo */}
        <div className="text-sm tracking-[0.3em] uppercase">
           Lilac Template
 
        </div>

        {/* Right Links */}
        <nav className="hidden md:flex items-center space-x-10 text-sm uppercase tracking-wide">
          <a href="/blog" className="hover:opacity-70 transition">
            Blog
          </a>
          <a href="/contact" className="hover:opacity-70 transition">
            Contact
          </a>
        </nav>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[80px] bg-[#EAE4DC] flex items-center justify-center z-50">
          <nav className="flex flex-col gap-8 text-center text-lg uppercase tracking-wide">
            <a href="/blog" className="hover:opacity-70 transition" onClick={() => setIsOpen(false)}>
              Blog
            </a>
            <a href="/contact" className="hover:opacity-70 transition" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
