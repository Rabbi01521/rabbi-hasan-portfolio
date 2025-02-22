"use client";

import { motion } from 'framer-motion';

export default function About() {
  const timelineItems = [
    { year: '2022-2023', title: 'Tech Audit Engineer at META', desc: 'Conducted technical audits and security assessments.' },
    { year: '2021-2022', title: 'Front-end Developer Internship at Koyo', desc: 'Developed responsive web designs.' },
    { year: '2016-2021', title: 'BSc at East West University', desc: 'Computer Science and Engineering.' },
  ];

  return (
    <section id="about" className="py-12 sm:py-20 section-bg">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">About Me</h2>
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-base sm:text-lg text-secondary mb-6 sm:mb-8">
          I’m an SQA Engineer with a passion for ensuring quality in tech systems. I thrive in dynamic environments, applying constructive solutions to enhance security and performance.
        </p>
        <div className="space-y-6 sm:space-y-8">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col sm:flex-row items-start"
            >
              <div className="w-full sm:w-1/4 accent-primary font-bold mb-2 sm:mb-0">{item.year}</div>
              <div className="w-full sm:w-3/4">
                <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                <p className="text-secondary text-sm sm:text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}