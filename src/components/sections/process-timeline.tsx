'use client';

import { motion, useInView } from 'framer-motion';
import { Search, PenTool, Code, TestTube2, Scaling } from 'lucide-react';
import React, { useRef } from 'react';

const processSteps = [
  {
    icon: Search,
    title: 'Research',
    description: 'We dive deep into your domain, market, and objectives to build a solid foundation.',
  },
  {
    icon: PenTool,
    title: 'Design',
    description: 'Crafting intuitive UX/UI and robust system architecture to ensure a seamless final product.',
  },
  {
    icon: Code,
    title: 'Build',
    description: 'Our expert developers bring the designs to life with clean, efficient, and scalable code.',
  },
  {
    icon: TestTube2,
    title: 'Test',
    description: 'Rigorous testing at every stage to ensure quality, performance, and security.',
  },
  {
    icon: Scaling,
    title: 'Scale',
    description: 'Deploying the solution and providing ongoing support to ensure it grows with your business.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="process" className="py-16">
      <div className="max-w-3xl mx-auto text-center mb-16 px-4">
        <h2 className="text-3xl font-bold text-off-white">Our Development Process</h2>
        <p className="text-sky-blue/70 mt-2">A transparent and collaborative journey from idea to impact.</p>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-5xl mx-auto flex flex-col items-center gap-8"
      >
        {/* Top Row: 3 items for medium screens, 5 for large */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.slice(0, 3).map((step, index) => (
            <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 rounded-xl bg-deep-blue/30 border border-deep-blue flex flex-col items-center text-center"
            >
                <div>
                <div className="flex items-center justify-center size-16 rounded-full bg-sky-blue text-midnight-blue mb-6 shadow-lg">
                    <step.icon className="size-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-off-white">{step.title}</h3>
                <p className="text-sky-blue/70">{step.description}</p>
                </div>
            </motion.div>
            ))}
            {/* These two are only visible on large screens as part of the 5-col grid */}
            {processSteps.slice(3).map((step, index) => (
                <motion.div
                    key={index + 3}
                    variants={itemVariants}
                    className="p-8 rounded-xl bg-deep-blue/30 border border-deep-blue flex-col items-center text-center hidden lg:flex"
                >
                    <div>
                    <div className="flex items-center justify-center size-16 rounded-full bg-sky-blue text-midnight-blue mb-6 shadow-lg">
                        <step.icon className="size-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-off-white">{step.title}</h3>
                    <p className="text-sky-blue/70">{step.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
        
        {/* Bottom Row: 2 centered items, only visible on medium screens */}
        <div className="w-full justify-center hidden md:grid md:grid-cols-2 lg:hidden gap-8 md:w-2/3">
            {processSteps.slice(3).map((step, index) => (
            <motion.div
                key={index + 3}
                variants={itemVariants}
                className="p-8 rounded-xl bg-deep-blue/30 border border-deep-blue flex flex-col items-center text-center"
            >
                <div>
                <div className="flex items-center justify-center size-16 rounded-full bg-sky-blue text-midnight-blue mb-6 shadow-lg">
                    <step.icon className="size-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-off-white">{step.title}</h3>
                <p className="text-sky-blue/70">{step.description}</p>
                </div>
            </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  );
}
