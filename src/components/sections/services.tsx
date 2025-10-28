import { BrainCircuit, Zap, CloudCog, Code, DatabaseZap, Bot } from 'lucide-react';

const services = [
    {
        icon: BrainCircuit,
        title: 'Custom AI Models',
        description: 'We develop and train bespoke AI models tailored to your specific business needs and data.',
    },
    {
        icon: Zap,
        title: 'Workflow Automation',
        description: 'Streamline your business processes with our intelligent automation solutions for maximum efficiency.',
    },
    {
        icon: CloudCog,
        title: 'AI Integration Services',
        description: 'Seamlessly integrate powerful AI capabilities into your existing software and platforms.',
    },
    {
        icon: Bot,
        title: 'Chatbot Development',
        description: 'Engage your customers with smart, responsive, and helpful AI-powered chatbots.',
    },
    {
        icon: DatabaseZap,
        title: 'Data Analytics & Insights',
        description: 'Unlock the power of your data with our AI-driven analytics to make informed decisions.',
    },
    {
        icon: Code,
        title: 'API & System Development',
        description: 'Build robust APIs and systems that serve as the backbone for your AI-powered applications.',
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 sm:py-32 bg-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">What We Offer</h2>
                    <p className="mt-4 text-lg leading-8 text-muted-foreground">
                        Our services are designed to bring the power of AI to your fingertips.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
                        >
                            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                                <service.icon className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                            <p className="mt-2 text-muted-foreground">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
