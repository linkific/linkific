'use client';

import { motion, Reorder } from 'framer-motion';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { GripVertical } from 'lucide-react';


const initialItems = [
    { id: 1, label: 'Review Invoices', color: 'bg-steel-blue' },
    { id: 2, label: 'Match POs', color: 'bg-deep-blue' },
    { id: 3, label: 'Route for Approval', color: 'bg-steel-blue' },
    { id: 4, label: 'Process Payments', color: 'bg-deep-blue' },
];

function InteractiveWorkflow() {
    const [items, setItems] = useState(initialItems);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
            <div className="w-full max-w-sm space-y-3">
                 <p className="text-sm font-semibold text-center text-deep-blue/80">
                    Your manual workflow (try dragging the items)
                </p>
                <Reorder.Group axis="y" values={items} onReorder={setItems} className="space-y-3">
                    {items.map((item) => (
                        <Reorder.Item 
                            key={item.id} 
                            value={item}
                            className={`relative p-4 rounded-lg text-off-white font-medium shadow-md cursor-grab active:cursor-grabbing flex items-center justify-between ${item.color}`}
                        >
                            <span>{item.label}</span>
                            <GripVertical className="size-5 text-off-white/50" />
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
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
                    className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-4"
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
                     <div className="flex flex-col">
                        <Button asChild variant="secondary" className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 text-midnight-blue text-base font-bold transition-shadow hover:bg-sky-blue/50 border-0">
                            <Link href="/projects">
                                <span className="truncate">Explore past work</span>
                            </Link>
                        </Button>
                    </div>
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
