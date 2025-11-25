'use client';

import { motion } from 'framer-motion';
import { Cpu, Lightbulb, Users, Plus, Equal } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

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

const impactIconVariant = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
        scale: [1, 1.2, 1.1],
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
    const [impactAnimated, setImpactAnimated] = useState(false);

  return (
    <section id="why-choose-us" className="py-16 text-center">
      <div className={cn(
          "p-8 sm:p-12 rounded-xl transition-colors duration-700 ease-in-out",
          impactAnimated 
            ? "bg-midnight-blue border-deep-blue" 
            : "bg-off-white border-sky-blue/50 shadow-md"
      )}>
        <div>
          <h2 className={cn(
              "text-3xl font-bold mb-4 transition-colors duration-700",
              impactAnimated ? "text-off-white" : "text-midnight-blue"
          )}>Why Choose Linkific?</h2>
          <p className={cn(
              "max-w-2xl mx-auto mb-12 transition-colors duration-700",
              impactAnimated ? "text-sky-blue/80" : "text-deep-blue/80"
          )}>It's about the right formula for success.</p>
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
                <div className="flex items-center justify-center size-20 sm:size-24 rounded-full bg-off-white border-2 border-steel-blue/30 shadow-lg">
                  <Comp.icon className="size-10 sm:size-12 text-steel-blue" />
                </div>
                {Comp.label && <span className={cn("font-bold text-lg", impactAnimated ? "text-off-white" : "text-midnight-blue")}>{Comp.label}</span>}
              </motion.div>
            ))}
            <motion.div
              custom={components.length}
              variants={impactIconVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onAnimationComplete={() => setImpactAnimated(true)}
              className="flex flex-col items-center gap-2"
            >
               <div className="flex items-center justify-center size-20 sm:size-24 rounded-full bg-steel-blue text-off-white shadow-lg">
                  <h3 className="text-3xl font-black">Impact</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
