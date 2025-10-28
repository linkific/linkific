"use client";

import { motion } from 'framer-motion';
import { Mail, Zap, CheckCircle, PartyPopper } from 'lucide-react';

const processSteps = [
  {
    icon: Mail,
    title: '1. Contact Us',
    description: 'Drop a quick note — tell us your problem, data, or workflow you want fixed.',
  },
  {
    icon: Zap,
    title: '2. POC in 3 Days',
    description: 'We’ll deliver a focused proof-of-concept that shows the idea working with your data.',
  },
  {
    icon: CheckCircle,
    title: '3. Confirm & Build',
    description: 'Once you approve the POC, we build a production-ready prototype in 1–4 weeks.',
  },
  {
    icon: PartyPopper,
    title: '4. Enjoy Your Work',
    description: 'You get a working system that automates the grunt work so your team can focus on growth.',
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
       <div className="p-8 sm:p-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
            <h2 className="text-white text-3xl font-bold text-center">Our Process</h2>
            <p className="text-white/70 text-center mt-2 mb-12 max-w-2xl mx-auto">From idea to impact in four simple steps. Fast, tangible, and built on trust.</p>
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
                        className="flex flex-col items-start text-left p-6 rounded-xl border border-transparent hover:border-primary/50 transition-colors cursor-pointer"
                    >
                        <div className="flex items-center justify-center size-12 rounded-lg bg-gradient-to-br from-primary to-secondary mb-5 shadow-lg">
                            <step.icon className="size-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                        <p className="text-white/60 text-sm">{step.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  );
}
