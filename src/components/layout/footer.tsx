import { Mountain, Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const footerNavs = [
  { href: '#projects', name: 'Projects' },
  { href: '#services', name: 'Services' },
  { href: '#contact', name: 'Contact' },
  { href: '#', name: 'Terms' },
  { href: '#', name: 'Privacy' },
];

const socialLinks = [
  { Icon: Twitter, href: '#', name: 'Twitter' },
  { Icon: Github, href: '#', name: 'GitHub' },
  { Icon: Linkedin, href: '#', name: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-foreground/10 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
                <Mountain className="h-7 w-7 text-primary" />
                <span className="text-xl font-bold text-foreground">Linkific</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              AI-Powered Automation for a Smarter Future.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                {footerNavs.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-foreground">Contact</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li><a href="mailto:hello@linkific.com" className="hover:text-primary">hello@linkific.com</a></li>
                    <li><a href="tel:+1234567890" className="hover:text-primary">+1 (234) 567-890</a></li>
                </ul>
            </div>
             <div>
                <h3 className="text-sm font-semibold text-foreground">Follow Us</h3>
                <div className="flex items-center space-x-2 mt-4">
                  {socialLinks.map((social) => (
                    <Button key={social.name} variant="ghost" size="icon" asChild>
                      <a href={social.href} aria-label={social.name}>
                        <social.Icon className="h-5 w-5 text-muted-foreground hover:text-primary" />
                      </a>
                    </Button>
                  ))}
                </div>
            </div>
          </div>
        </div>
        <div className="py-8 border-t border-foreground/10 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Linkific, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
