import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from './contact-form';

export default function ContactSection() {
    const mapImage = PlaceHolderImages.find(p => p.id === 'contact-map');

    return (
        <section id="contact" className="py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Get in Touch</h2>
                    <p className="mt-4 text-lg leading-8 text-muted-foreground">
                        Have a project in mind or just want to say hello? We'd love to hear from you.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl shadow-primary/10">
                        <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                        <ContactForm />
                    </div>
                    
                    <div className="space-y-8">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl shadow-primary/10">
                            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                            <ul className="space-y-4 text-foreground/80">
                                <li className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <a href="mailto:hello@linkific.com" className="hover:text-primary transition-colors">hello@linkific.com</a>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <span>123 Innovation Drive, Tech City, 12345</span>
                                </li>
                            </ul>
                        </div>
                        {mapImage && (
                            <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-primary/10">
                                <Image 
                                    src={mapImage.imageUrl}
                                    alt={mapImage.description}
                                    width={800}
                                    height={600}
                                    className="w-full object-cover aspect-[4/3]"
                                    data-ai-hint={mapImage.imageHint}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
