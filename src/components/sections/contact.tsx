import { ContactForm } from './contact-form';

export default function ContactSection() {
    return (
        <section className="pt-24 sm:pt-32" id="contact">
            <div className="p-8 sm:p-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Let's Build the Future Together</h2>
                    <p className="text-white/70 mb-8">Ready to transform your business? Fill out the form to request a demo or consultation with our AI experts.</p>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}
