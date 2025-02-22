"use client";

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-20 section-bg">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Contact Me</h2>
      <div className="max-w-lg mx-auto px-4">
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 sm:space-y-6"
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 card-bg rounded-lg text-white border border-[#A3B1BF] focus:border-[#00A3E0] outline-none text-sm sm:text-base"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 card-bg rounded-lg text-white border border-[#A3B1BF] focus:border-[#00A3E0] outline-none text-sm sm:text-base"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 card-bg rounded-lg text-white border border-[#A3B1BF] focus:border-[#00A3E0] outline-none text-sm sm:text-base"
          />
          <button
            type="submit"
            className="w-full p-3 bg-[#00A3E0] text-white rounded-lg hover:bg-[#FF6F61] transition duration-300 text-sm sm:text-base"
          >
            Send Message
          </button>
        </motion.form>
        <div className="mt-6 sm:mt-8 text-center text-secondary text-sm sm:text-base">
          <p>Email: rabbihasan0113@gmail.com</p>
          <p>Phone: 01521569967</p>
          <p>LinkedIn: [Your LinkedIn URL]</p>
          <p>GitHub: [Your GitHub URL]</p>
        </div>
      </div>
    </section>
  );
}