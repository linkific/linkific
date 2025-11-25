
'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2,
                duration: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="relative grid grid-cols-1 items-center gap-12 text-center min-h-[70vh]">
            <motion.div 
                className="relative z-10 flex flex-col gap-6 items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter text-midnight-blue">
                        Automate Complex Finance Workflows
                    </h1>
                </motion.div>
                <motion.p 
                    className="text-deep-blue/80 text-base sm:text-lg max-w-2xl mx-auto"
                    variants={itemVariants}
                >
                    We build custom automation solutions that remove repetitive finance work so your team focuses on decisions, not manual tasks.
                </motion.p>
                <motion.div 
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
                    variants={itemVariants}
                >
                    <div className="flex flex-col items-center">
                        <Button asChild className="flex min-w-[240px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-deep-blue text-off-white text-base font-bold shadow-lg hover:bg-midnight-blue transition-shadow">
                            <Link href="/contact">
                                <span className="truncate">Request a custom automation plan</span>
                            </Link>
                        </Button>
                         <p className="text-xs text-deep-blue/60 mt-1.5">Takes under one minute</p>
                    </div>
                     <Button asChild variant="secondary" className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 text-midnight-blue text-base font-bold transition-shadow hover:bg-sky-blue/50 border-0">
                        <Link href="/projects">
                            <span className="truncate">Explore past work</span>
                        </Link>
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}
