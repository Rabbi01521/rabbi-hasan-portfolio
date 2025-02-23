"use client";

import { motion } from 'framer-motion';

export default function Education() {
  const education = [
    {
      period: '2016 - 2021',
      degree: 'Bachelor of Science (BSc)',
      major: 'Computer Science and Engineering',
      institution: 'East West University, Dhaka, Bangladesh',
    },
    {
      period: '03/2023 - 07/2023',
      degree: 'SQA and Cyber Security Course',
      major: 'Software Quality Assurance',
      institution: 'IT Training BD, Dhaka, Bangladesh',
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <section
      id="education"
      className="py-12 sm:py-20 bg-gradient-to-br from-[#1C2526] to-[#0F1419] relative"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00A3E0] to-[#FF6F61]"
      >
        Education & Training
      </motion.h2>
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true }}
            className="bg-[#252F38]/80 backdrop-blur-md p-6 rounded-xl border border-[#00A3E0]/30 shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#E6ECEF]">{edu.degree}</h3>
            <p className="text-lg text-[#00A3E0]">{edu.major}</p>
            <p className="text-sm sm:text-base text-[#A3B1BF] mt-2">{edu.institution}</p>
            <p className="text-sm text-[#FF6F61] mt-1">{edu.period}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}