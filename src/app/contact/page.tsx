import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { CodeRainBackground } from '@/components/layout/code-rain-background';
import { ContactForm } from '@/components/sections/contact-form';
import { MapPin, Mail, Phone } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    text: 'contact@linkific.com',
    href: 'mailto:contact@linkific.com',
  },
  {
    icon: Phone,
    text: '+91 9022143695',
    href: 'tel:+919022143695',
  },
  {
    icon: Phone,
    text: '+91 9209147566',
    href: 'tel:+919209147566',
  },
  {
    icon: MapPin,
    text: 'Nagpur, Maharashtra 440023',
    href: 'https://www.google.com/maps/search/?api=1&query=Nagpur+Maharashtra+440023',
  }
]

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-transparent font-display text-white">
      <CodeRainBackground />
      {/* Main Content Wrapper */}
      <div className="relative z-10">
        <Header />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="p-8 sm:p-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                <p className="text-white/70 mb-8">
                  Have a project in mind, a question, or just want to say hello? We'd love to hear from you.
                </p>
                <div className="space-y-6 mb-12">
                  {contactDetails.map((detail, index) => (
                    <a key={index} href={detail.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                      <detail.icon className="size-6 text-primary" />
                      <span className="text-white/80 group-hover:text-white transition-colors">{detail.text}</span>
                    </a>
                  ))}
                </div>
                <div className="aspect-video rounded-lg overflow-hidden">
                   <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.42818532457!2d79.0099092892976!3d21.1611311028713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31add29%3A0x52ae8f6f352dc448!2sNagpur%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1628181219952!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
              </div>
               <div>
                <h2 className="text-3xl font-bold mb-4">Send us a message</h2>
                <p className="text-white/70 mb-8">
                  We'll get back to you as soon as possible.
                </p>
                <ContactForm page="contact" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
