"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Skills() {
  const skills = [
    'Manual Testing', 'API Testing', 'Postman', 'JMeter', 'Selenium',
    'Cypress', 'Performance Testing', 'Agile', 'GitHub', 'JavaScript',
    'React', 'MySQL', 'MongoDB', 'Linux', 'Python',
  ];

  const [hovered, setHovered] = useState(null);

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
    hover: {
      scale: 1.05,
      rotateX: 5,
      rotateY: 5,
      boxShadow: '0 0 20px rgba(0, 163, 224, 0.7)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="skills"
      className="py-12 sm:py-20 bg-gradient-to-br from-[#0F1419] to-[#1C2526] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,163,224,0.2),transparent_70%)] opacity-50" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00A3E0] to-[#FF6F61]"
      >
        My Technical Arsenal
      </motion.h2>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            variants={cardVariants}
            viewport={{ once: true }}
            className="relative bg-[#252F38]/80 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-[#00A3E0]/30 hover:border-[#FF6F61] transition-colors duration-300 cursor-pointer"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Skill Text */}
            <h3 className="text-lg sm:text-xl font-bold text-[#E6ECEF] text-center">
              {skill}
            </h3>

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00A3E0]/20 to-[#FF6F61]/20 opacity-0"
              animate={{ opacity: hovered === index ? 0.8 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}