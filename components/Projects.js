"use client";

import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'Manual Testing',
      desc: 'Performed requirement analysis, wrote test cases, executed tests, and reported bugs with detailed metrics.',
      link: 'https://github.com/Rabbi01521/manual-testing-demo', // Replace with actual link
    },
    {
      title: 'API Testing',
      desc: 'Implemented CRUD operations using Postman, generated HTML reports with Newman, and validated endpoints.',
      link: 'https://github.com/Rabbi01521/api-testing-demo', // Replace with actual link
    },
    {
      title: 'Performance Testing',
      desc: 'Conducted load and stress testing with JMeter, analyzing system scalability and bottlenecks.',
      link: 'https://github.com/Rabbi01521/performance-testing-demo', // Replace with actual link
    },
    {
      title: 'Web Automation',
      desc: 'Developed automation scripts for login, cart, and checkout flows using Selenium and Cypress.',
      link: 'https://github.com/Rabbi01521/web-automation-demo', // Replace with actual link
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
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            variants={cardVariants}
            viewport={{ once: true }}
            className="bg-[#252F38]/90 backdrop-blur-md p-6 rounded-xl border border-[#00A3E0]/30 shadow-lg flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#E6ECEF] mb-2">{project.title}</h3>
              <p className="text-sm sm:text-base text-[#A3B1BF]">{project.desc}</p>
            </div>
            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#00A3E0] to-[#FF6F61] text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300"
              >
                View Project
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}