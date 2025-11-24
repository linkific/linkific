"use client"

import Image from "next/image";

export default function CompanyOverview() {
    return (
        <section id="company-overview" className="p-8 sm:p-12 rounded-xl bg-off-white border border-sky-blue/50 shadow-md">
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-midnight-blue">About Linkific</h1>
                <p className="text-deep-blue/80 text-lg max-w-3xl mx-auto">
                    We are a team of passionate innovators, developers, and strategists dedicated to pushing the boundaries of what's possible with artificial intelligence.
                </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-midnight-blue">Our Journey</h2>
                    <p className="text-deep-blue/80 mb-6">
                        From our beginnings in digital marketing, we've evolved into a powerhouse of technological innovation. Our journey has been one of constant learning and adaptation, culminating in our current focus: harnessing the transformative power of AI to build intelligent solutions for the modern world.
                    </p>
                </div>
                <div className="relative w-full h-80 rounded-xl overflow-hidden">
                    <Image src="https://picsum.photos/seed/teamwork/800/600" alt="Our Team" layout="fill" objectFit="cover" data-ai-hint="teamwork collaboration" />
                </div>
            </div>
        </section>
    );
}
