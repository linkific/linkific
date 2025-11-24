'use client';

import { motion } from 'framer-motion';
import { Eye, Rocket, Gem } from 'lucide-react';
import React from 'react';

const coreValues = [
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To create a world where human ingenuity and artificial intelligence collaborate to build smarter businesses and more intuitive experiences for everyone.',
  },
  {
    icon: Rocket,
    title: 'Our Mission',
    description: 'To empower businesses with intelligent automation and bespoke software solutions that drive tangible growth, efficiency, and market-leading transformation.',
  },
  {
    icon: Gem,
    title: 'Core Values',
    description: 'Innovation at our core, integrity in our actions, and an unwavering commitment to our clients\' success. We build partnerships, not just products.',
  },
];

export default function VisionMissionValues() {
  return (
    <section id="vision-mission-values" className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
         <h2 className="text-3xl font-bold">Our Guiding Principles</h2>
         <p className="text-white/70 mt-2">The pillars that define our work, our culture, and our commitment.</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {coreValues.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex flex-col items-center text-center p-8 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 cursor-pointer"
          >
            <div className="flex items-center justify-center size-16 rounded-full bg-gradient-to-br from-white to-gray-400 text-dark-blue mb-6 shadow-lg">
              <item.icon className="size-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-white/60">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
