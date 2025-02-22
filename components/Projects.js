"use client";

import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    { title: 'Manual Testing', desc: 'Requirement analysis, test case writing, and bug reporting.' },
    { title: 'API Testing', desc: 'CRUD operations with Postman and Newman HTML reports.' },
    { title: 'Performance Testing', desc: 'Load and stress testing using JMeter.' },
    { title: 'Web Automation', desc: 'Selenium and Cypress automation for login and checkout flows.' },
  ];

  return (
    <section id="projects" className="py-12 sm:py-20 bg-[#0F1419]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Projects</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-4">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            whileHover={{ rotateY: 180 }}
            className="card-bg p-4 sm:p-6 rounded-lg shadow-lg h-40 sm:h-48 flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-semibold accent-primary">{proj.title}</h3>
              <p className="text-secondary mt-2 text-sm sm:text-base">{proj.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}