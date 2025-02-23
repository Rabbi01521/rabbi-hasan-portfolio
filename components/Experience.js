"use client";

import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      period: '10/2022 - 08/2023',
      title: 'Tech Audit Engineer',
      company: 'META, Remote, USA',
      desc: 'Conducted audits oftechnical systems, performed penetration testing, and recommended risk mitigation strategies.',
    },
    {
      period: '08/2021 - 02/2022',
      title: 'Front-end Developer Intern',
      company: 'Koyo Legal Solution, Remote, India',
      desc: 'Designed and developed responsive web pages, optimized for mobile and speed.',
    },
  ];

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <section
      id="experience"
      className="py-12 sm:py-20 bg-[#0F1419] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,163,224,0.15),transparent_70%)] opacity-50" />
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00A3E0] to-[#FF6F61]"
      >
        Experience
      </motion.h2>
      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#00A3E0]/30" />
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={timelineVariants}
            viewport={{ once: true }}
            className={`relative mb-12 ${index % 2 === 0 ? 'pr-8 sm:pr-12 text-right' : 'pl-8 sm:pl-12 text-left'}`}
          >
            <div className="bg-[#252F38]/80 backdrop-blur-md p-6 rounded-xl border border-[#00A3E0]/30 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-[#E6ECEF]">{exp.title}</h3>
              <p className="text-sm sm:text-base text-[#A3B1BF]">{exp.company}</p>
              <p className="text-sm text-[#FF6F61] mt-2">{exp.period}</p>
              <p className="text-sm sm:text-base text-[#A3B1BF] mt-2">{exp.desc}</p>
            </div>
            <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#00A3E0] rounded-full ${index % 2 === 0 ? 'right-0' : 'left-0'}`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}