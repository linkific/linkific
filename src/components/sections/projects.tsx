import Image from 'next/image';
import Link from 'next/link';

const allProjects = [
    {
        title: "Hospital support chatbot",
        description: "A healthcare support chatbot for bookings and query resolutions for doctors.",
        imageUrl: "https://picsum.photos/seed/hospital-interior/800/600",
        alt: "Hospital support chatbot",
        "data-ai-hint": "hospital interior"
    },
    {
        title: "AI assisted chrome extension",
        description: "An API integrated chrome extension that allows user to manage different EHR systems at once.",
        imageUrl: "https://picsum.photos/seed/browser-extension/300/200",
        alt: "AI assisted chrome extension"
    },
    {
        title: "Poultry Farm management application",
        description: "A android app that allows user to keep track of poultry with a integrated system.",
        imageUrl: "https://picsum.photos/seed/poultry-farm/300/200",
        alt: "Poultry Farm management application"
    },
    {
        title: "Hotel kiosk + AI detection",
        description: "A kiosk system with hand movement detection to handle ordering with wireless communications.",
        imageUrl: "https://picsum.photos/seed/hotel-kiosk/300/200",
        alt: "Hotel kiosk with AI detection"
    },
    {
        title: "Pose detection with armed drone",
        description: "A pose detection software that enables a drone to understand position of a person in front for friend or foe detection.",
        imageUrl: "https://picsum.photos/seed/drone-detection/300/200",
        alt: "Pose detection with armed drone"
    },
    {
        title: "Object detection through restaurants cams",
        description: "Computer vision for hotel table management (detects empty tables, hand signals for service, etc.)",
        imageUrl: "https://picsum.photos/seed/restaurant-vision/300/200",
        alt: "Object detection in a restaurant"
    },
    {
        title: "Document Classification ML Model",
        description: "Automatically identifies document types (Aadhaar card, PAN card, income certificates, etc.)",
        imageUrl: "https://picsum.photos/seed/document-classifier/300/200",
        alt: "Document Classification ML Model"
    },
    {
        title: "Breakout rooms - AI command",
        description: "A AI integrated sales and management system with integrated call agents.",
        imageUrl: "https://picsum.photos/seed/ai-command-center/300/200",
        alt: "Breakout rooms AI command system"
    },
];

const ProjectCard = ({ project }: { project: typeof allProjects[0] & { "data-ai-hint"?: string } }) => (
    <div className="flex flex-col gap-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 h-full group hover:-translate-y-2 transition-transform duration-300">
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
    </div>
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
                        <ProjectCard key={index} project={project} />
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
