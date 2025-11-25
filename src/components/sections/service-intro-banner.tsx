'use client';

import {
  Orbit,
  Cpu,
  BrainCircuit,
  Bot,
  BarChart,
  Briefcase,
  Layers,
} from 'lucide-react';
import React, { useEffect, useRef } from 'react';

const icons = [
  Orbit,
  Cpu,
  BrainCircuit,
  Bot,
  BarChart,
  Briefcase,
  Layers,
];

const IconSphere = () => {
  const sphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sphere = sphereRef.current;
    if (!sphere) return;

    const iconsElements = Array.from(sphere.children);
    const iconCount = iconsElements.length;
    const radius = sphere.offsetWidth / 2.5;

    iconsElements.forEach((icon, i) => {
      const phi = Math.acos(-1 + (2 * i) / iconCount);
      const theta = Math.sqrt(iconCount * Math.PI) * phi;
      
      const el = icon as HTMLElement;
      el.style.transform = `translate3d(${radius * Math.cos(theta) * Math.sin(phi)}px, ${radius * Math.sin(theta) * Math.sin(phi)}px, ${radius * Math.cos(phi)}px)`;
    });
  }, []);

  return (
    <div 
      ref={sphereRef}
      className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {icons.map((Icon, i) => (
        <div key={i} className="absolute text-steel-blue/30">
          <Icon className="size-8 sm:size-12" />
        </div>
      ))}
    </div>
  );
};


export default function ServiceIntroBanner() {
  return (
    <section className="relative flex items-center justify-center text-center min-h-[60vh] rounded-xl bg-secondary border border-sky-blue/50 shadow-inner overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <IconSphere />
        </div>
        <div className="relative z-10 p-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-midnight-blue">
                Smart Systems.
                <br />
                <span className="text-steel-blue">Scalable Innovation.</span>
            </h1>
        </div>
    </section>
  );
}
