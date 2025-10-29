'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const allProjects = [
    {
        title: "Financial Firm: Predictive Analytics",
        description: "Increased predictive accuracy by 35% with our custom AI models.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA4hqTAAm6mZOcgulHLlHmN6hVFhk9LTLNcqwlTdEsNRVLwlSf_gd9Qur6Pu7gdv6GdeXUlM0s2RuaSlj7Gm2doNknTgzhWX4g3VvkaPJ1i-Z8bM3zP-2DMdfJ2KAV3o3Qv_ut_VNavCUgnkIsgeBfiRo6K_u96SA1Y_UR8eQ-jHBXS18D0RtqmV7aYw_yk7W2Gymtwn6jZDQETlAEWdmy-SiKPwONeo3Ba57_ZP1jyMBMxYPNL6gXkuVsG0opzmRFNOGyGkypgPLI",
        alt: "Abstract visualization of financial data charts",
        "data-ai-hint": "financial data"
    },
    {
        title: "Logistics Co: Workflow Automation",
        description: "Reduced manual processing time by 80% through intelligent automation.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiyJWy9-KFMJt3N1tcOlZXiYcC3OhWyclxbiseCxwSQwIvUdX7gmdpRao1HPGyqxud-XKxn0Bk57MYqVGuJSyOeqZYUuG0ft29IvdUX6tMJZTwvvhMY-lq8xpYZbF2zCtxcbawlrxLnIEqnhWxVeKnjWta9I5P5l3_qh5IZXYNsIgE_WJWuWkFqbUg9kaoeq3Dg_PCc0tXcShuf4s5XQ1y8hCxFMtAv2nnY51cRufnMytLFjBB0YGAyTuTtfhNOegmairIRaIwWb5v",
        alt: "Stylized graphic of automated warehouse conveyor belts",
        "data-ai-hint": "warehouse automation"
    },
    {
        title: "Healthcare Inc: Custom Software",
        description: "Developed a compliant and efficient patient management system.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC83IBjzURxK3GdJfIyrdX00gaODvro2HgSotVnBJsYjXhEdhui44EZfOB4MxmQxIRmJbe_nZonMqFwEsz5Zr12FPnnz4-XUtUzmH3TSsKLkptiwThpi9C19Iw3a4mLfP4W3MeYO7Dyp2p8Cib-yhIHwGcz0BK1HV4hpc9JF6sRJBKtpMt91aeoeT_SIDcskw-iBvcPxki1KigDUfEIIFRbF79s8lhALYeF0WJtHekY8m7cw-FQHT9cLXUjrrma6TonUcnbqEv_HOT7",
        alt: "Clean interface of a patient management software",
        "data-ai-hint": "management software"
    },
    {
        title: "Retail Tech: Personalization Engine",
        description: "Boosted customer engagement by 50% with AI-driven recommendations.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBARyTVCbXNkAwfJRgNGKky_5Pi5_pUZc-qCAmOLDnQF0quEZhpLgRKnXkReH8WA17xAP1p0zgAhYM69QW0H3ok_pNAUUyTBwTX35rH8PX11QhX1PEBabOc8UU1H1rMaFf3ngwt6Sbq5jA1EDGy-PGB365eHz_ZsfNLqYBvo3bC37l9S6PFgnFIDRb7gGo8Ajb-U5YbwVh_KTFlhkU9rznDzhY_H-yFMsgQSvzm3Ndd04C6zpRfaRSxnSFAavjaJ4KaiGWeXasTfv5r",
        alt: "E-commerce dashboard showing sales analytics",
        "data-ai-hint": "sales analytics"
    },
     {
        title: "Hospital support chatbot",
        description: "A healthcare support chatbot for bookings and query resolutions for doctors.",
        imageUrl: "/assets/hospital-support-chatbot.png",
        alt: "Hospital support chatbot",
        "data-ai-hint": "hospital interior"
    },
    {
        title: "AI assisted chrome extension",
        description: "An API integrated chrome extension that allows user to manage different EHR systems at once.",
        imageUrl: "/assets/ai-chrome-extension.png",
        alt: "AI assisted chrome extension",
        "data-ai-hint": "browser extension"
    },
    {
        title: "Poultry Farm management application",
        description: "A android app that allows user to keep track of poultry with a integrated system.",
        imageUrl: "/assets/poultry-farm-app.png",
        alt: "Poultry Farm management application",
        "data-ai-hint": "poultry farm"
    },
    {
        title: "Hotel kiosk + AI detection",
        description: "A kiosk system with hand movement detection to handle ordering with wireless communications.",
        imageUrl: "/assets/hotel-kiosk.png",
        alt: "Hotel kiosk with AI detection",
        "data-ai-hint": "hotel kiosk"
    },
    {
        title: "Pose detection with armed drone",
        description: "A pose detection software that enables a drone to understand position of a person in front for friend or foe detection.",
        imageUrl: "/assets/drone-detection.png",
        alt: "Pose detection with armed drone",
        "data-ai-hint": "drone detection"
    },
    {
        title: "Object detection through restaurants cams",
        description: "Computer vision for hotel table management (detects empty tables, hand signals for service, etc.)",
        imageUrl: "/assets/restaurant-vision.png",
        alt: "Object detection in a restaurant",
        "data-ai-hint": "restaurant vision"
    },
    {
        title: "Document Classification ML Model",
        description: "Automatically identifies document types (Aadhaar card, PAN card, income certificates, etc.)",
        imageUrl: "/assets/document-classifier.png",
        alt: "Document Classification ML Model",
        "data-ai-hint": "document classifier"
    },
    {
        title: "Breakout rooms - AI command",
        description: "A AI integrated sales and management system with integrated call agents.",
        imageUrl: "/assets/ai-command-center.png",
        alt: "Breakout rooms AI command system",
        "data-ai-hint": "ai command center"
    }
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

const ProjectCard = ({ project, index }: { project: typeof allProjects[0] & { "data-ai-hint"?: string }, index: number }) => (
    <motion.div 
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col gap-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 h-full group hover:-translate-y-2 transition-transform duration-300">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
             <Image src={project.imageUrl} alt={project.alt} layout="fill" objectFit="cover" data-ai-hint={project['data-ai-hint']} />
        </div>
        <div className="flex flex-col flex-1 justify-between gap-4">
            <div>
                <p className="text-white text-lg font-medium">{project.title}</p>
                <p className="text-white/60 text-sm mt-1">{project.description}</p>
            </div>
            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white/10 text-white text-sm font-bold hover:bg-white/20 transition-colors">
                <span className="truncate">View Case Study</span>
            </button>
        </div>
    </motion.div>
);


export default function ProjectsSection({ featured = false }: { featured?: boolean }) {
    const projects = featured ? allProjects.slice(0, 3) : allProjects;
    return (
        <section className="pt-24 sm:pt-32" id="projects">
            <div className="p-8 sm:p-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                <h2 className="text-white text-3xl font-bold text-center">Our Projects</h2>
                <p className="text-white/70 text-center mt-2 mb-12 max-w-2xl mx-auto">A curated gallery of successful case studies, showcasing the real-world application of our technology.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
                 {featured && (
                    <div className="mt-12 text-center">
                        <Link href="/projects" className="flex min-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gradient-to-r from-primary to-secondary text-white text-base font-bold shadow-lg hover:shadow-primary/50 transition-shadow mx-auto w-fit">
                                <span className="truncate">View All Projects</span>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
