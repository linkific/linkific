"use client";

import { useEffect, useState } from 'react';

export default function HeroSection() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative grid grid-cols-1 items-center gap-12 text-center min-h-[70vh]">
            <div className="flex flex-col gap-6 items-center">
                 <div className="relative">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter">
                        Revolutionize Your Business with <br />
                        <span className="text-yellow-400">
                            AI Automation
                        </span>
                    </h1>
                    <div className="absolute -top-12 -right-32 hidden lg:block transform -rotate-12">
                        <div className="relative">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="150" 
                                height="100" 
                                viewBox="0 0 150 100" 
                                className="transform -scale-x-100"
                            >
                                <path 
                                    d="M10 50 Q 50 20, 90 50 T 140 60" 
                                    stroke="white" 
                                    strokeWidth="2" 
                                    fill="none" 
                                    strokeDasharray="5, 5"
                                />
                                <path 
                                    d="M135 55 L 140 60 L 135 65" 
                                    stroke="white" 
                                    strokeWidth="2" 
                                    fill="none" 
                                />
                            </svg>
                            <p className="absolute -top-2 left-0 text-sm text-white/80 w-max transform -rotate-3">
                                yes we do things differently
                            </p>
                        </div>
                    </div>
                </div>
                <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                    Linkific's smart software and AI-powered automation streamlines your workflow, boosts efficiency, and drives unprecedented growth.
                </p>
                <div className="flex items-center justify-center gap-4 mt-4">
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gradient-to-r from-primary to-secondary text-white text-base font-bold shadow-lg hover:shadow-primary/50 transition-shadow">
                        <span className="truncate">Explore Solutions</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
