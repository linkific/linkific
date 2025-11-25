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
    <section id="careers-hero" className="p-8 sm:p-12 rounded-xl bg-off-white border border-sky-blue/50 shadow-md grid md:grid-cols-2 gap-12 items-center transform -skew-x-[10deg]">
      <div className="transform skew-x-[10deg]">
        <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-midnight-blue">Join a team that builds through learning.</h1>
            <p className="text-deep-blue/80 text-lg max-w-3xl mx-auto md:mx-0">
                At Linkific, we believe in failing out success. We're a group of innovators who aren't afraid to experiment, learn, and grow together.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button onClick={() => scrollTo('#apply')} className="flex min-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-deep-blue text-off-white text-base font-bold shadow-lg hover:bg-midnight-blue transition-shadow">
                    Apply Now
                </Button>
                 <Button onClick={() => scrollTo('#open-positions')} variant="secondary" className="flex min-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 text-midnight-blue text-base font-bold transition-shadow hover:bg-sky-blue/50 border-0">
                    Current Openings
                </Button>
            </div>
        </div>
      </div>
      <div className="relative w-full h-80 rounded-xl overflow-hidden transform skew-x-[10deg]">
          <Image src="https://picsum.photos/seed/office-team/800/600" alt="Linkific Team" layout="fill" objectFit="cover" data-ai-hint="office team collaboration" />
      </div>
    </section>
  );
}
