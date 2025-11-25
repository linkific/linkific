
import { ContactForm } from './contact-form';

export default function ContactSection() {
    return (
        <section className="pt-24 sm:pt-32" id="contact">
            <div className="p-8 sm:p-12 rounded-xl bg-deep-blue/30 border border-deep-blue">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 text-off-white">Ready to Automate Your Finance Workflows?</h2>
                    <p className="text-sky-blue/80 mb-8 text-lg">
                        Fill out the form to get a custom automation plan. We'll show you how we can remove manual work and save your team hours of valuable time.
                    </p>
                </div>
                <ContactForm page="home" />
            </div>
        </section>
    );
}
