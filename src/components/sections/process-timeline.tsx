'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
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

export default function ProcessTimeline() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  // This calculates the total width needed to scroll all cards.
  // It's a rough calculation and might need tweaking based on the exact number of cards and their widths.
  // Let's assume 5 cards, each taking up a certain viewport width plus gap.
  // The value '-80%' might have been too large. Let's calculate it more dynamically.
  // Let's say we want to show one card and a bit of the next one.
  const cardsCount = processSteps.length;
  // This will scroll until the last card is fully visible.
  const x = useTransform(scrollYProgress, [0.2, 0.9], ['0%', `-${100 - (100 / cardsCount)}%`]);


  return (
    <section ref={targetRef} id="process" className="py-16 h-[300vh] relative">
      <div className="sticky top-1/4 left-0 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center mb-16 px-4">
          <h2 className="text-3xl font-bold">Our Development Process</h2>
          <p className="text-white/70 mt-2">A transparent and collaborative journey from idea to impact.</p>
        </div>

        <motion.div style={{ x }} className="flex gap-12 p-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[80vw] md:w-[40vw] p-8 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center size-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 shadow-lg">
                <step.icon className="size-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/60">{step.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
