import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ServiceIntroBanner from '@/components/sections/service-intro-banner';
import ServiceCards from '@/components/sections/service-cards';
import WhyChooseLinkific from '@/components/sections/why-choose-linkific';
import ProcessTimeline from '@/components/sections/process-timeline';

export default function ServicesPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-off-white font-display text-midnight-blue">
      <Header />

      {/* Intro Banner - White BG */}
      <div className="bg-off-white">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <ServiceIntroBanner />
        </main>
      </div>
      
      {/* Service Cards - Dark Blue BG */}
      <div className="bg-midnight-blue text-off-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <ServiceCards />
        </main>
      </div>
      
      {/* Why Choose Us - White BG */}
      <div className="bg-off-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <WhyChooseLinkific />
        </main>
      </div>

      {/* Process Timeline - Dark Blue BG */}
      <div className="bg-midnight-blue text-off-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <ProcessTimeline />
        </main>
      </div>

      {/* Footer - Dark Blue BG */}
      <div className="bg-midnight-blue text-off-white">
           <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <Footer />
          </main>
      </div>
    </div>
  );
}
