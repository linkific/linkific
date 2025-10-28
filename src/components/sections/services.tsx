
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

export default function ServicesSection() {
    return (
        <section id="services" className="pt-24 sm:pt-32">
            <h2 className="text-white text-3xl font-bold text-center">Our Services</h2>
            <p className="text-white/70 text-center mt-2 mb-12 max-w-2xl mx-auto">A clear breakdown of our core offerings designed to elevate your business operations.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-8 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                        <div className="flex items-center justify-center size-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 shadow-lg">
                            <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-white/60 text-sm">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
