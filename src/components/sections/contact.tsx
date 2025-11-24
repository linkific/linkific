import { ContactForm } from './contact-form';

export default function ContactSection() {
    return (
        <section className="pt-24 sm:pt-32" id="contact">
            <div className="p-8 sm:p-12 rounded-xl bg-dark-blue border border-blue-800">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 text-white">Your Vision, Automated.</h2>
                    <p className="text-gray-300 mb-8 text-lg">
                        Linkific delivers AI-powered automation and smart software, transforming your workflows into actionable results in as little as 1-4 weeks. Let us build the tech, so you can focus on what matters: your business.
                    </p>
                </div>
                <ContactForm page="home" />
            </div>
        </section>
    );
}
