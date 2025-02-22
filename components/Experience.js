"use client";

import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: 'Tech Audit Engineer',
      company: 'META',
      period: '10/2022 - 08/2023',
      responsibilities: [
        'Conducted audits of technical systems and infrastructure.',
        'Performed penetration testing and vulnerability assessments.',
        'Recommended risk mitigation strategies.',
      ],
    },
    {
      title: 'Front-end Developer Intern',
      company: 'Koyo Legal Solution',
      period: '08/2021 - 02/2022',
      responsibilities: [
        'Designed and developed responsive web pages.',
        'Optimized sites for mobile and speed.',
        'Implemented reusable code.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-20 bg-[#0F1419]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Experience</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="card-bg p-4 sm:p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-semibold accent-primary">{exp.title}</h3>
            <p className="text-base sm:text-lg">{exp.company}</p>
            <p className="text-xs sm:text-sm text-secondary">{exp.period}</p>
            <ul className="mt-3 sm:mt-4 space-y-2 text-sm sm:text-base">
              {exp.responsibilities.map((resp, i) => (
                <li key={i} className="text-secondary">• {resp}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}