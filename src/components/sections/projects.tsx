import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Intelligent Document Processing",
        description: "Automated data extraction from invoices, receipts, and forms with over 99% accuracy using our custom OCR and NLP models.",
    },
    {
        title: "Customer Support Automation",
        description: "A chatbot solution that resolves over 80% of customer inquiries, freeing up human agents for complex issues.",
    },
    {
        title: "Predictive Maintenance AI",
        description: "An AI system that predicts machinery failures with 95% accuracy, reducing downtime and maintenance costs significantly.",
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Our Impactful Projects</h2>
                    <p className="mt-4 text-lg leading-8 text-muted-foreground">
                        Discover how we're transforming industries with AI automation.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/20 shadow-2xl shadow-primary/10"
                        >
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                                <p className="text-muted-foreground">{project.description}</p>
                                <Button variant="link" className="p-0 h-auto text-primary group-hover:text-accent">
                                    View Project
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
