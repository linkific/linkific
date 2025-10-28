import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero-3d');

    return (
        <section id="home" className="relative min-h-dvh flex items-center justify-center pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
                            <span className="block">Automate Your World with</span>
                            <span className="block text-primary">Linkific AI</span>
                        </h1>
                        <p className="mt-6 max-w-md mx-auto lg:mx-0 text-lg text-muted-foreground sm:text-xl md:mt-8">
                            We build intelligent automation solutions that streamline processes, boost efficiency, and unlock your true potential.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <Button size="lg" className="group">
                                Learn More
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button size="lg" variant="outline" className="group bg-background/50 backdrop-blur-sm">
                                <PlayCircle className="mr-2 h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                                Watch Demo
                            </Button>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                        {heroImage && (
                            <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px]">
                                <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
                                <Image
                                    src={heroImage.imageUrl}
                                    alt={heroImage.description}
                                    width={600}
                                    height={600}
                                    priority
                                    className="relative z-10 animate-[spin_30s_linear_infinite]"
                                    data-ai-hint={heroImage.imageHint}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
