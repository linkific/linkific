"use client";

import React, { useState } from "react";
import Link from 'next/link';
import { Mountain, Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";

const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-foreground/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-2">
                        <Mountain className="h-7 w-7 text-primary" />
                        <span className="text-xl font-bold text-foreground">Linkific</span>
                    </Link>
                    
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" className="hidden md:inline-flex group">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <div className="md:hidden">
                            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu */}
            <div className={cn(
                "md:hidden transition-all duration-300 ease-in-out",
                isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
            )}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-foreground/10">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:bg-secondary"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-4">
                         <Button variant="default" className="w-full group">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
