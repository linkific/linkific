'use client';

import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const timelineEvents = [
  {
    year: '2018',
    title: 'Digital Marketing Genesis',
    description: 'Linkific was born, starting its journey by helping businesses grow through innovative digital marketing strategies.',
  },
  {
    year: '2020',
    title: 'Pivot to Tech Innovation',
    description: 'Recognizing the power of technology, we expanded our services to include custom software development and tech solutions.',
  },
  {
    year: '2022',
    title: 'The AI Revolution',
    description: 'We fully embraced artificial intelligence, dedicating our mission to building cutting-edge AI-powered automation and analytics platforms.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="timeline" className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold">Our Journey</h2>
        <p className="text-white/70 mt-2">From humble beginnings to the forefront of AI innovation.</p>
      </div>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative max-w-4xl mx-auto"
      >
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-white/10 -translate-x-1/2"></div>
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <p className="text-white font-bold text-xl">{event.year}</p>
              <h3 className="text-2xl font-bold my-2">{event.title}</h3>
              <p className="text-white/70">{event.description}</p>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-6 rounded-full bg-white border-4 border-dark-blue z-10"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
