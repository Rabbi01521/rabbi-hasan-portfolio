"use client";

import { Box, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

export default function Hero() {
  const [text] = useTypewriter({
    words: ['SQA Engineer', 'Quality Architect', 'Code Defender'],
    loop: true,
    delaySpeed: 2000,
  });

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 1, duration: 0.8, type: 'spring', stiffness: 120 } },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center relative bg-gradient-to-br from-[#0F1419] to-[#1C2526] overflow-hidden"
    >
      {/* Left Side: Three.js Model */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} color="#00A3E0" intensity={2.5} />
          <pointLight position={[-10, -10, -10]} color="#FF6F61" intensity={2} />

          {/* Central Wireframe Cube */}
          <Box args={[4, 4, 4]} position={[0, 0, 0]} rotation={[0.5, 0.5, 0]}>
            <meshBasicMaterial color="#00A3E0" wireframe opacity={0.4} transparent />
          </Box>

          {/* Orbiting Particles */}
          {Array.from({ length: 6 }).map((_, i) => (
            <Sphere
              key={i}
              args={[0.15, 32, 32]}
              position={[
                Math.sin(i * 1.047) * 5, // Spread in a circle
                Math.cos(i * 1.047) * 5,
                Math.sin(i * 0.5) * 2,
              ]}
            >
              <meshStandardMaterial color={i % 2 === 0 ? '#00A3E0' : '#FF6F61'} />
            </Sphere>
          ))}

          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
        </Canvas>
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 md:py-0">
        <div className="text-center md:text-left max-w-lg">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,163,224,0.8)]"
            style={{ textShadow: '0 0 15px rgba(0, 163, 224, 0.6)' }}
          >
            Md. Rabbi Hasan
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#00A3E0] mt-4 font-semibold tracking-wide"
          >
            {text}
            <Cursor cursorColor="#00A3E0" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-sm sm:text-base md:text-lg text-[#A3B1BF] mt-6"
          >
            Crafting flawless software through rigorous testing, automation, and quality assurance. I turn bugs into opportunities and code into perfection.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            className="mt-8"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-[#00A3E0] to-[#FF6F61] text-white rounded-full text-base sm:text-lg font-medium shadow-[0_0_20px_rgba(0,163,224,0.8)] hover:shadow-[0_0_30px_rgba(255,111,97,0.8)] hover:scale-105 transition-all duration-300"
            >
              Explore My Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,163,224,0.15),transparent_70%)] opacity-50 z-[-1]" />
    </section>
  );
}