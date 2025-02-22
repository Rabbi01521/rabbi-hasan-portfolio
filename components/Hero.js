"use client";

import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

export default function Hero() {
  const [text] = useTypewriter({
    words: ['SQA Engineer', 'Tech Audit Specialist', 'Automation Expert'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 bg-gradient-to-b from-[#0F1419] to-[#1C2526]">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#00A3E0" intensity={1.5} />
          <Sphere args={[1.5, 64, 64]} position={[0, 0, 0]}>
            <MeshDistortMaterial
              color="#00A3E0"
              attach="material"
              distort={0.5}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="z-10 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-white drop-shadow-lg"
        >
          Md. Rabbi Hasan
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-4xl accent-primary mt-4 font-semibold"
        >
          {text}
          <Cursor cursorColor="#00A3E0" />
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8, type: 'spring' }}
          className="mt-6 sm:mt-8"
        >
          <a
            href="#projects"
            className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-[#00A3E0] to-[#FF6F61] text-white rounded-full hover:scale-105 transition-transform duration-300 text-sm sm:text-base font-medium shadow-[0_0_15px_rgba(0,163,224,0.7)]"
          >
            Explore My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}