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
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
];

export default function Header() {
    const pathname = usePathname();
    const [isSheetOpen, setSheetOpen] = useState(false);

    return (
        <header className="sticky top-4 z-50 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-6 shadow-lg">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/assets/logo.png" alt="Linkific Logo" width={140} height={40} className="object-contain" />
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link 
                          key={link.name} 
                          href={link.href} 
                          className={cn(
                            "transition-colors text-sm font-medium",
                            pathname === link.href ? "text-white" : "text-white/60 hover:text-white"
                          )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-2">
                    <Button asChild className="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold shadow-md hover:shadow-primary/50 transition-shadow">
                        <Link href="/contact">
                            <span className="truncate">Get Started</span>
                        </Link>
                    </Button>
                    <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Open Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[240px] bg-background border-l-border">
                            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                            <nav className="flex flex-col gap-6 mt-12">
                                {navLinks.map((link) => (
                                    <Link 
                                      key={link.name} 
                                      href={link.href}
                                      onClick={() => setSheetOpen(false)}
                                      className={cn(
                                        "text-lg font-medium transition-colors",
                                        pathname === link.href ? "text-primary" : "text-white/80 hover:text-white"
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
