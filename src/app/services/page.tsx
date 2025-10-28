import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { CodeRainBackground } from '@/components/layout/code-rain-background';
import ServiceIntroBanner from '@/components/sections/service-intro-banner';
import ServiceCards from '@/components/sections/service-cards';
import WhyChooseLinkific from '@/components/sections/why-choose-linkific';
import ProcessTimeline from '@/components/sections/process-timeline';

export default function ServicesPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-transparent font-display text-white">
      <CodeRainBackground />
      {/* Main Content Wrapper */}
      <div className="relative z-10">
        <Header />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
          <ServiceIntroBanner />
          <ServiceCards />
          <WhyChooseLinkific />
          <ProcessTimeline />
        </main>
        <Footer />
      </div>
    </div>
  );
}
