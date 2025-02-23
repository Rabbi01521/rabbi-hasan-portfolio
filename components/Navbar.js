"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const variants = {
    open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav className="fixed top-0 w-full bg-[#0F1419]/90 backdrop-blur-lg z-20 py-4 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00A3E0] to-[#FF6F61]">
          Rabbi
        </Link>
        <button
          className="sm:hidden text-[#E6ECEF] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
        <div className="hidden sm:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className={`text-lg font-medium transition duration-300 relative ${
                pathname === item.href || (item.href === '#about' && pathname === '/')
                  ? 'text-[#00A3E0] after:w-full after:bg-[#00A3E0]'
                  : 'text-[#E6ECEF] hover:text-[#00A3E0]'
              } after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-[#00A3E0] after:transition-all after:duration-300 hover:after:w-full`}
            >
              {item.label}
            </Link>
          ))}
        </div>
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
                onClick={(e) => handleScroll(e, item.href)}
                className={`text-lg font-medium transition duration-300 ${
                  pathname === item.href || (item.href === '#about' && pathname === '/')
                    ? 'text-[#00A3E0]'
                    : 'text-[#E6ECEF] hover:text-[#00A3E0]'
                }`}
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