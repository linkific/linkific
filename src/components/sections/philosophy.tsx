'use client';

import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section id="philosophy" className="p-8 sm:p-12 rounded-xl bg-off-white border border-sky-blue/50 shadow-md text-center">
      <h2 className="text-3xl font-bold mb-8 text-midnight-blue">Our Philosophy</h2>
      <div className="relative overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
          className="whitespace-nowrap"
        >
          <h3 className="text-5xl md:text-7xl font-black text-midnight-blue/5 uppercase inline-block">
            “Failing Out Success” “Failing Out Success”{' '}
          </h3>
        </motion.div>
      </div>
      <p className="text-deep-blue/80 max-w-2xl mx-auto mt-8">
        This isn't about celebrating failure, but embracing the learning process. We believe true innovation comes from pushing boundaries, testing limits, and iterating relentlessly. Every stumble is a lesson, every setback a setup for a comeback. It’s how we turn bold ideas into brilliant realities.
      </p>
    </section>
  );
}
