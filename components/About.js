"use client";

import { motion } from 'framer-motion';

export default function About() {
  const aboutVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="about"
      className="py-12 sm:py-20 bg-gradient-to-br from-[#1C2526] to-[#0F1419] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,163,224,0.15),transparent_70%)] opacity-50" />
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00A3E0] to-[#FF6F61]"
      >
        About Me
      </motion.h2>
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={aboutVariants}
          viewport={{ once: true }}
          className="bg-[#252F38]/80 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-[#00A3E0]/30 shadow-lg"
        >
          <p className="text-base sm:text-lg text-[#A3B1BF] mb-6">
            I’m Md. Rabbi Hasan, an SQA Engineer with a knack for ensuring tech excellence. With a robust background in software quality assurance, technical auditing, and front-end development, I specialize in crafting secure, scalable, and user-friendly solutions. My journey spans working with global tech giants like META to hands-on internships, blending precision with innovation.
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-[#E6ECEF] mb-4">Core Strengths</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-[#A3B1BF]">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#00A3E0] rounded-full mr-2"></span> Technical Auditing
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#00A3E0] rounded-full mr-2"></span> Test Automation
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg([&00A3E0] rounded-full mr-2"></span> Vulnerability Assessment
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#00A3E0] rounded-full mr-2"></span> Responsive Web Design
            </li>
          </ul>
          <h3 className="text-xl sm:text-2xl font-bold text-[#E6ECEF] mt-6 mb-4">Passions</h3>
          <p className="text-sm sm:text-base text-[#A3B1BF]">
            Beyond code, I’m driven by a love for problem-solving, exploring emerging tech trends, and mentoring peers. When I’m not testing systems, you’ll find me diving into open-source projects or sketching creative designs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}