

import Link from 'next/link';

// Minimalist components defined directly in the file for simplicity

function MinimalistHeader() {
    return (
        <header className="absolute top-0 left-0 w-full z-10">
            <div className="flex items-center justify-between h-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-3 text-black">
                    <span className="material-symbols-outlined text-black text-2xl">auto_awesome</span>
                    <h2 className="text-xl font-bold">Linkific</h2>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#services" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">Services</Link>
                    <Link href="#contact" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">Contact</Link>
                </nav>
                <Link href="/contact" className="flex items-center justify-center rounded-md h-10 px-5 bg-black text-white text-sm font-bold transition-colors hover:bg-gray-800">
                    Get Started
                </Link>
            </div>
        </header>
    );
}

function MinimalistHero() {
    return (
        <section className="text-center pt-32 pb-20 sm:pt-40 sm:pb-28">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter text-black">
                Automate What Slows You Down. <br /> <span className="text-gray-700">Focus on What Matters.</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mt-6">
                Linkific's smart software and AI-powered automation streamlines your workflow, boosts efficiency, and drives unprecedented growth.
            </p>
            <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-md h-12 px-6 bg-black text-white text-base font-bold transition-colors hover:bg-gray-800">
                     Get a POC in for free
                </Link>
            </div>
        </section>
    );
}

function MinimalistServices() {
    const services = [
        {
            icon: 'model_training',
            title: 'AI-Powered Workflow Automation',
            description: 'Streamline complex processes, reduce manual effort, and increase operational efficiency with intelligent automation.',
        },
        {
            icon: 'insights',
            title: 'Predictive Analytics',
            description: 'Leverage your data to forecast trends, identify opportunities, and make proactive, data-driven decisions.',
        },
        {
            icon: 'terminal',
            title: 'Custom Software Solutions',
            description: 'Develop bespoke software tailored to your unique business needs, integrating AI for maximum impact.',
        },
    ];

    return (
        <section id="services" className="py-24 sm:py-32">
            <h2 className="text-white text-3xl font-bold text-center">Our Services</h2>
            <p className="text-gray-300 text-center mt-2 mb-12 max-w-2xl mx-auto">A clear breakdown of our core offerings designed to elevate your business operations.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-8 rounded-xl bg-gray-900/50 border border-gray-700">
                        <div className="flex items-center justify-center size-16 rounded-full bg-white text-black mb-6">
                            <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function MinimalistContact() {
    return (
        <section className="py-24 sm:py-32" id="contact">
            <div className="p-8 sm:p-12 rounded-xl bg-white border border-gray-200">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 text-black">Let's Build the Future</h2>
                    <p className="text-gray-600 mb-8">Ready to transform your business? Fill out the form to get started.</p>
                </div>
                <form className="max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="sr-only" htmlFor="name">Your Name</label>
                        <input className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 text-black placeholder-gray-500 focus:ring-2 focus:ring-black transition" id="name" placeholder="Your Name" type="text"/>
                    </div>
                    <div>
                        <label className="sr-only" htmlFor="email">Your Email</label>
                        <input className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 text-black placeholder-gray-500 focus:ring-2 focus:ring-black transition" id="email" placeholder="Your Email" type="email"/>
                    </div>
                    <div className="sm:col-span-2">
                        <label className="sr-only" htmlFor="message">Your Message</label>
                        <textarea className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 text-black placeholder-gray-500 focus:ring-2 focus:ring-black transition" id="message" placeholder="Your Message" rows="4"></textarea>
                    </div>
                    <div className="sm:col-span-2 flex justify-center">
                        <button className="flex min-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-black text-white text-base font-bold transition hover:bg-gray-800" type="submit">
                            <span className="truncate">Send Message</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

function MinimalistFooter() {
  return (
    <footer className="mt-16 sm:mt-24 py-12 text-center">
         <div className="flex items-center justify-center gap-3 text-white">
            <span className="material-symbols-outlined text-white text-2xl">auto_awesome</span>
            <h2 className="text-xl font-bold">Linkific</h2>
        </div>
        <p className="text-gray-400 text-sm mt-4">© 2025 Linkific. All rights reserved.</p>
    </footer>
  )
}


export default function Version1Page() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-white font-display text-black">
        <MinimalistHeader />

        {/* Hero Section - White BG */}
        <div className="bg-white">
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <MinimalistHero />
            </main>
        </div>

        {/* Services Section - Black BG with top diagonal clip */}
        <div className="bg-black text-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
             <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                <MinimalistServices />
            </main>
        </div>

        {/* Contact Section - White BG with top diagonal clip */}
        <div className="bg-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                <MinimalistContact />
            </main>
        </div>

        {/* Footer Section - Black BG with top diagonal clip */}
        <div className="bg-black text-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
             <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <MinimalistFooter />
            </main>
        </div>
    </div>
  );
}
