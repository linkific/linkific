"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Case Studies', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
];

export default function Header() {
    const pathname = usePathname();
    const [isSheetOpen, setSheetOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-off-white/80 backdrop-blur-xl border-b border-sky-blue/50">
            <div className="flex items-center justify-between h-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-steel-blue text-2xl">auto_awesome</span>
                    <h2 className="text-midnight-blue text-xl font-bold">Linkific</h2>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link 
                          key={link.name} 
                          href={link.href} 
                          className={cn(
                            "transition-colors text-sm font-medium",
                            (pathname === link.href || (link.href === '/projects' && pathname.startsWith('/case-studies')))
                              ? "text-steel-blue" 
                              : "text-midnight-blue/70 hover:text-steel-blue"
                          )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-2">
                    <Button asChild className="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-deep-blue text-off-white text-sm font-bold shadow-md hover:bg-midnight-blue transition-shadow">
                        <Link href="/contact">
                            <span className="truncate">Get Started</span>
                        </Link>
                    </Button>
                    <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6 text-midnight-blue" />
                                <span className="sr-only">Open Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[240px] bg-off-white border-l">
                            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                            <nav className="flex flex-col gap-6 mt-12">
                                {navLinks.map((link) => (
                                    <Link 
                                      key={link.name} 
                                      href={link.href}
                                      onClick={() => setSheetOpen(false)}
                                      className={cn(
                                        "text-lg font-medium transition-colors",
                                        (pathname === link.href || (link.href === '/projects' && pathname.startsWith('/case-studies')))
                                          ? "text-steel-blue" 
                                          : "text-midnight-blue/70 hover:text-steel-blue"
                                      )}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
