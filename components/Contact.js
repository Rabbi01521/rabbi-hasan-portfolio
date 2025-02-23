"use client";

import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

export default function Contact() {
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const inputVariants = {
    focus: { scale: 1.02, borderColor: '#00A3E0', boxShadow: '0 0 10px rgba(0, 163, 224, 0.5)', transition: { duration: 0.3 } },
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-20 bg-[#0F1419] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,111,97,0.2),transparent_70%)] opacity-50" />
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00A3E0] to-[#FF6F61]"
      >
        Get in Touch
      </motion.h2>
      <div className="max-w-lg mx-auto px-4">
        <motion.form
          initial="hidden"
          whileInView="visible"
          variants={formVariants}
          viewport={{ once: true }}
          className="space-y-6 bg-[#252F38]/90 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-[#00A3E0]/30 shadow-lg"
        >
          <motion.input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-[#0F1419] rounded-lg text-[#E6ECEF] border border-[#A3B1BF] focus:outline-none"
            whileFocus="focus"
            variants={inputVariants}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-[#0F1419] rounded-lg text-[#E6ECEF] border border-[#A3B1BF] focus:outline-none"
            whileFocus="focus"
            variants={inputVariants}
          />
          <motion.textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 bg-[#0F1419] rounded-lg text-[#E6ECEF] border border-[#A3B1BF] focus:outline-none"
            whileFocus="focus"
            variants={inputVariants}
          />
          <motion.button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-[#00A3E0] to-[#FF6F61] text-white rounded-lg font-medium shadow-[0_0_20px_rgba(0,163,224,0.7)] hover:shadow-[0_0_30px_rgba(255,111,97,0.7)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center space-x-6 text-[#A3B1BF]"
        >
          <a href="mailto:rabbihasan0113@gmail.com" className="hover:text-[#00A3E0] transition duration-300">
            <FaEnvelope size={24} />
          </a>
          <a href="tel:01521569967" className="hover:text-[#00A3E0] transition duration-300">
            <FaPhone size={24} />
          </a>
          <a href="[Your LinkedIn URL]" className="hover:text-[#00A3E0] transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="[Your GitHub URL]" className="hover:text-[#00A3E0] transition duration-300">
            <FaGithub size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}