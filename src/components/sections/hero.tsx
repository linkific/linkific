"use client";

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import React, { useEffect, useMemo, useState } from 'react';

const GridBackground = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const cells = useMemo(() => {
        if (!isMounted) return [];

        const cellData = [
            // Define positions of the "active" cells in a grid (e.g., 10x10)
            { row: 2, col: 4, size: 1, color: 'royal-blue' },
            { row: 3, col: 3, size: 2, color: 'steel-blue' },
            { row: 4, col: 6, size: 1, color: 'sky-blue' },
            { row: 6, col: 2, size: 2, color: 'steel-blue' },
            { row: 5, col: 5, size: 3, color: 'royal-blue' },
            { row: 8, col: 4, size: 1, color: 'sky-blue' },
            { row: 9, col: 7, size: 2, color: 'steel-blue' },
        ];

        return cellData.map((cell, i) => {
            const bars = Array.from({ length: Math.floor(Math.random() * 8) + 4 }).map((_, j) => ({
                width: `${Math.floor(Math.random() * 60) + 20}%`,
                delay: `${(i * 0.1 + j * 0.05).toFixed(2)}s`,
                color: ['#F0F2F5', '#B3CFE5', '#4A7FA7'][Math.floor(Math.random() * 3)]
            }));

            return { ...cell, bars };
        });
    }, [isMounted]);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-off-white">
            <div
                className="absolute inset-0 bg-repeat"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, #B3CFE533 1px, transparent 1px), linear-gradient(to bottom, #B3CFE533 1px, transparent 1px)',
                    backgroundSize: '3rem 3rem',
                }}
            ></div>
            <div className="relative grid h-full w-full grid-cols-10 grid-rows-10">
                {cells.map((cell, i) => (
                    <div
                        key={i}
                        className="relative animate-[pulse_5s_ease-in-out_infinite]"
                        style={{
                            gridRowStart: cell.row,
                            gridColumnStart: cell.col,
                            gridRowEnd: cell.row + cell.size,
                            gridColumnEnd: cell.col + cell.size,
                            animationDelay: `${i * 0.3}s`
                        }}
                    >
                         <div className={cn(
                            'absolute inset-0.5 m-px rounded-sm flex flex-col justify-center items-start gap-1 p-2 overflow-hidden',
                             {
                                 'bg-royal-blue/80': cell.color === 'royal-blue',
                                 'bg-steel-blue/80': cell.color === 'steel-blue',
                                 'bg-sky-blue/80': cell.color === 'sky-blue',
                             }
                         )}>
                             {cell.bars.map((bar, j) => (
                                <div key={j}
                                     className="h-1.5 rounded-full animate-[shimmer_3s_ease-in-out_infinite]"
                                     style={{
                                         width: bar.width,
                                         backgroundColor: bar.color,
                                         animationDelay: bar.delay
                                     }}
                                ></div>
                            ))}
                         </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

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
            <GridBackground />
            <motion.div 
                className="relative z-10 flex flex-col gap-6 items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants}>
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
