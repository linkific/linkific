"use client";

import { motion } from 'framer-motion';
import { Mail, Zap, CheckCircle, PartyPopper } from 'lucide-react';

const processSteps = [
  {
    icon: Mail,
    title: '1. Contact Us',
    description: 'Tell us about the workflow, data, or repetitive task you want to automate.',
  },
  {
    icon: Zap,
    title: '2. Get a Plan',
    description: 'We deliver a custom automation plan that shows how we will solve your problem.',
  },
  {
    icon: CheckCircle,
    title: '3. Build & Test',
    description: 'Once you approve, we build and rigorously test your production-ready system in 1-4 weeks.',
  },
  {
    icon: PartyPopper,
    title: '4. Deploy & Support',
    description: 'You get a working system and ongoing support so your team can focus on growth.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
    hidden: { opacity: 0, x: 12, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.36,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

export default function ProcessSection() {
  return (
    <section className="pt-24 sm:pt-32" id="process">
        <h2 className="text-off-white text-3xl font-bold text-center">How We Build Your Automation</h2>
        <p className="text-sky-blue/80 text-center mt-2 mb-12 max-w-2xl mx-auto">From idea to impact in four simple steps. Fast, tangible, and built on trust.</p>
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {processSteps.map((step, index) => (
                <motion.div 
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.04, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex flex-col items-start text-left p-6 rounded-xl bg-deep-blue/30 border border-deep-blue hover:border-sky-blue/50 transition-colors cursor-pointer transform -skew-x-[10deg]"
                >
                    <div className="transform skew-x-[10deg]">
                      <div className="flex items-center justify-center size-12 rounded-lg bg-sky-blue text-midnight-blue mb-5">
                          <step.icon className="size-6" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-off-white">{step.title}</h3>
                      <p className="text-sky-blue/70 text-sm">{step.description}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </section>
  );
}
