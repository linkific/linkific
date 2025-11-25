
'use client';

import { motion } from 'framer-motion';

const logos = [
    { name: 'Placeholder 1', src: 'https://via.placeholder.com/120x40/FFFFFF/E0E0E0?text=Logo' },
    { name: 'Placeholder 2', src: 'https://via.placeholder.com/120x40/FFFFFF/E0E0E0?text=Logo' },
    { name: 'Placeholder 3', src: 'https://via.placeholder.com/120x40/FFFFFF/E0E0E0?text=Logo' },
    { name: 'Placeholder 4', src: 'https://via.placeholder.com/120x40/FFFFFF/E0E0E0?text=Logo' },
    { name: 'Placeholder 5', src: 'https://via.placeholder.com/120x40/FFFFFF/E0E0E0?text=Logo' },
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-16 text-center">
        <h2 className="text-sm font-bold uppercase tracking-wider text-deep-blue/60 mb-8">
            Trusted by modern finance teams
        </h2>
        <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
            {logos.map((logo, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.5, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="grayscale"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo.src} alt={logo.name} className="h-8 object-contain" />
                </motion.div>
            ))}
        </div>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-16 text-lg italic text-deep-blue/80"
        >
           <p>&ldquo;This automation removed hours of manual entry for us.&rdquo;</p>
        </motion.div>
    </section>
  );
}
