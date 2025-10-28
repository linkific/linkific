'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const galleryItems = [
  { src: 'https://picsum.photos/seed/team-session/600/400', alt: 'Team brainstorming session', hint: "team session" },
  { src: 'https://picsum.photos/seed/virtual-meet/600/400', alt: 'Virtual team meeting', hint: "virtual meeting" },
  { src: 'https://picsum.photos/seed/code-review/600/400', alt: 'Pair programming session', hint: "code review" },
  { src: 'https://picsum.photos/seed/office-fun/600/400', alt: 'Fun activity at the office', hint: "office fun" },
  { src: 'https://picsum.photos/seed/project-launch/600/400', alt: 'Celebrating a project launch', hint: "project launch" },
];

export default function InternLife() {
  return (
    <section id="intern-life" className="py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">Intern Life @ Linkific</h2>
        <p className="text-white/70 mt-2">
          Glimpses into our collaborative and fun-loving work environment.
        </p>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {galleryItems.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="bg-transparent border-0 shadow-none">
                  <CardContent className="flex aspect-video items-center justify-center p-0 rounded-xl overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                      data-ai-hint={item.hint}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
