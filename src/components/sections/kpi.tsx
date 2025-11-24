'use client';

import { motion } from 'framer-motion';
import { Rocket, Smile, Calendar, Users } from 'lucide-react';

const kpis = [
  {
    icon: Rocket,
    value: '50+',
    label: 'Projects Delivered',
  },
  {
    icon: Smile,
    value: '98%',
    label: 'Client Satisfaction',
  },
  {
    icon: Calendar,
    value: '6+',
    label: 'Years of Experience',
  },
  {
    icon: Users,
    value: '20+',
    label: 'Skilled Professionals',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function KpiSection() {
  return (
    <section className="pt-24 sm:pt-32" id="kpis">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {kpis.map((kpi, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-8 rounded-xl bg-deep-blue/30 border border-deep-blue text-center flex flex-col items-center"
          >
            <div className="flex items-center justify-center size-16 rounded-full bg-sky-blue text-midnight-blue mb-5">
              <kpi.icon className="size-8" />
            </div>
            <p className="text-4xl font-bold text-off-white">{kpi.value}</p>
            <p className="text-sm text-sky-blue/70 mt-1">{kpi.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
