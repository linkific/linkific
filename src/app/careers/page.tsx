import { CodeRainBackground } from '@/components/layout/code-rain-background';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import ApplicationForm from '@/components/sections/careers/application-form';
import CareersHero from '@/components/sections/careers/careers-hero';
import InternLife from '@/components/sections/careers/intern-life';
import OpenPositions from '@/components/sections/careers/open-positions';
import WhyWorkWithUs from '@/components/sections/careers/why-work-with-us';

export default function CareersPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-transparent font-display text-white">
      <CodeRainBackground />
      {/* Main Content Wrapper */}
      <div className="relative z-10">
        <Header />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
          <CareersHero />
          <WhyWorkWithUs />
          <OpenPositions />
          <InternLife />
          <ApplicationForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}
