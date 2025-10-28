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
        <section className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-center lg:text-left min-h-[70vh]">
            <div
                className="absolute inset-0 -z-10 bg-no-repeat bg-center transition-transform duration-300 ease-out"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1620421680100-22784041b34a?q=80&w=2070&auto=format&fit=crop')`,
                    backgroundSize: 'contain',
                    transform: `translateY(${scrollY * 0.2}px) scale(${1 + scrollY * 0.0003}) rotate(${scrollY * 0.05}deg)`,
                    opacity: 1 - Math.min(scrollY / 800, 0.7),
                }}
                data-ai-hint="data visualization"
            ></div>
            <div className="flex flex-col gap-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter">
                    Revolutionize Your Business with <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">AI Automation</span>
                </h1>
                <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                    Linkific's smart software and AI-powered automation streamlines your workflow, boosts efficiency, and drives unprecedented growth.
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-4 mt-4">
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gradient-to-r from-primary to-secondary text-white text-base font-bold shadow-lg hover:shadow-primary/50 transition-shadow">
                        <span className="truncate">Explore Solutions</span>
                    </button>
                </div>
            </div>
            {/* Empty div to maintain the two-column layout */}
            <div></div>
        </section>
    );
}
