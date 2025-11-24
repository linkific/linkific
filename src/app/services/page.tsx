import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ServiceIntroBanner from '@/components/sections/service-intro-banner';
import ServiceCards from '@/components/sections/service-cards';
import WhyChooseLinkific from '@/components/sections/why-choose-linkific';
import ProcessTimeline from '@/components/sections/process-timeline';

export default function ServicesPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-white font-display text-black">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
        {/* These sections are on a white background by default within the layout */}
        <ServiceIntroBanner />
        <ServiceCards />
        <WhyChooseLinkific />
        <ProcessTimeline />
      </main>
      <div className="bg-black text-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
           <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <Footer />
          </main>
      </div>
    </div>
  );
}
