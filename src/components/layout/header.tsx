"use client";

import Link from 'next/link';

const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
];

export default function Header() {
    return (
        <header className="sticky top-4 z-50 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-6 shadow-lg">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-2xl">auto_awesome</span>
                    <Link href="/" className="text-white text-xl font-bold">
                        Linkific
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                            {link.name}
                        </a>
                    ))}
                </nav>
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold shadow-md hover:shadow-primary/50 transition-shadow">
                    <span className="truncate">Get Started</span>
                </button>
            </div>
        </header>
    );
}
