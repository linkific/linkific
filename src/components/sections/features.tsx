'use client';

import { motion } from 'framer-motion';
import { Workflow, Plug, Bot, ListTodo, Shield, Repeat } from 'lucide-react';
import React from 'react';

const features = [
  {
    icon: Workflow,
    title: 'Custom Workflow Automation',
    benefit: 'One system that handles your unique steps.',
    why: 'Reduces manual fixing and tool switching.',
  },
  {
    icon: Plug,
    title: 'Integration with Existing Finance Tools',
    benefit: 'You keep your current environment.',
    why: 'No disruption or learning curve.',
  },
  {
    icon: Bot,
    title: 'AI-Based Decision Routing',
    benefit: 'Tasks reach the right person without manual tracking.',
    why: 'Reduces approval delays.',
  },
  {
    icon: ListTodo,
    title: 'Audit-Friendly Logs',
    benefit: 'Every action is traceable.',
    why: 'Finance teams need compliance clarity.',
  },
  {
    icon: Shield,
    title: 'User Access Controls',
    benefit: 'Only the right people see sensitive data.',
    why: 'Reduces risk.',
  },
    {
    icon: Repeat,
    title: 'Support and Iteration',
    benefit: 'Your system improves as your needs evolve.',
    why: 'Automation doesn’t get outdated.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-midnight-blue">
            A Better Way to Work
        </h2>
        <p className="text-deep-blue/80 mt-2">
            Save up to 70% of manual work with features built for finance teams.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
            <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="flex flex-col text-left p-6 rounded-xl bg-off-white border border-sky-blue/50 shadow-md h-full"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center size-12 rounded-lg bg-steel-blue/10 text-steel-blue">
                        <feature.icon className="size-6" />
                    </div>
                    <h3 className="text-lg font-bold text-midnight-blue">{feature.title}</h3>
                </div>
                <p className="text-deep-blue font-medium text-sm flex-grow">Benefit: {feature.benefit}</p>
                <p className="text-deep-blue/70 text-sm mt-2">Why it matters: {feature.why}</p>
              </div>
            </motion.div>
        ))}
      </div>
    </section>
  );
}
