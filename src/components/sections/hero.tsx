"use client";

import { useEffect, useState } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
    const [scrollY, setScrollY] = useState(0);
    const techImage = PlaceHolderImages.find(p => p.id === 'hero-3d-tech-bg');

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative grid grid-cols-1 items-center gap-12 text-center min-h-[70vh]">
            {techImage && (
                <div
                    className="absolute inset-0 -z-10 bg-no-repeat bg-center transition-transform duration-300 ease-out"
                    style={{
                        backgroundImage: `url('${techImage.imageUrl}')`,
                        backgroundSize: 'contain',
                        transform: `translateY(${scrollY * 0.2}px) scale(${1 + scrollY * 0.0003}) rotate(${scrollY * 0.05}deg)`,
                        opacity: 1 - Math.min(scrollY / 800, 0.7),
                    }}
                    data-ai-hint={techImage.imageHint}
                ></div>
            )}
            <div className="flex flex-col gap-6 items-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter">
                    Revolutionize Your Business with <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">AI Automation</span>
                </h1>
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
