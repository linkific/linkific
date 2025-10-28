"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const scrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

export default function CareersHero() {
  return (
    <section id="careers-hero" className="p-8 sm:p-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Join a team that builds through learning.</h1>
            <p className="text-white/70 text-lg max-w-3xl mx-auto md:mx-0">
                At Linkific, we believe in failing out success. We're a group of innovators who aren't afraid to experiment, learn, and grow together.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button onClick={() => scrollTo('#apply')} className="flex min-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gradient-to-r from-primary to-secondary text-white text-base font-bold shadow-lg hover:shadow-primary/50 transition-shadow">
                    Apply Now
                </Button>
                 <Button onClick={() => scrollTo('#open-positions')} variant="outline" className="flex min-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 text-white text-base font-bold transition-shadow bg-white/10 hover:bg-white/20 border-0">
                    Current Openings
                </Button>
            </div>
        </div>
        <div className="relative w-full h-80 rounded-xl overflow-hidden">
            <Image src="https://picsum.photos/seed/office-team/800/600" alt="Linkific Team" layout="fill" objectFit="cover" data-ai-hint="office team collaboration" />
        </div>
    </section>
  );
}
