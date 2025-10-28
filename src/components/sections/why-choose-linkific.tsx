'use client';

import { motion } from 'framer-motion';
import { Cpu, Lightbulb, Users, Plus, Equal } from 'lucide-react';
import React from 'react';

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  }),
};

const components = [
  { icon: Cpu, label: 'Tech' },
  { icon: Plus, label: null },
  { icon: Lightbulb, label: 'Innovation' },
  { icon: Plus, label: null },
  { icon: Users, label: 'People' },
  { icon: Equal, label: null },
];

export default function WhyChooseLinkific() {
  return (
    <section id="why-choose-us" className="py-16 text-center">
      <div className="p-8 sm:p-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
        <h2 className="text-3xl font-bold mb-4">Why Choose Linkific?</h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-12">It's about the right formula for success.</p>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
          {components.map((Comp, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2"
            >
              <div className="flex items-center justify-center size-20 sm:size-24 rounded-full bg-background border-2 border-primary/50 shadow-lg">
                <Comp.icon className="size-10 sm:size-12 text-primary" />
              </div>
              {Comp.label && <span className="font-bold text-lg">{Comp.label}</span>}
            </motion.div>
          ))}
          <motion.div
            custom={components.length}
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2"
          >
             <div className="flex items-center justify-center size-20 sm:size-24 rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
                <h3 className="text-3xl font-black">Impact</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
