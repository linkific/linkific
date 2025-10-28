'use client';

import { motion } from 'framer-motion';
import { Briefcase, Users, ArrowUp, Award, Clock } from 'lucide-react';
import React from 'react';

const benefits = [
  {
    icon: Briefcase,
    title: 'Real Projects',
    description: 'Work on impactful projects that are used by real clients. No coffee runs, just code and creativity.',
  },
  {
    icon: Users,
    title: 'Mentorship',
    description: 'Receive guidance and support from experienced professionals who are invested in your growth.',
  },
  {
    icon: ArrowUp,
    title: 'Growth',
    description: 'We provide a clear path for advancement. Successful interns are our first choice for full-time roles.',
  },
  {
    icon: Award,
    title: 'Certification',
    description: 'Gain valuable certifications and add industry-recognized credentials to your portfolio.',
  },
  {
    icon: Clock,
    title: 'Flexible Work',
    description: 'We trust our team. Enjoy flexible hours and a remote-friendly culture that values work-life balance.',
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

export default function WhyWorkWithUs() {
  return (
    <section id="why-work-with-us" className="py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">Why Work With Us?</h2>
        <p className="text-white/70 mt-2">We invest in our people. Here’s what you can expect when you join our team.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.slice(0, 3).map((benefit, index) => (
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
                <benefit.icon className="size-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-white/60 text-sm flex-grow">{benefit.description}</p>
            </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:w-2/3 md:mx-auto">
        {benefits.slice(3).map((benefit, index) => (
            <motion.div
                key={index + 3}
                custom={index + 3}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="flex flex-col text-left p-8 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 h-full"
            >
                <div className="flex items-center justify-center size-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 shadow-lg self-start">
                <benefit.icon className="size-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-white/60 text-sm flex-grow">{benefit.description}</p>
            </motion.div>
        ))}
      </div>
    </section>
  );
}
