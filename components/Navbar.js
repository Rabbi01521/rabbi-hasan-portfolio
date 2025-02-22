"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const variants = {
    open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav className="fixed top-0 w-full bg-[#0F1419]/90 backdrop-blur-lg z-20 py-4 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl sm:text-3xl font-extrabold accent-primary bg-gradient-to-r from-[#00A3E0] to-[#FF6F61] bg-clip-text text-transparent">
          Rabbi
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium text-[#E6ECEF] hover:text-[#00A3E0] transition duration-300 relative group"
            >
              {item.label}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#00A3E0] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="sm:hidden absolute top-16 left-0 w-full bg-[#0F1419] overflow-hidden"
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-[#E6ECEF] hover:text-[#00A3E0] transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}