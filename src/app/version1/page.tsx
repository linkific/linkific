
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

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
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2,
                duration: 0.5
            }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="text-center pt-32 pb-20 sm:pt-40 sm:pb-28">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center gap-6"
            >
                <motion.h1 
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter text-black"
                >
                    Automate What Slows You Down. <br /> <span className="text-gray-700">Focus on What Matters.</span>
                </motion.h1>
                <motion.p 
                    variants={itemVariants}
                    className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mt-6"
                >
                    Linkific's smart software and AI-powered automation streamlines your workflow, boosts efficiency, and drives unprecedented growth.
                </motion.p>
                <motion.div variants={itemVariants} className="mt-8">
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md h-12 px-6 bg-black text-white text-base font-bold transition-colors hover:bg-gray-800">
                         Get a POC in for free
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}

function MinimalistProcess() {
    const processSteps = [
      {
        icon: 'mail',
        title: '1. Contact Us',
        description: 'Drop a quick note — tell us your problem, data, or workflow you want fixed.',
      },
      {
        icon: 'zap',
        title: '2. POC in 3 Days',
        description: 'We’ll deliver a focused proof-of-concept that shows the idea working with your data.',
      },
      {
        icon: 'check_circle',
        title: '3. Confirm & Build',
        description: 'Once you approve the POC, we build a production-ready prototype in 1–4 weeks.',
      },
      {
        icon: 'celebration',
        title: '4. Enjoy Your Work',
        description: 'You get a working system that automates the grunt work so your team can focus on growth.',
      },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
            staggerChildren: 0.12,
            },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, x: 12, scale: 0.98 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
            duration: 0.36,
            ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section id="process" className="py-24 sm:py-32">
            <h2 className="text-white text-3xl font-bold text-center">Our Process</h2>
            <p className="text-gray-300 text-center mt-2 mb-12 max-w-2xl mx-auto">From idea to impact in four simple steps. Fast, tangible, and built on trust.</p>
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {processSteps.map((step, index) => (
                    <motion.div 
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.04, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex flex-col items-start text-left p-6 rounded-xl border border-gray-700 hover:border-white/50 transition-colors cursor-pointer"
                    >
                        <div className="flex items-center justify-center size-12 rounded-lg bg-white text-black mb-5">
                            <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

function MinimalistKpi() {
    const kpis = [
      {
        icon: 'rocket_launch',
        value: '50+',
        label: 'Projects Delivered',
      },
      {
        icon: 'sentiment_satisfied',
        value: '98%',
        label: 'Client Satisfaction',
      },
      {
        icon: 'calendar_month',
        value: '6+',
        label: 'Years of Experience',
      },
      {
        icon: 'groups',
        value: '20+',
        label: 'Skilled Professionals',
      },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
            type: 'spring',
            stiffness: 100,
            },
        },
    };

    return (
        <section id="kpis" className="py-24 sm:py-32">
             <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                {kpis.map((kpi, index) => (
                    <motion.div 
                        key={index} 
                        variants={itemVariants}
                        className="p-8 rounded-xl bg-gray-100 border border-gray-200 text-center flex flex-col items-center"
                    >
                        <div className="flex items-center justify-center size-16 rounded-full bg-black text-white mb-5">
                             <span className="material-symbols-outlined text-3xl">{kpi.icon}</span>
                        </div>
                        <p className="text-4xl font-bold text-black">{kpi.value}</p>
                        <p className="text-sm text-gray-600 mt-1">{kpi.label}</p>
                    </motion.div>
                ))}
            </motion.div>
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

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
            delay: i * 0.1,
            type: 'spring',
            stiffness: 100,
            },
        }),
    };

    return (
        <section id="services" className="py-24 sm:py-32">
            <h2 className="text-white text-3xl font-bold text-center">Our Services</h2>
            <p className="text-gray-300 text-center mt-2 mb-12 max-w-2xl mx-auto">A clear breakdown of our core offerings designed to elevate your business operations.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div 
                        key={index} 
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        className="flex flex-col items-center text-center p-8 rounded-xl bg-gray-900/50 border border-gray-700"
                    >
                        <div className="flex items-center justify-center size-16 rounded-full bg-white text-black mb-6">
                            <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                    </motion.div>
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
  const footerNavs = {
    'Quick Links': [
      { href: '/projects', name: 'Projects' },
      { href: '/services', name: 'Services' },
      { href: '/contact', name: 'Contact Us' },
      { href: '/about', name: 'About Us' },
      { href: '/careers', name: 'Careers' },
    ],
    'Contact': [
      { href: 'mailto:contact@linkific.com', name: 'contact@linkific.com' },
      { href: 'tel:+919022143695', name: '+91 9022143695' },
      { href: 'tel:+919209147566', name: '+91 9209147566' },
      { href: '#', name: 'Nagpur, Maharashtra 440023' },
    ]
  };

  const socialLinks = [
    { href: 'https://www.linkedin.com/company/linkific', name: 'LinkedIn', icon: <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path></svg> },
    { href: 'https://x.com/linkific', name: 'Twitter', icon: <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg> },
    { href: 'https://instagram.com/linkific', name: 'Instagram', icon: <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.44c-3.237 0-3.61.013-4.863.07-2.73.124-4.043 1.3-4.167 4.167-.057 1.253-.069 1.623-.069 4.863s.013 3.61.07 4.863c.124 2.864 1.438 4.043 4.167 4.167 1.253.057 1.623.069 4.863.069s3.61-.013 4.863-.07c2.73-.124 4.043-1.3 4.167-4.167.057-1.253.069-1.623.069-4.863s-.013-3.61-.07-4.863c-.124-2.864-1.438-4.043-4.167-4.167-1.253-.057-1.623-.069-4.863-.069zm0 5.838a4.56 4.56 0 100 9.12 4.56 4.56 0 000-9.12zm0 7.722a3.16 3.16 0 110-6.32 3.16 3.16 0 010 6.32zm6.406-9.33a1.147 1.147 0 10-2.294 0 1.147 1.147 0 002.294 0z"></path></svg>},
    { href: 'https://fb.com/linkific', name: 'Facebook', icon: <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg> },
  ];
  return (
    <footer className="mt-16 sm:mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-white text-2xl">auto_awesome</span>
                <h2 className="text-white text-xl font-bold">Linkific</h2>
            </div>
            <p className="text-gray-400 text-sm">If you are reading this. why wait? lets have a chat.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerNavs['Quick Links'].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
               {footerNavs['Contact'].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Linkific. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
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

        {/* Process Section - Black BG with top diagonal clip */}
        <div className="bg-black text-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
             <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                <MinimalistProcess />
            </main>
        </div>
        
        {/* KPI Section - White BG with top diagonal clip */}
        <div className="bg-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                <MinimalistKpi />
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

