import Image from 'next/image';

export default function HeroSection() {
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
                <Image
                    alt="Abstract 3D object representing a neural network node"
                    className="w-full max-w-sm h-auto rounded-full animate-[spin_25s_linear_infinite]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8G1sfa_PjcVLjVdILN9GmRu_ToudOu_bPFwdqFBO7p_t6GXdGJYGpaz1jTtr18o-B13M8IRCCvSGCGxYH0mR5C5JGqsgo3eQ_8IbchL4tsDbFpInx_SrG-oSNx0FVt4BD47BRIwRHNraeKcObl-c5sUsQydFE1RJJif_7amwp7YyK5BCoslXOu33ABqLdzM-fxLRPSRWhQ2iWAxIEk9Z3tULFqJM87b6W-L1YqWck-wHEgWQ6QKb_ZJD-Rene0jTlPCdYHV9ByYLp"
                    width={400}
                    height={400}
                />
            </div>
        </section>
    );
}
