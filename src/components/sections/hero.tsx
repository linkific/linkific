"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter">
                        Automate What Slows You Down. <br /> <span className="text-primary">Focus on What Matters.</span>
                    </h1>
                </motion.div>
                <motion.p 
                    className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0"
                    variants={itemVariants}
                >
                    Linkific's smart software and AI-powered automation streamlines your workflow, boosts efficiency, and drives unprecedented growth.
                </motion.p>
                <motion.div 
                    className="flex items-center justify-center gap-4 mt-4"
                    variants={itemVariants}
                >
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gradient-to-r from-primary to-secondary text-white text-base font-bold shadow-lg hover:shadow-primary/50 transition-shadow">
                        <span className="truncate">Get a POC in for free</span>
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
