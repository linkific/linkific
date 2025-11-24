"use client";

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
                className="flex flex-col gap-6 items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                 <motion.div className="relative" variants={itemVariants}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter text-midnight-blue">
                        Automate What Slows You Down. <br /> <span className="text-royal-blue">Focus on What Matters.</span>
                    </h1>
                </motion.div>
                <motion.p 
                    className="text-deep-blue/80 text-base sm:text-lg max-w-2xl mx-auto"
                    variants={itemVariants}
                >
                    Linkific's smart software and AI-powered automation streamlines your workflow, boosts efficiency, and drives unprecedented growth.
                </motion.p>
                <motion.div 
                    className="flex items-center justify-center gap-4 mt-4"
                    variants={itemVariants}
                >
                    <Button asChild className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-steel-blue text-off-white text-base font-bold shadow-lg hover:bg-deep-blue transition-shadow">
                        <Link href="/contact">
                            <span className="truncate">Get a POC in for free</span>
                        </Link>
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}
