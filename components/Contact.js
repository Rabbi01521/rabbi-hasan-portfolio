"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const inputVariants = {
    focus: { scale: 1.02, borderColor: '#00A3E0', boxShadow: '0 0 10px rgba(0, 163, 224, 0.5)', transition: { duration: 0.3 } },
  };

  const contactLinks = [
    { href: 'mailto:rabbihasan0113@gmail.com', icon: <FaEnvelope size={24} />, label: 'Email' },
    { href: 'tel:01521569967', icon: <FaPhone size={24} />, label: 'Phone' },
    { href: 'https://www.linkedin.com/in/rabbihasan', icon: <FaLinkedin size={24} />, label: 'LinkedIn' },
    { href: 'https://github.com/Rabbi01521', icon: <FaGithub size={24} />, label: 'GitHub' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus(''); // Clear status on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatus(result.error || 'Failed to send message.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-20 bg-[#0F1419] relative overflow-hidden"
    >
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
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          variants={formVariants}
          viewport={{ once: true }}
          className="space-y-6 bg-[#252F38]/90 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-[#00A3E0]/30 shadow-lg"
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#0F1419] rounded-lg text-[#E6ECEF] border border-[#A3B1BF] focus:outline-none"
            whileFocus="focus"
            variants={inputVariants}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#0F1419] rounded-lg text-[#E6ECEF] border border-[#A3B1BF] focus:outline-none"
            whileFocus="focus"
            variants={inputVariants}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#0F1419] rounded-lg text-[#E6ECEF] border border-[#A3B1BF] focus:outline-none"
            whileFocus="focus"
            variants={inputVariants}
          />
          <motion.button
            type="submit"
            disabled={status === 'Sending...'}
            className="w-full p-3 bg-gradient-to-r from-[#00A3E0] to-[#FF6F61] text-white rounded-lg font-medium shadow-[0_0_20px_rgba(0,163,224,0.7)] hover:shadow-[0_0_30px_rgba(255,111,97,0.7)] transition-all duration-300 disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {status === 'Sending...' ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
        {status && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-4 text-center ${status.includes('success') ? 'text-[#00A3E0]' : 'text-[#FF6F61]'}`}
          >
            {status}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center space-x-6 text-[#A3B1BF]"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00A3E0] transition duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}