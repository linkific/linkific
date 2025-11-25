

'use client';

import { motion, useMotionValue, animate } from 'framer-motion';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useState, useRef, useEffect, useMemo } from 'react';


const initialItems = [
    { id: 1, label: 'Review Invoices', color: 'bg-steel-blue', x: 20, y: 20 },
    { id: 2, label: 'Match POs', color: 'bg-deep-blue', x: 180, y: 80 },
    { id: 3, label: 'Route for Approval', color: 'bg-steel-blue', x: 40, y: 180 },
    { id: 4, label: 'Process Payments', color: 'bg-deep-blue', x: 200, y: 240 },
];

function InteractiveWorkflow() {
    const [items, setItems] = useState(initialItems);
    const constraintsRef = useRef(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Initialize motion values in state, not in useMemo
    const motionValues = useMemo(() =>
        initialItems.map(item => ({
            x: useMotionValue(item.x),
            y: useMotionValue(item.y)
        })), []);


    const resetPositions = () => {
        // Animate back to initial positions
        initialItems.forEach((item, index) => {
            animate(motionValues[index].x, item.x, { type: 'spring', stiffness: 200, damping: 20 });
            animate(motionValues[index].y, item.y, { type: 'spring', stiffness: 200, damping: 20 });
        });
    };

    const handleDrag = (event:any, info:any, item:any, index: number) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // The motion values are already updated by the drag, so we just need to restart the timeout
        timeoutRef.current = setTimeout(resetPositions, 7000);
    };

    useEffect(() => {
        // Set the initial timeout
        timeoutRef.current = setTimeout(resetPositions, 7000);

        // Cleanup timeout on component unmount
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []); // Empty dependency array to run only once


    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
            <p className="text-sm font-semibold text-center text-deep-blue/80 mb-4">
                Your manual workflow (try dragging the items)
            </p>
            <div ref={constraintsRef} className="relative w-full max-w-sm h-96 rounded-lg">
                 <svg className="absolute top-0 left-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                    {items.slice(0, -1).map((item, i) => (
                        <motion.line
                            key={`line-${i}`}
                            x1={motionValues[i].x}
                            y1={motionValues[i].y}
                            x2={motionValues[i+1].x}
                            y2={motionValues[i+1].y}
                            stroke="hsl(var(--primary))"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            style={{transform: 'translate(48px, 48px)'}}
                        />
                    ))}
                </svg>
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        drag
                        dragConstraints={constraintsRef}
                        dragElastic={0.1}
                        onDrag={(e, info) => handleDrag(e, info, item, index)}
                        style={{
                            position: 'absolute',
                            x: motionValues[index].x,
                            y: motionValues[index].y,
                        }}
                        className={`p-3 rounded-full text-off-white font-medium shadow-md cursor-grab active:cursor-grabbing flex items-center justify-center text-center size-24 ${item.color}`}
                        whileTap={{ scale: 1.1 }}
                    >
                       <span className="inline-block transform skew-x-[10deg] text-xs">{item.label}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}


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
        <section className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-12 text-center md:text-left min-h-[80vh]">
            <motion.div 
                className="relative z-10 flex flex-col gap-6 items-center md:items-start"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter text-midnight-blue">
                        Automate Complex <span className="text-deep-blue">Finance Workflows</span>
                    </h1>
                </motion.div>
                <motion.p 
                    className="text-deep-blue/80 text-base sm:text-lg max-w-xl mx-auto md:mx-0"
                    variants={itemVariants}
                >
                    We build custom automation solutions that remove repetitive finance work so your team focuses on decisions, not manual tasks.
                </motion.p>
                <motion.div 
                    className="flex flex-col sm:flex-row items-start justify-center md:justify-start gap-4 mt-4"
                    variants={itemVariants}
                >
                    <div className="flex flex-col items-center md:items-start">
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
            <motion.div 
                className="relative w-full h-96 md:h-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
               <InteractiveWorkflow />
            </motion.div>
        </section>
    );
}
