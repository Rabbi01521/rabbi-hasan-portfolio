"use client";

import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'Manual Testing',
      desc: 'Performed requirement analysis, wrote test cases, executed tests, and reported bugs with detailed metrics.',
    },
    {
      title: 'API Testing',
      desc: 'Implemented CRUD operations using Postman, generated HTML reports with Newman, and validated endpoints.',
    },
    {
      title: 'Performance Testing',
      desc: 'Conducted load and stress testing with JMeter, analyzing system scalability and bottlenecks.',
    },
    {
      title: 'Web Automation',
      desc: 'Developed automation scripts for login, cart, and checkout flows using Selenium and Cypress.',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
    hover: {
      y: -10,
      boxShadow: '0 15px 30px rgba(0, 163, 224, 0.5)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="projects"
      className="py-12 sm:py-20 bg-gradient-to-br from-[#0F1419] to-[#1C2526] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,163,224,0.15),transparent_70%)] opacity-50" />
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00A3E0] to-[#FF6F61]"
      >
        My Projects
      </motion.h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            variants={cardVariants}
            viewport={{ once: true }}
            className="bg-[#252F38]/90 backdrop-blur-md p-6 rounded-xl border border-[#00A3E0]/30 shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#E6ECEF] mb-2">{project.title}</h3>
            <p className="text-sm sm:text-base text-[#A3B1BF]">{project.desc}</p>
            <motion.div
              className="mt-4 h-1 bg-gradient-to-r from-[#00A3E0] to-[#FF6F61]"
              initial={{ width: 0 }}
              whileInView={{ width: '50%' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}