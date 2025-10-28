import Image from 'next/image';

const projects = [
    {
        title: "Financial Firm: Predictive Analytics",
        description: "Increased predictive accuracy by 35% with our custom AI models.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA4hqTAAm6mZOcgulHLlHmN6hVFhk9LTLNcqwlTdEsNRVLwlSf_gd9Qur6Pu7gdv6GdeXUlM0s2RuaSlj7Gm2doNknTgzhWX4g3VvkaPJ1i-Z8bM3zP-2DMdfJ2KAV3o3Qv_ut_VNavCUgnkIsgeBfiRo6K_u96SA1Y_UR8eQ-jHBXS18D0RtqmV7aYw_yk7W2Gymtwn6jZDQETlAEWdmy-SiKPwONeo3Ba57_ZP1jyMBMxYPNL6gXkuVsG0opzmRFNOGyGkypgPLI",
        alt: "Abstract visualization of financial data charts"
    },
    {
        title: "Logistics Co: Workflow Automation",
        description: "Reduced manual processing time by 80% through intelligent automation.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiyJWy9-KFMJt3N1tcOlZXiYcC3OhWyclxbiseCxwSQwIvUdX7gmdpRao1HPGyqxud-XKxn0Bk57MYqVGuJSyOeqZYUuG0ft29IvdUX6tMJZTwvvhMY-lq8xpYZbF2zCtxcbawlrxLnIEqnhWxVeKnjWta9I5P5l3_qh5IZXYNsIgE_WJWuWkFqbUg9kaoeq3Dg_PCc0tXcShuf4s5XQ1y8hCxFMtAv2nnY51cRufnMytLFjBB0YGAyTuTtfhNOegmairIRaIwWb5v",
        alt: "Stylized graphic of automated warehouse conveyor belts"
    },
    {
        title: "Healthcare Inc: Custom Software",
        description: "Developed a compliant and efficient patient management system.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC83IBjzURxK3GdJfIyrdX00gaODvro2HgSotVnBJsYjXhEdhui44EZfOB4MxmQxIRmJbe_nZonMqFwEsz5Zr12FPnnz4-XUtUzmH3TSsKLkptiwThpi9C19Iw3a4mLfP4W3MeYO7Dyp2p8Cib-yhIHwGcz0BK1HV4hpc9JF6sRJBKtpMt91aeoeT_SIDcskw-iBvcPxki1KigDUfEIIFRbF79s8lhALYeF0WJtHekY8m7cw-FQHT9cLXUjrrma6TonUcnbqEv_HOT7",
        alt: "Clean interface of a patient management software"
    },
    {
        title: "Retail Tech: Personalization Engine",
        description: "Boosted customer engagement by 50% with AI-driven recommendations.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBARyTVCbXNkAwfJRgNGKky_5Pi5_pUZc-qCAmOLDnQF0quEZhpLgRKnXkReH8WA17xAP1p0zgAhYM69QW0H3ok_pNAUUyTBwTX35rH8PX11QhX1PEBabOc8UU1H1rMaFf3ngwt6Sbq5jA1EDGy-PGB365eHz_ZsfNLqYBvo3bC37l9S6PFgnFIDRb7gGo8Ajb-U5YbwVh_KTFlhkU9rznDzhY_H-yFMsgQSvzm3Ndd04C6zpRfaRSxnSFAavjaJ4KaiGWeXasTfv5r",
        alt: "E-commerce dashboard showing sales analytics"
    }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div className="flex-shrink-0 w-80 snap-center">
        <div className="flex flex-col gap-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 h-full group hover:-translate-y-2 transition-transform duration-300">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                 <Image src={project.imageUrl} alt={project.alt} layout="fill" objectFit="cover" />
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
        </div>
    </div>
);


export default function ProjectsSection() {
    return (
        <section className="pt-24 sm:pt-32" id="projects">
            <h2 className="text-white text-3xl font-bold text-center">Our Projects</h2>
            <p className="text-white/70 text-center mt-2 mb-12 max-w-2xl mx-auto">A curated gallery of successful case studies, showcasing the real-world application of our technology.</p>
            <div className="flex overflow-x-auto p-2 -mx-2 gap-6 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style>{`
                    .overflow-x-auto::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
}
