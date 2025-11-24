'use client';

import { motion, useInView, animate } from 'framer-motion';
import { Rocket, Smile, Calendar, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';

type AnimatedCounterProps = {
  from: number;
  to: number;
  suffix?: string;
};

function AnimatedCounter({ from, to, suffix }: AnimatedCounterProps) {
    const ref = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const controls = animate(from, to, {
            duration: 2.5,
            onUpdate(value) {
                if (ref.current) {
                    ref.current.textContent = Math.round(value).toString() + (suffix || '');
                }
            },
        });
        return () => controls.stop();
    }, [from, to, suffix]);

    return <p ref={ref} className="text-4xl font-bold text-off-white" />;
}


const kpis = [
  {
    icon: Rocket,
    value: 50,
    suffix: '+',
    label: 'Projects Delivered',
  },
  {
    icon: Smile,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
  },
  {
    icon: Calendar,
    value: 6,
    suffix: '+',
    label: 'Years of Experience',
  },
  {
    icon: Users,
    value: 20,
    suffix: '+',
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
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="pt-24 sm:pt-32" id="kpis">
      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
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
            {isInView ? 
                <AnimatedCounter from={0} to={kpi.value} suffix={kpi.suffix} /> 
                : 
                <p className="text-4xl font-bold text-off-white">0{kpi.suffix}</p>
            }
            <p className="text-sm text-sky-blue/70 mt-1">{kpi.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
