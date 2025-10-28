import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero-3d-tech');

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-center lg:text-left">
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
            <div className="flex items-center justify-center">
                {heroImage && (
                    <Image
                        alt={heroImage.description}
                        data-ai-hint={heroImage.imageHint}
                        className="w-full max-w-sm h-auto rounded-full animate-[spin_25s_linear_infinite]"
                        src={heroImage.imageUrl}
                        width={400}
                        height={400}
                    />
                )}
            </div>
        </section>
    );
}
