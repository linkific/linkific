'use client';

import { motion } from 'framer-motion';
import { Layers, BrainCircuit, Bot, BarChart, Briefcase } from 'lucide-react';
import React from 'react';

const services = [
  {
    icon: Layers,
    title: 'SaaS Development',
    description: 'We build robust, scalable, and secure Software-as-a-Service platforms from the ground up, tailored to your business model.',
  },
  {
    icon: BrainCircuit,
    title: 'Machine Learning Solutions',
    description: 'Leverage the power of data with custom machine learning models that provide predictive insights and drive intelligent decisions.',
  },
  {
    icon: Bot,
    title: 'Automation Tools',
    description: 'Streamline your operations with bespoke automation tools that handle repetitive tasks, reduce human error, and boost productivity.',
  },
  {
    icon: BrainCircuit,
    title: 'Generative AI Systems',
    description: 'Explore new frontiers of creativity and efficiency with generative AI systems for content creation, data synthesis, and more.',
  },
  {
    icon: Briefcase,
    title: 'Business & Digital Strategy',
    description: 'Align your technology with your goals. We help you craft a digital strategy that maximizes ROI and ensures long-term growth.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 100,
    },
  }),
};

export default function ServiceCards() {
  return (
    <section id="service-cards" className="py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold">Our Core Offerings</h2>
        <p className="text-white/70 mt-2">A suite of services designed to propel your business into the future.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col text-left p-8 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 h-full"
          >
            <div className="flex items-center justify-center size-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 shadow-lg self-start">
              <service.icon className="size-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-white/60 text-sm flex-grow">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
