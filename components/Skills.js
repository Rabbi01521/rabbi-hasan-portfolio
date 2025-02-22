"use client";

import { OrbitControls, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Suspense, useState } from 'react';

export default function Skills() {
  const skills = [
    'Manual Testing', 'API Testing', 'Postman', 'JMeter', 'Selenium',
    'Cypress', 'Performance Testing', 'Agile', 'GitHub', 'JavaScript',
    'React', 'MySQL', 'MongoDB', 'Linux', 'Python',
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" className="py-12 sm:py-20 section-bg bg-gradient-to-br from-[#1C2526] to-[#0F1419]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-white bg-gradient-to-r from-[#00A3E0] to-[#FF6F61] bg-clip-text text-transparent">
        Technical Skills
      </h2>
      <div className="h-[300px] sm:h-[400px] md:h-[600px] max-w-5xl mx-auto relative">
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.7} />
            <pointLight position={[10, 10, 10]} color="#00A3E0" intensity={2} />
            {skills.map((skill, index) => (
              <Text
                key={index}
                position={[
                  Math.sin(index * 0.4) * 5,
                  Math.cos(index * 0.4) * 5,
                  Math.sin(index * 0.2) * 5,
                ]}
                fontSize={window.innerWidth < 640 ? 0.4 : 0.6}
                color={hovered === index ? '#FF6F61' : '#00A3E0'}
                anchorX="center"
                anchorY="middle"
                onPointerOver={() => setHovered(index)}
                onPointerOut={() => setHovered(null)}
                font="/fonts/Inter-Bold.ttf" // Path to custom font
              >
                {skill}
              </Text>
            ))}
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
          </Suspense>
        </Canvas>
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered !== null ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ background: 'radial-gradient(circle, rgba(0,163,224,0.3), transparent)' }}
        />
      </div>
    </section>
  );
}